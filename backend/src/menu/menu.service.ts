import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';

@Injectable()
export class MenuService {
  // Pekan 9: private menu: Menu[] = [];  ->  Pekan 10: PrismaService
  constructor(private readonly prisma: PrismaService) {}

  create(dto: CreateMenuDto) {
    return this.prisma.menu.create({ data: dto });
  }

  findAll() {
    return this.prisma.menu.findMany({ orderBy: { id: 'asc' } });
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
}
