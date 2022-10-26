/**
 * a function to convert a number to string with sensitive-language representation of this number
 * @param {*} population - number
 * @returns a string with sensitive-language representation of this number
 */

const populationToString = (population) => {
  return population.toLocaleString();
};

export default populationToString;
