import { act, renderHook } from "@testing-library/react";

import { TIME_DELAY, useUsers } from "./useUsers";

describe("useUsers", () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it("returns no data initially", () => {
    const { result } = renderHook(() => useUsers());
    expect(result.current.data).toBeUndefined();
  });

  it("returns data after it loads", () => {
    const { result } = renderHook(() => useUsers());
    act(() => {
      jest.advanceTimersByTime(TIME_DELAY + 1);
    });
    expect(result.current.data).toBeDefined();
    expect(result.current.data).toHaveLength(3);
  });

  it("updates only the relevant user called by updateUser", () => {
    expect(null).toStrictEqual([{ idUser: 0 }]);
  });
});
