import ChartData from "../Chart/ChartData";
import ChartTicks from "../Chart/ChartTicks";
import createChart from "../Chart/createChart";
import ChartDataset from "../Chart/ChartDataset";
import calcMonthlyBalance from "./calcMonthlyBalance";
import extractMaxIntegers from "../Chart/extractMaxIntegers";

const COUNT_TICKS = 2;
const BAR_COLOR = "#116ACC";
const BLOCK_OPTION = {
  title: "Динамика баланса",
};

function createChartBalance(accountInfo, groupTransactions, labelMonths) {
  const monthlyBalances = calcMonthlyBalance(
    accountInfo.account,
    accountInfo.balance,
    groupTransactions,
  );

  const datasets = new ChartDataset(monthlyBalances, BAR_COLOR);
  const data = new ChartData(labelMonths, [{ ...datasets }]);
  const ticks = new ChartTicks(
    COUNT_TICKS,
    extractMaxIntegers(data.datasets),
    "₽",
  );

  return createChart(BLOCK_OPTION.title, { data, ticks });
}

export default createChartBalance;
