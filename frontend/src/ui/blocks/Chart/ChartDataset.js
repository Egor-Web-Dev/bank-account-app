// Данные для отрисовки столбцов графика

class ChartDataset {
  constructor(data, barColor, borderWidth = 0) {
    this.data = data;
    this.backgroundColor = barColor;
    this.borderWidth = borderWidth;
  }
}

export default ChartDataset;
