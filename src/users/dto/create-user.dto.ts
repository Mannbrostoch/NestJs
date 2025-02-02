// users/dto/create-user.dto.ts
import { IsEmail, IsString, IsNotEmpty, MinLength, IsOptional } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  readonly firstName?: string;

  @IsString()
  @IsNotEmpty()
  readonly lastName?: string;

  @IsEmail()
  @IsNotEmpty()
  readonly email?: string;

  @IsString()
  @MinLength(6)
  readonly password?: string;

  @IsString()
  @IsOptional()
  readonly phoneNumber?: string;
}