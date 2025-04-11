import ChartData from "../Chart/ChartData";
import ChartTicks from "../Chart/ChartTicks";
import createChart from "../Chart/createChart";
import calcMonthlyBudget from "./calcMonthlyBudget";
import MixChartDataset from "../Chart/MixChartDataset";
import extractMaxIntegers from "../Chart/extractMaxIntegers";
import calcMonthlyTransactionsRatio from "./calcMonthlyTransactionsRatio";
import extractColors from "./extractColors";

const COUNT_TICKS = 3;
const BAR_COLORS = {
  income: "#76CA66",
  expenses: "#FD4E5D",
};

const BLOCK_OPTION = {
  title: "Соотношение входящих и исходящих транзакций",
};

function createChartTransactionsRatio(
  accountNumber,
  groupTransactions,
  labelMonths,
) {
  const budget = calcMonthlyBudget(accountNumber, groupTransactions);
  const ratio = calcMonthlyTransactionsRatio(budget);

  const dataIncome = new MixChartDataset(
    ratio.map((r) => r.incomePercent),
    BAR_COLORS.income,
    false,
    1,
  );

  const dataExpenses = new MixChartDataset(
    ratio.map((r) => r.expensesPercent),
    BAR_COLORS.expenses,
    false,
    0,
  );

  const data = new ChartData(labelMonths, [
    { ...dataIncome },
    { ...dataExpenses },
  ]);

  const ticks = new ChartTicks(
    COUNT_TICKS,
    extractMaxIntegers(data.datasets),
    "%",
    extractColors(dataIncome, dataExpenses),
  );

  return createChart(BLOCK_OPTION.title, { data, ticks });
}

export default createChartTransactionsRatio;
