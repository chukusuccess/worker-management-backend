import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsBoolean,
} from 'class-validator';

export class WorkerDto {
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @IsNotEmpty()
  @IsString()
  lastName: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  broughtByLvl1?: string; // Accepted as string, convert to ObjectId in service

  @IsOptional()
  @IsBoolean()
  supervisor?: boolean;

  @IsNotEmpty()
  @IsBoolean()
  superCommission: boolean;

  @IsNotEmpty()
  @IsString()
  street: string;

  @IsNotEmpty()
  @IsString()
  city: string;

  @IsNotEmpty()
  @IsString()
  iban: string;
}
