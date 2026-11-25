import {
  IsIn,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  Min,
} from 'class-validator';

export const KATEGORI_MENU = [
  'Makanan',
  'Minuman',
  'Camilan',
  'Bahan Baku',
] as const;

export class CreateMenuDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  nama: string;

  @IsInt()
  @Min(0)
  harga: number;

  @IsOptional()
  @IsInt()
  @Min(0)
  stok?: number;

  @IsIn(KATEGORI_MENU)
  kategori: string;

  @IsOptional()
  @IsString()
  deskripsi?: string;
}
