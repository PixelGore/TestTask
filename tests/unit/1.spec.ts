function areNumbersSequential(arr: number[]) {
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] + 1 !== arr[i + 1]) {
      return false;
    }
  }

  return true;
}

describe("1.spec.ts", () => {
  it("Retruns true to Sequential numbers", () => {
    expect(areNumbersSequential([5, 2, 3, 1, 4])).toBeTruthy();
  });
  it("Retruns false to Non-sequential numbers", () => {
    expect(areNumbersSequential([34, 23, 52, 12, 3])).toBeFalsy();
  });
  it("Retruns false to Non-sequential numbers with duplicates", () => {
    expect(areNumbersSequential([7, 6, 5, 5, 3, 4])).toBeFalsy();
  });
});
