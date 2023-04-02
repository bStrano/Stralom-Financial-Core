import { TransactionCategoryInterface } from '@core/modules/transactions/entities/TransactionCategoryInterface';

export interface CashFlowCompiledGroupedByCategoryInterface {
  total: number;
  quantity: number;
  category: TransactionCategoryInterface;
}
