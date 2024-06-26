import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsArray, IsBoolean, IsEnum, IsOptional, IsString } from 'class-validator';
import { RoleEnum } from 'src/common/enums/enums';

export class UpdateAdminDto {
    @ApiPropertyOptional({
        type: String,
    })
    @IsOptional()
    @IsString()
    FirstName: string;

    @ApiPropertyOptional({
        type: String,
    })
    @IsOptional()
    @IsString()
    LastName: string;

    @ApiPropertyOptional({
        type: Array,
    })
    @IsOptional()
    @IsArray()
    phones: Array<string>;

    @ApiPropertyOptional({
        type: String,
    })
    @IsOptional()
    @IsString()
    UserName: string;

    @ApiPropertyOptional({
        type: String,
    })
    @IsOptional()
    @IsString()
    password: string;

    @ApiPropertyOptional({
        type: String,
    })
    @IsOptional()
    @IsString()
    role: RoleEnum;

    @ApiPropertyOptional({
        type: Boolean,
    })
    @IsOptional()
    @IsBoolean()
    isActive: boolean;
}
