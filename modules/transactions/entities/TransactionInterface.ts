import {TransactionTypeEnum} from '../enums/TransactionTypeEnum';
import {TransactionCategoryInterface} from '@core/modules/transactions/entities/TransactionCategoryInterface';

export interface TransactionInterface {
  id: string;
  description: string;
  value: number;
  date: Date | string;
  type: TransactionTypeEnum;
  category: TransactionCategoryInterface;
  instalments?: number;
  instalmentCurrent?: number;
  referenceTransactionId?: string;
  referenceTransaction?: TransactionInterface;
}
