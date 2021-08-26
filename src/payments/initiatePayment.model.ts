export class Payment {
  debtorAccount: string;
  creditorAccount: string;
  creditorName: string;
  amount: number;
  description: string;

  constructor(
    debtorAccount: string,
    creditorAccount: string,
    creditorName: string,
    amount: number,
    description: string,
  ) {
    this.debtorAccount = debtorAccount;
    this.creditorAccount = creditorAccount;
    this.creditorName = creditorName;
    this.amount = amount;
    this.description = description;
  }
}
