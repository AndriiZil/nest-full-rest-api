import { IsNumber } from 'class-validator';

export class BanUserDto {
  @IsNumber()
  readonly userId: number;
  @IsNumber()
  readonly banReason: string;
}
