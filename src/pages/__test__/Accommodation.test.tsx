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
import AccommodationPage from "../Accommodation.tsx";
import { useAccommodationActions } from "../../features/accommodation/hooks/actions.ts";
import { useGetAccommodationData } from "../../features/accommodation/hooks/data.ts";
import type { AccommodationState } from "../../features/accommodation/redux/types.ts";

export const mockData: AccommodationState = {
  name: {
    value: "",
    isValid: true,
    isRequired: true,
    regex: "^[^\\d]{4,128}$",
    errorLabel: "Length between 4 and 128 characters, numbers are not allowed.",
  },
  address: {
    value: "",
    isValid: true,
    isRequired: true,
    regex: "^.{4,128}$",
    errorLabel: "Length between 4 and 128 characters.",
  },
  description: {
    value: "",
    isValid: true,
    isRequired: false,
    regex: "^.{128,2048}$",
    errorLabel: "Length between 128 and 2048 characters.",
  },
  type: "",
  images: {},
  loadingFile: false,
};

vi.mock("../../features/accommodation/hooks/actions.ts", () => ({
  useAccommodationActions: vi.fn(),
}));

vi.mock("../../features/accommodation/hooks/data.ts", () => ({
  useGetAccommodationData: vi.fn(),
}));

describe("AccommodationPage", () => {
  beforeEach(() => {
    (useAccommodationActions as unknown as Mock).mockReturnValue({
      checkInputValue: () => {},
      resolveImage: () => {},
      selectAccommodationType: () => {},
      removeImage: () => {},
    });

    (useGetAccommodationData as unknown as Mock).mockReturnValue({
      data: mockData,
      isAvailable: false,
      images: [],
    });
  });

  afterEach(cleanup);

  it("should render", () => {
    render(<AccommodationPage onNext={() => {}} />);
  });

  it("should render name input", () => {
    render(<AccommodationPage onNext={() => {}} />);
    screen.getByText("Name");
  });

  it("should render address input", () => {
    render(<AccommodationPage onNext={() => {}} />);
    screen.getByText("Address");
  });

  it("should render description input", () => {
    render(<AccommodationPage onNext={() => {}} />);
    screen.getByText("Description");
  });

  it("should render type input", () => {
    render(<AccommodationPage onNext={() => {}} />);
    screen.getByText("Type");
  });

  it("should render add photos input", () => {
    render(<AccommodationPage onNext={() => {}} />);
    screen.getByText("Add photo");
  });

  it("should render an error at name input", () => {
    (useGetAccommodationData as unknown as Mock).mockReturnValue({
      data: {
        ...mockData,
        name: {
          ...mockData.name,
          value: "a",
          isValid: false,
        },
      },
      isAvailable: false,
      images: [],
    });

    render(<AccommodationPage onNext={() => {}} />);
    screen.getByText(mockData.name.errorLabel);
  });

  it("should render an error at address input", () => {
    (useGetAccommodationData as unknown as Mock).mockReturnValue({
      data: {
        ...mockData,
        address: {
          ...mockData.address,
          value: "a",
          isValid: false,
        },
      },
      isAvailable: false,
      images: [],
    });

    render(<AccommodationPage onNext={() => {}} />);
    screen.getByText(mockData.address.errorLabel);
  });

  it("should render an error at description input", () => {
    (useGetAccommodationData as unknown as Mock).mockReturnValue({
      data: {
        ...mockData,
        description: {
          ...mockData.description,
          value: "a",
          isValid: false,
        },
      },
      isAvailable: false,
      images: [],
    });

    render(<AccommodationPage onNext={() => {}} />);
    screen.getByText(mockData.description.errorLabel);
  });

  it("should render a type", () => {
    (useGetAccommodationData as unknown as Mock).mockReturnValue({
      data: {
        ...mockData,
        type: "villa",
      },
      isAvailable: false,
      images: [],
    });

    render(<AccommodationPage onNext={() => {}} />);
    const selectedOption = screen.getByRole("villa");

    expect(selectedOption).toBeInstanceOf(HTMLOptionElement);
    expect((selectedOption as HTMLOptionElement).selected).toBe(true);
  });

  it("should not render two photos", () => {
    (useGetAccommodationData as unknown as Mock).mockReturnValue({
      data: mockData,
      isAvailable: false,
      images: [
        { id: "0", src: "https://picsum.photos/500/500?random=1" },
        { id: "1", src: "https://picsum.photos/500/500?random=1" },
      ],
    });

    render(<AccommodationPage onNext={() => {}} />);
    const posts = screen.getAllByRole("image");
    expect(posts.length).toBe(2);
  });

  it("should not render add photo input", () => {
    (useGetAccommodationData as unknown as Mock).mockReturnValue({
      data: mockData,
      isAvailable: false,
      images: [
        { id: "0", src: "https://picsum.photos/500/500?random=1" },
        { id: "1", src: "https://picsum.photos/500/500?random=1" },
      ],
    });

    render(<AccommodationPage onNext={() => {}} />);
    expect(screen.queryByText("Add photo")).toBeNull();
  });

  it("should not render next button disabled", () => {
    (useGetAccommodationData as unknown as Mock).mockReturnValue({
      data: mockData,
      isAvailable: false,
      images: [],
    });

    render(<AccommodationPage onNext={() => {}} />);
    const button = screen.queryByText("Next step");
    expect(button).toBeInstanceOf(HTMLButtonElement);
    expect((button as HTMLButtonElement).disabled).toBe(true);
  });

  it("should not render next button enabled", () => {
    (useGetAccommodationData as unknown as Mock).mockReturnValue({
      data: mockData,
      isAvailable: true,
      images: [],
    });

    render(<AccommodationPage onNext={() => {}} />);
    const button = screen.queryByText("Next step");
    expect(button).toBeInstanceOf(HTMLButtonElement);
    expect((button as HTMLButtonElement).disabled).toBe(false);
  });
});
