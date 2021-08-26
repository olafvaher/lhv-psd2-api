import { Module } from '@nestjs/common';
import { AccountsModule } from './accounts/accounts.module';
import { PaymentsModule } from './payments/payments.module';

@Module({
  imports: [AccountsModule, PaymentsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
