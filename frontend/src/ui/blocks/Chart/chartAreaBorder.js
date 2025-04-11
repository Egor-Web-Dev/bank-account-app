// Создаёт рамку вокруг графика

const chartAreaBorder = {
  id: "chartAreaBorder",

  afterDraw(chart, args, options) {
    const {
      ctx,
      chartArea: { left, top, width, height },
    } = chart;

    ctx.save();
    ctx.strokeStyle = options.borderColor;
    ctx.lineWidth = options.borderWidth;
    ctx.strokeRect(left, top, width, height);
    ctx.restore();
  },
};

export default chartAreaBorder;
