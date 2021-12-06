import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsEmail, Length } from 'class-validator';

export class CreateUserDto {

  @ApiProperty({ example: 'example@gmail.com', description: 'Email address' })
  @IsString({ message: 'Email should be a string '})
  @IsEmail({}, { message: 'Not correct email' })
  readonly email: string;

  @ApiProperty({ example: '12345', description: 'Users password' })
  @Length(4, 16, { message: 'Not less than 4 and more than 16' })
  readonly password: string;
}
