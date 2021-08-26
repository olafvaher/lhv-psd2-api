import { BadRequestException, Injectable } from '@nestjs/common';
import got from 'got';
import { lhvApiUrl } from '../constants';
import * as fs from 'fs';

@Injectable()
export class AccountsService {
  async getAccountsList() {
    try {
      const url = `${lhvApiUrl}/accounts-list`;
      const { body } = await got(url, {
        headers: {
          Authorization: 'Bearer Liis-MariMnnik',
          'X-Request-ID': 'random-id',
        },
        https: {
          key: fs.readFileSync('./certificate/key.pem'),
          certificate: fs.readFileSync('./certificate/cert.pem'),
        },
        responseType: 'json',
      });
      return body;
    } catch (error) {
      console.log(error.response.body);
      if (error.response.statusCode === 400) {
        throw new BadRequestException(error.response.body);
      }
      throw error;
    }
  }
}
