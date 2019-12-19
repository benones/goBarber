import multer from 'multer'; // modulo 03 >>yarn add multer
import crypto from 'crypto';
import { extname, resolve } from 'path';

export default {
  storage: multer.diskStorage({
    destination: resolve(__dirname, '..', '..', 'tmp', 'uploads'),
    filename: (req, file, cb) => {
      // cb=callback
      crypto.randomBytes(16, (err, res) => {
        // cria, nomes aleatorios para os arquivos com 16Bytes
        if (err) return cb(err);

        return cb(null, res.toString('hex') + extname(file.originalname)); // nome gerado exa + .extensão do arquivo orignal
      });
    }
  })
};
