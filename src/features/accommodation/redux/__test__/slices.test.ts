import { describe, it, expect } from "vitest";
import { accommodationSlice, initialState } from "../slices.ts";

describe("accommodationSlice", () => {
  it("should be an object", () => {
    expect(typeof accommodationSlice).toBe("object");
  });

  it("should return the initial state", () => {
    expect(accommodationSlice.reducer(undefined, { type: "" })).toBe(
      initialState,
    );
  });

  it("should return the actions", () => {
    Object.entries(accommodationSlice.actions).forEach(([key, action]) => {
      expect(action.type).toBe(`accommodation/${key}`);
    });
  });

  it("should handle checkInputValueAction action", () => {
    const action = {
      type: accommodationSlice.actions.checkInputValueAction.type,
      payload: { field: "name", value: "test" },
    };
    const state = accommodationSlice.reducer(initialState, action);
    expect(state.name.isValid).toBe(true);
  });

  it("should handle setErrorAction action", () => {
    const action = {
      type: accommodationSlice.actions.setErrorAction.type,
      payload: { field: "name", found: false },
    };
    const state = accommodationSlice.reducer(initialState, action);
    expect(state.name.isValid).toBe(false);
  });

  it("should handle setImageAction action", () => {
    const action = {
      type: accommodationSlice.actions.setImageAction.type,
      payload: { id: "1", src: "https://picsum.photos/500/500?random=1" },
    };
    const state = accommodationSlice.reducer(initialState, action);
    expect(Object.values(state.images).length).greaterThan(0);
  });

  it("should handle setAccommodationType action", () => {
    const action = {
      type: accommodationSlice.actions.setAccommodationType.type,
      payload: { type: "villa" },
    };
    const state = accommodationSlice.reducer(initialState, action);
    expect(state.type).toBe("villa");
  });

  it("should handle checkImage action", () => {
    const action = {
      type: accommodationSlice.actions.checkImage.type,
      payload: { src: "https://picsum.photos/500/500?random=1" },
    };
    const state = accommodationSlice.reducer(initialState, action);
    expect(state.loadingFile).toBe(true);
  });

  it("should handle deleteImage action", () => {
    const setImageAction = {
      type: accommodationSlice.actions.setImageAction.type,
      payload: { id: "1", src: "https://picsum.photos/500/500?random=1" },
    };
    const stateWithImage = accommodationSlice.reducer(
      initialState,
      setImageAction,
    );
    expect(Object.values(stateWithImage.images).length).greaterThan(0);

    const action = {
      type: accommodationSlice.actions.deleteImage.type,
      payload: { id: "1" },
    };
    const state = accommodationSlice.reducer(stateWithImage, action);
    expect(Object.values(state.images).length).toBe(0);
  });
});
