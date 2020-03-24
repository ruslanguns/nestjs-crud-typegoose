import { IsString, IsOptional } from 'class-validator';

export class EditEntryDto {
    @IsOptional()
    @IsString()
    income: number;
}