import { CashFlowCompiledSummaryInterface } from '@core/modules/statistics/CashFlowCompiledSummaryInterface';

export interface CashFlowByDayCompiledInterface {
  dateFrom: string | Date;
  dateTo: string | Date;
  days: CashFlowByDayCompiledDaysInterface[];
}

export interface CashFlowByDayCompiledDaysInterface {
  date: string;
  data: CashFlowCompiledSummaryInterface;
}
