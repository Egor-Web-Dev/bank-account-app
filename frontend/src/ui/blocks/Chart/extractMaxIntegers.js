function extractMaxIntegers(chartDatasets) {
  return chartDatasets.map((d) => parseInt(Math.max(...d.data)));
}

export default extractMaxIntegers;
