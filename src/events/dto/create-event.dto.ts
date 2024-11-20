import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsNumber, IsString, Min, MinLength } from "class-validator";

export class CreateEventDto {
    @ApiProperty({example:`Fiesta3x1`, description:`El nombre del evento`})
    @IsNotEmpty()
    @IsString()
    @MinLength(1)
    name:String;

    @ApiProperty({example:`20-09-2024`, description:`La fecha de realizacion del evento`})
    @IsNotEmpty()
    @IsString()
    @MinLength(1)
    date:String;
    
    @ApiProperty({example:`Pablito Clava Clavitos`, description:`El nombre del dueño del evento`})
    @IsNotEmpty()
    @IsString()
    @MinLength(1)
    guestName:String;

    @ApiProperty({example:`pablo.clavaclavos2497@`, description:`El email del dueño del evento`})
    @IsNotEmpty()
    @IsEmail()
    @MinLength(1)
    guestEmail:String;

    @ApiProperty({example:`Fiesta3x1`, description:`El nombre del evento`})
    @IsNotEmpty()
    @IsNumber()
    @Min(1)
    guestCount:number;

    @ApiProperty({example:`Queremos un bartender enano con un letrero que diga minibar`, description:`Los requerimientos especiales del evento`})
    @IsString()
    @MinLength(0)
    specialRequests:String;
}
