import { IsInt, Min } from 'class-validator';

export class CreateEntryDto {
    @IsInt()
    @Min(100)
    income: number;
}