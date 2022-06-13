const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
  try {
    const outputTheaterIXX = await promiseTheaterIXX();
    const outputTheaterVGC = await promiseTheaterVGC();
    const arrOutput = outputTheaterIXX.concat(outputTheaterVGC);

    return arrOutput.filter((record) => record.hasil === emosi).length;
  } catch (err) {
    return `Error: ${err}`;
  }
};

module.exports = {
  promiseOutput,
};
