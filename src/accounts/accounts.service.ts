import { Injectable } from '@nestjs/common';

@Injectable()
export class AccountsService {
  getAccountsList() {
    console.log('returning accounts list');
  }
}
