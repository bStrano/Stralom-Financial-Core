export interface CreateInvestmentDTOInterface {
  name: string;
  startDate: Date;
  currentAmount?: number;
  appliedAmount: number;
  typeId: string;
}
