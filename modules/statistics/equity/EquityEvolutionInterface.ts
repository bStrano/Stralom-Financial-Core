import { ValueByMonthInterface } from '@core/modules/statistics/ValueByMonthInterface';

export interface EquityEvolutionInterface {
  totalInvested: ValueByMonthInterface;
  totalBalance: ValueByMonthInterface;
  evolution: ValueByMonthInterface;
}
