// Данные для отрисовки значений по оси Y

class ChartTicks {
  constructor(countTicks, ticksLabels, sign, colors = []) {
    Object.freeze(
      Object.assign(
        this,
        { count: countTicks },
        { labels: ticksLabels },
        { sign },
        { colors },
      ),
    );
  }
}

export default ChartTicks;
