import { describe, expect, test } from "vitest";
import { sqrt } from "../src/service/test";

describe("numberSqrt", () => {
  test("sqrt", () => {
    const inputSqrtNumber = 4;
    const result = sqrt(inputSqrtNumber);
    expect(result).toBe(2);
  });
});
