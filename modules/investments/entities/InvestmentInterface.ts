import { InvestmentTypeInterface } from '@core/modules/investments/entities/InvestmentTypeInterface';
import { InvestmentStatusEnum } from '../enums/InvestmentStatusEnum';

export interface InvestmentInterface {
  id: string;
  name: string;
  startDate: Date;
  redemptionDate?: Date | null;
  currentAmount: number;
  appliedAmount: number;
  type: InvestmentTypeInterface;
  userId: number;
  createdAt: Date;
  rentability: number;
  rentabilityMonth: number;
  status: InvestmentStatusEnum;
}
