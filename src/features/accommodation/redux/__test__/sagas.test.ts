import { describe, it, expect } from "vitest";
import { expectSaga, testSaga } from "redux-saga-test-plan";
import { checkInputValueSaga, watchCheckInputValueAction } from "../sagas.ts";
import {
  accommodationSlice,
  checkInputValueAction,
  initialState,
} from "../slices.ts";

describe("checkInputValueSaga", () => {
  it("should be a function", () => {
    expect(typeof checkInputValueSaga).toBe("function");
  });

  it("should handle input name flow correctly with wrong length", async () => {
    return expectSaga(checkInputValueSaga, {
      payload: {
        field: "name",
        value: "a",
      },
    })
      .withState(initialState)
      .withReducer(
        (state, action) => ({
          ...state,
          accommodation: accommodationSlice.reducer(initialState, action),
        }),
        {
          accommodation: initialState,
        },
      )
      .hasFinalState({
        accommodation: {
          ...initialState,
          name: {
            ...initialState.name,
            isValid: false,
          },
        },
      })
      .run();
  });

  it("should handle input name flow correctly with numbers", async () => {
    return expectSaga(checkInputValueSaga, {
      payload: {
        field: "name",
        value: "0",
      },
    })
      .withState(initialState)
      .withReducer(
        (state, action) => ({
          ...state,
          accommodation: accommodationSlice.reducer(initialState, action),
        }),
        {
          accommodation: initialState,
        },
      )
      .hasFinalState({
        accommodation: {
          ...initialState,
          name: {
            ...initialState.name,
            isValid: false,
          },
        },
      })
      .run();
  });

  it("should handle input name flow correctly", async () => {
    return expectSaga(checkInputValueSaga, {
      payload: {
        field: "name",
        value: "aaaa",
      },
    })
      .withState(initialState)
      .withReducer(
        (state, action) => ({
          ...state,
          accommodation: accommodationSlice.reducer(initialState, action),
        }),
        {
          accommodation: initialState,
        },
      )
      .hasFinalState({
        accommodation: {
          ...initialState,
          name: {
            ...initialState.name,
            isValid: true,
          },
        },
      })
      .run();
  });

  it("should handle input address flow correctly with wrong length", async () => {
    return expectSaga(checkInputValueSaga, {
      payload: {
        field: "address",
        value: "a",
      },
    })
      .withState(initialState)
      .withReducer(
        (state, action) => ({
          ...state,
          accommodation: accommodationSlice.reducer(initialState, action),
        }),
        {
          accommodation: initialState,
        },
      )
      .hasFinalState({
        accommodation: {
          ...initialState,
          address: {
            ...initialState.address,
            isValid: false,
          },
        },
      })
      .run();
  });

  it("should handle input address flow correctly", async () => {
    return expectSaga(checkInputValueSaga, {
      payload: {
        field: "address",
        value: "aaaa",
      },
    })
      .withState(initialState)
      .withReducer(
        (state, action) => ({
          ...state,
          accommodation: accommodationSlice.reducer(initialState, action),
        }),
        {
          accommodation: initialState,
        },
      )
      .hasFinalState({
        accommodation: {
          ...initialState,
          address: {
            ...initialState.address,
            isValid: true,
          },
        },
      })
      .run();
  });

  it("should handle input description flow correctly with wrong length", async () => {
    return expectSaga(checkInputValueSaga, {
      payload: {
        field: "description",
        value: "aaaa",
      },
    })
      .withState(initialState)
      .withReducer(
        (state, action) => ({
          ...state,
          accommodation: accommodationSlice.reducer(initialState, action),
        }),
        {
          accommodation: initialState,
        },
      )
      .hasFinalState({
        accommodation: {
          ...initialState,
          description: {
            ...initialState.description,
            isValid: false,
          },
        },
      })
      .run();
  });

  it("should handle input description flow correctly", async () => {
    return expectSaga(checkInputValueSaga, {
      payload: {
        field: "description",
        value:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus,",
      },
    })
      .withState(initialState)
      .withReducer(
        (state, action) => ({
          ...state,
          accommodation: accommodationSlice.reducer(initialState, action),
        }),
        {
          accommodation: initialState,
        },
      )
      .hasFinalState({
        accommodation: {
          ...initialState,
          description: {
            ...initialState.description,
            isValid: true,
          },
        },
      })
      .run();
  });
});

describe("watchCheckInputValueAction", () => {
  it("should be a function", () => {
    expect(typeof watchCheckInputValueAction).toBe("function");
  });

  it("should watch form checkInputValueAction", () => {
    testSaga(watchCheckInputValueAction)
      .next()
      .takeLatest(checkInputValueAction, checkInputValueSaga)
      .next()
      .isDone();
  });
});
