import {CashFlowStatisticsInterface} from "@core/modules/statistics/CashFlowStatistcs";

export interface CashFlowCompiledSummaryInterface {
  incoming: CashFlowStatisticsInterface;
  outComing: CashFlowStatisticsInterface;
  balance: CashFlowStatisticsInterface;
}
