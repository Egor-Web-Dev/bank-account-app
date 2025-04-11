import ChartDataset from "./ChartDataset";

// Данные для отрисовки столбцов в смешанном графике

class MixChartDataset extends ChartDataset {
  constructor(data, barColor, grouped, order, borderWidth = 0) {
    super(data, barColor, borderWidth);
    this.grouped = grouped;
    this.order = order;
  }
}

export default MixChartDataset;
