import { Body, Controller, Post, UsePipes } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { JoiValidationPipe } from '../pipes/validation.pipe';
import { Payment, paymentSchema } from './initiatePayment.model';

@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Post('initiate')
  @UsePipes(new JoiValidationPipe(paymentSchema))
  initiatePayment(@Body() payment: Payment) {
    return this.paymentsService.initiatePayment(payment);
  }
}
