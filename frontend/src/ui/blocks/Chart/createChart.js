import "./chart.scss";
import initChart from "./initChart";
import createCanvas from "../Canvas/createCanvas";
import createSection from "../Section/createSection";

const BLOCK_OPTION = {
  className: "chart",
};

function createChart(title, chartOptions) {
  const canvas = createCanvas();
  const wrapper = createSection("h2", title, BLOCK_OPTION.className);

  canvas.classList.add(`${BLOCK_OPTION.className}__canvas`);

  initChart(canvas, chartOptions);

  wrapper.append(canvas);

  return wrapper;
}

export default createChart;
