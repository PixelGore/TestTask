function uniqueSortedArray(arr: number[]) {
  const uniqueArray = Array.from(new Set(arr));
  return uniqueArray.sort((a, b) => a - b);
}

describe("2.spec.ts", () => {
  it("Retruns unique ascending values", () => {
    const testProps = [1, 3, 2, 2, 4, 3, 5, 6];
    const expected = [1, 2, 3, 4, 5, 6];

    expect(uniqueSortedArray(testProps)).toStrictEqual(expected);
  });
  it("Retruns one unique value", () => {
    const testProps = [9, 9, 9, 9, 9];
    const expected = [9];

    expect(uniqueSortedArray(testProps)).toStrictEqual(expected);
  });
  it("Retruns the same value if array is already sorted and unique", () => {
    const testProps = [1, 2, 3, 4, 5];
    const expected = [1, 2, 3, 4, 5];

    expect(uniqueSortedArray(testProps)).toStrictEqual(expected);
  });
});
