import { TransactionTypeEnum } from '../enums/TransactionTypeEnum';

export interface TransactionInterface {
  id: string;
  description: string;
  value: number;
  type: TransactionTypeEnum;
}
