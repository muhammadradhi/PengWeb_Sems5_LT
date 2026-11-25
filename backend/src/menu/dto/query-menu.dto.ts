import { Type } from 'class-transformer';
import { IsIn, IsInt, IsOptional, IsString, Min } from 'class-validator';
import { KATEGORI_MENU } from './create-menu.dto';

// Query string untuk GET /menu, contoh: /menu?kategori=Minuman&cari=es
export class QueryMenuDto {
  @IsOptional()
  @IsIn(KATEGORI_MENU)
  kategori?: string;

  @IsOptional()
  @IsString()
  cari?: string;

  // tampilkan hanya menu dengan stok <= nilai ini
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(0)
  stokMaks?: number;
}
