import { CashFlowCompiledInterface } from '@core/modules/statistics/CashFlowCompiledInterface';

export interface CashFlowStatisticsInterface {
  values: CashFlowCompiledInterface[];
  current: number;
  total: number;
  percentage: number;
  mediumPace: number;
}
