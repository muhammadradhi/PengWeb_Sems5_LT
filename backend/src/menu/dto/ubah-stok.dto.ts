import { IsInt, NotEquals } from 'class-validator';

// jumlah positif = tambah stok, negatif = kurangi stok.
export class UbahStokDto {
  @IsInt()
  @NotEquals(0)
  jumlah: number;
}
