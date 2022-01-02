import sum from "../src/index";

test('should return 3', () => {
    expect(sum(1, 2)).toBe(3);
});
test('should return 4', () => {
    expect(sum(2, 2)).toBe(4);
});

