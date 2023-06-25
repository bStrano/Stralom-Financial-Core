import { TransactionTypeEnum } from '@core/modules/transactions/enums/TransactionTypeEnum';

export interface GetTotalByTagDtoInterface {
  start?: Date;
  end?: Date;
  type?: TransactionTypeEnum;
}
