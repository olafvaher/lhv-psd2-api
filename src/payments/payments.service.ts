import { BadRequestException, Injectable } from '@nestjs/common';
import { lhvApiUrl } from '../constants';
import got from 'got';
import * as fs from 'fs';
import { Payment } from './initiatePayment.model';

@Injectable()
export class PaymentsService {
  async initiatePayment({
    debtorAccount,
    creditorAccount,
    creditorName,
    amount,
    description,
  }: Payment) {
    try {
      const jsonToPost = {
        debtorAccount: {
          iban: debtorAccount,
        },
        instructedAmount: {
          currency: 'EUR',
          amount,
        },
        creditorAccount: {
          iban: creditorAccount,
        },
        creditorName,
        remittanceInformationUnstructured: description,
      };

      const url = `${lhvApiUrl}/payments/sepa-credit-transfers`;
      const { body } = await got.post(url, {
        headers: {
          Authorization: 'Bearer Liis-MariMnnik',
          'X-Request-ID': 'random-id',
          'PSU-IP-Address': '1.2.3.4',
          'TPP-Redirect-URI': 'https://www.example.com',
          'TPP-Redirect-Preferred': 'true',
        },
        https: {
          key: fs.readFileSync('./certificate/key.pem'),
          certificate: fs.readFileSync('./certificate/cert.pem'),
        },
        responseType: 'json',
        json: jsonToPost,
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
