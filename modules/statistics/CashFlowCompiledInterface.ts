import { TransactionTypeEnum } from '@core/modules/transactions/enums/TransactionTypeEnum';

export interface CashFlowCompiledInterface {
  total: number;
  quantity: number;
  year: number;
  month: number;
  day: number;
  type: TransactionTypeEnum | 'balance';
}
