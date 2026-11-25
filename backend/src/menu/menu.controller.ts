import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { MenuService } from './menu.service';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { UbahStokDto } from './dto/ubah-stok.dto';
import { QueryMenuDto } from './dto/query-menu.dto';

// Controller ini sama seperti versi Pekan 9 (array di memori).
// Yang berubah di Pekan 10 hanya MenuService: sekarang memakai Prisma.
@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Post()
  create(@Body() dto: CreateMenuDto) {
    return this.menuService.create(dto);
  }

  @Get()
  findAll(@Query() query: QueryMenuDto) {
    return this.menuService.findAll(query);
  }

  // Harus di atas ':id' supaya "statistik" tidak dianggap sebagai id.
  @Get('statistik')
  statistik() {
    return this.menuService.statistik();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.menuService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateMenuDto) {
    return this.menuService.update(id, dto);
  }

  @Patch(':id/stok')
  ubahStok(@Param('id', ParseIntPipe) id: number, @Body() dto: UbahStokDto) {
    return this.menuService.ubahStok(id, dto.jumlah);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.menuService.remove(id);
  }
}
