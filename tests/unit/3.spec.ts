function countOccurrences(arr: number[]): { [key: number]: number }[] {
  const countMap = new Map<number, number>();

  arr.forEach((item) => {
    countMap.set(item, (countMap.get(item) || 0) + 1);
  });

  const result: { [key: number]: number }[] = [];
  countMap.forEach((count, number) => {
    result.push({ [number]: count });
  });

  return result;
}

describe("3.spec.ts", () => {
  it("Retruns an array with key of numbers and value of count occurrences", () => {
    const testProps = [1, 3, 2, 2, 4, 3, 5, 6, 5];
    const expected = [
      { "1": 1 },
      { "3": 2 },
      { "2": 2 },
      { "4": 1 },
      { "5": 2 },
      { "6": 1 },
    ];

    expect(countOccurrences(testProps)).toStrictEqual(expected);
  });
});
