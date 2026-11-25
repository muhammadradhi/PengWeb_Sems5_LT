import { PartialType } from '@nestjs/mapped-types';
import { CreateMenuDto } from './create-menu.dto';

// Semua field CreateMenuDto jadi opsional untuk PATCH.
export class UpdateMenuDto extends PartialType(CreateMenuDto) {}
