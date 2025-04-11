// Данные для отрисовки столбцов графика и значений по оси X (месяцев)

class ChartData {
  constructor(labels, datasets) {
    Object.freeze(Object.assign(this, { labels }, { datasets: datasets }));
  }
}

export default ChartData;
