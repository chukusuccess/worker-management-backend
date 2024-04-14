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
  broughtByLvl1?: string; // Accepted as string, convert to ObjectId in model

  @IsOptional()
  @IsString()
  supervisor?: string; // Accepted as string, convert to ObjectId in model

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
