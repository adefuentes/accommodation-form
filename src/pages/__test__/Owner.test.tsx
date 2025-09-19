import {
  describe,
  it,
  vi,
  type Mock,
  beforeEach,
  afterEach,
  expect,
} from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import OwnerPage from "../Owner.tsx";
import { useOwnerActions } from "../../features/owner/hooks/actions.ts";
import { useGetOwnerData } from "../../features/owner/hooks/data.ts";
import type { OwnerState } from "../../features/owner/redux/types.ts";

export const mockData: OwnerState = {
  name: {
    value: "",
    isValid: true,
    isRequired: true,
    regex: "^[^\\d]{4,64}$",
    errorLabel: "Minimum 4 characters and maximum 64, not numbers allowed.",
  },
  email: {
    value: "",
    isValid: true,
    isRequired: true,
    regex: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}",
    errorLabel: 'Must be an email containing "@" and a domain after the "@"',
  },
  phone: {
    value: "",
    isValid: true,
    isRequired: false,
    regex: "^\\d{9}$",
    errorLabel: "Numbers only, up to 9 digits",
  },
};

vi.mock("../../features/owner/hooks/actions.ts", () => ({
  useOwnerActions: vi.fn(),
}));

vi.mock("../../features/owner/hooks/data.ts", () => ({
  useGetOwnerData: vi.fn(),
}));

describe("OwnerPage", () => {
  beforeEach(() => {
    (useOwnerActions as unknown as Mock).mockReturnValue({
      checkInputValue: () => {},
      resolveImage: () => {},
      selectAccommodationType: () => {},
      removeImage: () => {},
    });

    (useGetOwnerData as unknown as Mock).mockReturnValue({
      data: mockData,
      isAvailable: false,
    });
  });

  afterEach(cleanup);

  it("should render", () => {
    render(<OwnerPage onNext={() => {}} />);
  });

  it("should render name input", () => {
    render(<OwnerPage onNext={() => {}} />);
    screen.getByText("Name");
  });

  it("should render email input", () => {
    render(<OwnerPage onNext={() => {}} />);
    screen.getByText("Email");
  });

  it("should render phone input", () => {
    render(<OwnerPage onNext={() => {}} />);
    screen.getByText("Phone");
  });

  it("should render an error at name input", () => {
    (useGetOwnerData as unknown as Mock).mockReturnValue({
      data: {
        ...mockData,
        name: {
          ...mockData.name,
          value: "a",
          isValid: false,
        },
      },
      isAvailable: false,
    });

    render(<OwnerPage onNext={() => {}} />);
    screen.getByText(mockData.name.errorLabel);
  });

  it("should render an error at email input", () => {
    (useGetOwnerData as unknown as Mock).mockReturnValue({
      data: {
        ...mockData,
        email: {
          ...mockData.email,
          value: "a",
          isValid: false,
        },
      },
      isAvailable: false,
      images: [],
    });

    render(<OwnerPage onNext={() => {}} />);
    screen.getByText(mockData.email.errorLabel);
  });

  it("should render an error at description input", () => {
    (useGetOwnerData as unknown as Mock).mockReturnValue({
      data: {
        ...mockData,
        phone: {
          ...mockData.phone,
          value: "a",
          isValid: false,
        },
      },
      isAvailable: false,
      images: [],
    });

    render(<OwnerPage onNext={() => {}} />);
    screen.getByText(mockData.phone.errorLabel);
  });

  it("should not render next button disabled", () => {
    (useGetOwnerData as unknown as Mock).mockReturnValue({
      data: mockData,
      isAvailable: false,
      images: [],
    });

    render(<OwnerPage onNext={() => {}} />);
    const button = screen.queryByText("Next step");
    expect(button).toBeInstanceOf(HTMLButtonElement);
    expect((button as HTMLButtonElement).disabled).toBe(true);
  });

  it("should not render next button enabled", () => {
    (useGetOwnerData as unknown as Mock).mockReturnValue({
      data: mockData,
      isAvailable: true,
      images: [],
    });

    render(<OwnerPage onNext={() => {}} />);
    const button = screen.queryByText("Next step");
    expect(button).toBeInstanceOf(HTMLButtonElement);
    expect((button as HTMLButtonElement).disabled).toBe(false);
  });
});
