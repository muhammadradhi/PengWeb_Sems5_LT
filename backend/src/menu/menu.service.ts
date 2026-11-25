import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { QueryMenuDto } from './dto/query-menu.dto';

const BATAS_STOK_MENIPIS = 5;

@Injectable()
export class MenuService {
  // Pekan 9: private menu: Menu[] = [];  ->  Pekan 10: PrismaService
  constructor(private readonly prisma: PrismaService) {}

  create(dto: CreateMenuDto) {
    return this.prisma.menu.create({ data: dto });
  }

  // Query lanjutan (where): filter kategori, cari nama, dan stok maksimal.
  findAll(query: QueryMenuDto = {}) {
    const where: Prisma.MenuWhereInput = {};
    if (query.kategori) where.kategori = query.kategori;
    if (query.cari) where.nama = { contains: query.cari, mode: 'insensitive' };
    if (query.stokMaks !== undefined) where.stok = { lte: query.stokMaks };

    return this.prisma.menu.findMany({ where, orderBy: { id: 'asc' } });
  }

  async findOne(id: number) {
    const menu = await this.prisma.menu.findUnique({ where: { id } });
    if (!menu) {
      throw new NotFoundException(`Menu dengan id ${id} tidak ditemukan`);
    }
    return menu;
  }

  async update(id: number, dto: UpdateMenuDto) {
    await this.findOne(id);
    return this.prisma.menu.update({ where: { id }, data: dto });
  }

  // Tambah/kurangi stok secara atomik; stok tidak boleh jadi minus.
  async ubahStok(id: number, jumlah: number) {
    const hasil = await this.prisma.menu.updateMany({
      where: { id, stok: { gte: -jumlah } },
      data: { stok: { increment: jumlah } },
    });
    if (hasil.count === 0) {
      const menu = await this.findOne(id); // 404 kalau id tidak ada
      throw new BadRequestException(
        `Stok "${menu.nama}" tinggal ${menu.stok}, tidak bisa dikurangi ${-jumlah}`,
      );
    }
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.menu.delete({ where: { id } });
  }

  // Query lanjutan (count, groupBy, aggregate): ringkasan untuk dashboard.
  async statistik() {
    const [totalMenu, stokHabis, stokMenipis, agregat, perKategori] =
      await Promise.all([
        this.prisma.menu.count(),
        this.prisma.menu.count({ where: { stok: 0 } }),
        this.prisma.menu.count({
          where: { stok: { gt: 0, lte: BATAS_STOK_MENIPIS } },
        }),
        this.prisma.menu.aggregate({
          _sum: { stok: true },
          _avg: { harga: true },
        }),
        this.prisma.menu.groupBy({
          by: ['kategori'],
          _count: { _all: true },
          orderBy: { kategori: 'asc' },
        }),
      ]);

    return {
      totalMenu,
      totalStok: agregat._sum.stok ?? 0,
      rataRataHarga: Math.round(agregat._avg.harga ?? 0),
      stokHabis,
      stokMenipis,
      perKategori: perKategori.map((k) => ({
        kategori: k.kategori,
        jumlah: k._count._all,
      })),
    };
  }
}
