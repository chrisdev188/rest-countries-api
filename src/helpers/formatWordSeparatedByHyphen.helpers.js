const formatWordSeparatedByHyphen = (string) => {
  return string.toLowerCase().split(" ").join("-").toLowerCase();
};
export default formatWordSeparatedByHyphen;
