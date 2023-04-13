import { CashFlowStatisticsInterface } from '@core/modules/statistics/CashFlowStatistcs';

export interface CashFlowSummaryInterface {
  incoming: CashFlowStatisticsInterface;
  outComing: CashFlowStatisticsInterface;
  balance: CashFlowStatisticsInterface;
}
