import * as Joi from 'joi';

interface PaymentData {
  debtorAccount: string;
  creditorAccount: string;
  creditorName: string;
  amount: number;
  description: string;
}

export class Payment {
  debtorAccount: string;
  creditorAccount: string;
  creditorName: string;
  amount: number;
  description: string;

  constructor({
    debtorAccount,
    creditorAccount,
    creditorName,
    amount,
    description,
  }: PaymentData) {
    this.debtorAccount = debtorAccount;
    this.creditorAccount = creditorAccount;
    this.creditorName = creditorName;
    this.amount = amount;
    this.description = description;
  }
}

export const paymentSchema = Joi.object<PaymentData>().keys({
  debtorAccount: Joi.string().length(20).required(),
  creditorAccount: Joi.string().length(20).required(),
  creditorName: Joi.string().required(),
  amount: Joi.number().required(),
  description: Joi.string().required(),
});
