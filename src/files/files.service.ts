import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { join, resolve } from 'path';
import { promises } from 'fs';
import * as fs from 'fs';
import * as uuid from 'uuid';

@Injectable()
export class FilesService {

  async createFile(file): Promise<string> {
    try {
      const fileName = `${uuid.v4()}.jpeg`;
      const filePath = resolve(__dirname, '..', 'static');
      const isFolderExists = fs.existsSync(filePath);

      if (!isFolderExists) {
        await promises.mkdir(filePath, { recursive: true })
      }

      console.log(file);

      await promises.writeFile(join(filePath, fileName), file.buffer)

      // fs.writeFileSync(join(filePath, fileName), file.buffer);

      return 'fileName';
    } catch (err) {
      console.log(err);
      throw new HttpException('Error occured during saving file', HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }
}
