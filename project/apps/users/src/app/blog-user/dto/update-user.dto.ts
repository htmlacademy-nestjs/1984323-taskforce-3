import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsISO8601, IsString } from 'class-validator';
import { AuthUser } from '../../authentication/authentication.constant';
import { City } from '@project/shared/app-types';

export class UpdateUserDto {

    @ApiProperty({
        description: 'User first name',
        example: 'Keks',
    })
    @IsString()
    public fullname?: string;

    @ApiProperty({
        description: 'User birth date',
        example: '1981-03-12',
    })
    @IsISO8601({}, { message: AuthUser.DateBirthNotValid })
    public dateBirth?: Date;

    @ApiProperty({
        description: 'About user',
        example: 'Студент'
    })
    @IsString()
    public selfInfo?: string;

    @ApiProperty({
        description: 'Specialization',
        example: 'Курьер'
    })
    @IsString()
    public specialization?: string;

    @ApiProperty({
        description: 'City of residence',
        example: 'Санкт-Петербург'
    })
    @IsString()
    @IsEnum(City)
    public city?: string;
}