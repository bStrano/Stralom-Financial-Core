import { InvestmentTypeInterface } from '@core/modules/investments/entities/InvestmentTypeInterface';

export interface InvestmentInterface {
  id: string;
  name: string;
  startDate: Date;
  redemptionDate: Date;
  currentAmount: number;
  appliedAmount: number;
  type: InvestmentTypeInterface;
  userId: number;
  createdAt: Date;
  rentability: number;
}
