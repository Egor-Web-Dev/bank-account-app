function calcTicksLabels({ labels, sign }) {
  return (value, index, values) => {
    const valueRange = values.map((v) => v.value);

    switch (value) {
      case Math.max(...valueRange):
        return `${Math.max(...labels)} ${sign}`;
      case 0:
        return `0 ${sign}`;
      default:
        return `${Math.min(...labels)} ${sign}`;
    }
  };
}

export default calcTicksLabels;
