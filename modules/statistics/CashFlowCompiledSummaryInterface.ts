import { CashFlowCompiledInterface } from '@core/modules/statistics/CashFlowCompiledInterface';

export interface CashFlowCompiledSummaryInterface {
  incoming: CashFlowCompiledInterface;
  outComing: CashFlowCompiledInterface;
  balance: CashFlowCompiledInterface;
}
