import { Body, Controller, Post } from '@nestjs/common';
import { PaymentsService } from './payments.service';

@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Post('initiate')
  initiatePayment(
    @Body('debtorAccount') debtorAccount: string,
    @Body('creditorAccount') creditorAccount: string,
    @Body('creditorName') creditorName: string,
    @Body('amount') amount: number,
    @Body('description') description: string,
  ) {
    const payment = {
      debtorAccount,
      creditorAccount,
      creditorName,
      amount,
      description,
    };
    return this.paymentsService.initiatePayment(payment);
  }
}
