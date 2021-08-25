import { Injectable } from '@nestjs/common';

@Injectable()
export class PaymentsService {
  initiatePayment() {
    console.log('payment initiated');
  }
}
