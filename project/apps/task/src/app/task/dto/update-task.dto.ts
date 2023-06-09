import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsDate, IsEnum, IsNumber, IsOptional, IsString, Length, Min, MinDate } from 'class-validator';
import {TaskValidateCondition} from '../task.constant';
import { Category, City } from "@project/shared/app-types";
import { Transform } from 'class-transformer';

export class UpdateTaskDto {
    @ApiProperty({
        description: 'Заголовок задания',
        example: 'Забить гвоздь'
    })
    @IsString()
    @Length(TaskValidateCondition.MinTitleLength, TaskValidateCondition.MaxTitleLength)
    public title?: string;

    @ApiProperty({
        description: 'Описание задания',
        example: 'Нужно забить гвоздь, чтобы повесить картину'
    })
    @IsString()
    @Length(TaskValidateCondition.MinDescriptionLength, TaskValidateCondition.MaxDescriptionLength)
    public description?: string;

    @ApiProperty({
        description: 'Категория задания',
        example: 'Подработка на час'
    })
    public category?: Category;

    @ApiProperty({
        description: 'Стоимость за работу/услугу',
        example: '1000'
    })
    @IsOptional()
    @IsNumber()
    @Min(TaskValidateCondition.MinCost)
    public cost?: number;

    @ApiProperty({
        description: 'Срок выполнения задания',
        example: '2023-04-24'
    })
    @IsDate()
    @MinDate(new Date())
    @IsOptional()
    public dueDate?: Date;


    public status?: string;

    @ApiProperty({
        description: 'Изображение',
        example: 'гвоздь.jpg'
    })
    @IsOptional()
    public picture?: string;

    @ApiProperty({
        description: 'Адрес',
        example: 'Москва, ул. Информационная, д. 1'
    })
    @IsOptional()
    @IsString()
    @Length(TaskValidateCondition.MinAddressLength, TaskValidateCondition.MaxAddressLength)
    public address?: string;

    @ApiProperty({
        description: 'Массив тегов',
        example: ['новое', 'ручная работа']
    })
    @IsArray()
    @IsOptional()
    public tagSet?: string[];

    @ApiProperty({
        description: 'Один из городов: Москва, Владивосток, Санкт-Петербург',
        example: 'Москва'
    })
    @IsEnum(City)
    @Transform(({ value }) => value as City)
    public city?: string;
}