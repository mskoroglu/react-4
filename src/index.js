const
  numberPattern = /^\d+$/,
  rangePattern = /^(-?\d+)\.\.(-?\d+)$/;

const
  isNumber = statement => numberPattern.test(statement),
  isArray = statement => Array.isArray(statement),
  isRange = statement => rangePattern.test(statement),
  isObject = statement =>
    typeof statement === "object"
    && statement.from !== undefined
    && statement.to !== undefined;

const
  newArray = length => new Array(length).fill(undefined),

  extractRangeValues = statement => {
    const result = rangePattern.exec(statement);
    return {
      from: parseInt(result[1]),
      to: parseInt(result[2])
    };
  },

  createRangeMapper = ({ from, to }) => {
    const reversed = from > to;
    return {
      arrayLength: (reversed ? from - to : to - from) + 1,
      mapper: (_, i) => reversed ? from - i : from + i
    };
  },

  status = (i, arrayLength) => {
    const
      index = i,
      count = index + 1,
      size = arrayLength,
      isEven = index % 2 === 0,
      isOdd = !isEven,
      isFirst = index === 0,
      isLast = count === size;

    return { index, count, size, isEven, isOdd, isFirst, isLast };
  };


export const For = ({ children, each, map }) => {
  let repeat, elements;
  const statement = each;

  if (isNumber(statement)) {
    repeat = parseInt(statement);
    elements = newArray(repeat);

    if (children && !map) {
      return elements.map(() => children);
    }

  } else if (isArray(statement)) {
    elements = statement;

  } else if (isRange(statement)) {
    const { arrayLength, mapper } = createRangeMapper(extractRangeValues(statement));
    elements = newArray(arrayLength).map(mapper);

  } else if (isObject(statement)) {
    const { arrayLength, mapper } = createRangeMapper(statement);
    elements = newArray(arrayLength).map(mapper);

  } else {
    throw new Error("Invalid statement for `each` prop");
  }

  const arrayLength = elements.length;
  return elements.map((item, index) => {
    const stat = status(index, arrayLength);
    return repeat ? map(stat) : map(item, stat);
  });
};

export default For;