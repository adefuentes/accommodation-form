import { Input } from "../components/Input.tsx";
import { useAccommodationActions } from "../features/accommodation/hooks/actions.ts";
import { Button } from "../components/Button.tsx";
import { Selector } from "../components/Selector.tsx";
import type { AccommodationTypes } from "../features/accommodation/redux/types.ts";
import { InputImage } from "../components/InputImage.tsx";
import { Image } from "../components/Image.tsx";
import { useGetAccommodationData } from "../features/accommodation/hooks/data.ts";

const ACC_TYPE_OPTIONS = [
  { label: "Select one type", value: "" },
  { label: "House", value: "house" },
  { label: "Apartment", value: "apartment" },
  { label: "Villa", value: "villa" },
] as { label: string; value: AccommodationTypes }[];

export default function AccommodationPage({
  onNext,
}: {
  onNext: (step: number) => void;
}) {
  const {
    checkInputValue,
    resolveImage,
    selectAccommodationType,
    removeImage,
  } = useAccommodationActions();
  const { data, images, isAvailable } = useGetAccommodationData();
  return (
    <div className="flex flex-col gap-4">
      <Input
        label="Name"
        isValid={data.name.isValid}
        errorLabel={data.name.errorLabel}
        value={data.name.value}
        onChange={(value: string) => checkInputValue("name", value)}
        isRequired={data.name.isRequired}
      />
      <Input
        label="Address"
        isValid={data.address.isValid}
        errorLabel={data.address.errorLabel}
        value={data.address.value}
        onChange={(value: string) => checkInputValue("address", value)}
        isRequired={data.address.isRequired}
      />
      <Input
        multiline
        label="Description"
        isValid={data.description.isValid}
        errorLabel={data.description.errorLabel}
        value={data.description.value}
        onChange={(value: string) => checkInputValue("description", value)}
        isRequired={data.description.isRequired}
      />
      <Selector<AccommodationTypes>
        value={data.type}
        options={ACC_TYPE_OPTIONS}
        label="Type"
        isRequired={true}
        onChange={(type) => selectAccommodationType(type)}
      />
      <div className="flex flex-col gap-2">
        <p className="text-sm font-medium">Photos</p>
        <div className="flex items-center gap-4">
          {images.map((image) => (
            <Image
              onDelete={() => removeImage(image.id)}
              key={image.id}
              image={image}
            />
          ))}
          {images.length < 2 && (
            <InputImage onChange={(src) => resolveImage(src)} id="file" />
          )}
        </div>
        <p className="text-xs text-neutral-500">** Image dimension 500x500px</p>
      </div>
      <div>
        <Button onClick={() => onNext(1)} isDisabled={!isAvailable}>
          Next step
        </Button>
      </div>
    </div>
  );
}
