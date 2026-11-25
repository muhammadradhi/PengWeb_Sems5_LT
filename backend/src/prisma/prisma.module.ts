import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

// @Global: PrismaService bisa dipakai di semua module tanpa import ulang.
@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
