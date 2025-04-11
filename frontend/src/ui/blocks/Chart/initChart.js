import Chart from "chart.js/auto";
import calcTicksLabels from "./calcTicksLabels";
import chartAreaBorder from "./chartAreaBorder";
import extractMaxIntegers from "./extractMaxIntegers";

const COLOR_BLACK = "#000";
const INITIAL_FONT_PROPS = {
  size: 20,
  weight: 600,
  family: "Work Sans, sans-serif",
};

Chart.defaults.color = COLOR_BLACK;
Chart.defaults.font = INITIAL_FONT_PROPS;

function initChart(canvas, { data, ticks }) {
  new Chart(canvas, {
    type: "bar",
    data: { ...data },
    options: {
      scales: {
        x: {
          reverse: true,
          border: { display: false },
          grid: { display: false },
        },
        y: {
          position: "right",
          border: { display: false },
          grid: { display: false },
          max: Math.max(...extractMaxIntegers([...data.datasets])),
          ticks: {
            color: [COLOR_BLACK, ...ticks.colors],
            padding: 10,
            count: ticks.count,
            callback: calcTicksLabels(ticks),
          },
          beginAtZero: true,
        },
      },
      plugins: {
        legend: {
          display: false,
        },
        chartAreaBorder: {
          borderWidth: 1,
          borderColor: COLOR_BLACK,
        },
      },
    },
    plugins: [chartAreaBorder],
  });
}

export default initChart;
