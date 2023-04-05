export interface CashFlowByDayCompiledInterface {
  dateFrom: string | Date;
  dateTo: string | Date;
  days: CashFlowByDayCompiledDaysInterface[];
}

export interface CashFlowByDayCompiledDaysInterface {
  date: string;
  data: {
    incoming: CashFlowDayCompiledSummaryInterface;
    outComing: CashFlowDayCompiledSummaryInterface;
    balance: CashFlowDayCompiledSummaryInterface;
  };
}

export interface CashFlowDayCompiledSummaryInterface {
  accumulated: number,
  total: number,
  quantity: number,
  year: number,
  month: number,
  day: number,
  type: 'outComing' | 'incoming' | 'balance'
}
