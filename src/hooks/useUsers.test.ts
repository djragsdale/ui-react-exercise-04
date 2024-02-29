import { act, renderHook } from "@testing-library/react";

import { TIME_DELAY, useUsers } from "./useUsers";

const testUsers = [
  {
    idUser: 1001,
    profile: {
      firstName: "ABC",
      lastName: "DEF",
    },
    role: "Role1",
  },
  {
    idUser: 1002,
    profile: {
      firstName: "GHI",
      lastName: "JKL",
    },
    role: "Role2",
  },
];


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
    const {result} = renderHook(()=>useUsers());

    if(result.current.data){

    const previousValues = result.current.data;
    const userToBeEdited = result.current.data[0]

    result.current.updateUser(userToBeEdited.idUser, testUsers[0])

    expect(result.current.data[0]).toStrictEqual(testUsers[0]);

    result.current.data.slice(0).forEach((value, index)=>{
      expect(value).toStrictEqual(previousValues[index]);
    })
  }

  });
});
