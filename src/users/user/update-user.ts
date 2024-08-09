import { IsString, IsOptional } from 'class-validator';

export class UpdateUser {
  @IsOptional()
  @IsString()
  username?: string;

  @IsOptional()
  @IsString()
  password?: string;
}