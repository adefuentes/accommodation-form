import { type FormEvent } from "react";
import { Image } from "../components/Image.tsx";
import { Button } from "../components/Button.tsx";
import type { AccommodationTypes } from "../features/accommodation/redux/types.ts";
import toast from "react-hot-toast";
import { ResumeItem } from "../features/resume/components/ResumeItem.tsx";
import { useGetAccommodationData } from "../features/accommodation/hooks/data.ts";
import { useGetOwnerData } from "../features/owner/hooks/data.ts";

const ACCOMMODATION_TYPES_DICT = {
  house: "House",
  apartment: "Apartment",
  villa: "Villa",
} as Record<AccommodationTypes, string>;

export default function ResumePage({
  onNext,
  onSubmit,
}: {
  onNext: (step: number) => void;
  onSubmit: (data: unknown) => void;
}) {
  const { data: accommodation, images } = useGetAccommodationData();
  const { data: owner } = useGetOwnerData();

  const _onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const random = Math.floor(Math.random() * 100);
    const payload = {
      accommodation: {
        name: accommodation.name.value,
        address: accommodation.address.value,
        description: accommodation.description.value,
        type: accommodation.type,
        images: images.map((image) => image.src),
      },
      owner: {
        name: owner.name.value,
        email: owner.email.value,
        phone: owner.phone.value,
      },
    };
    onSubmit(payload);

    if (random < 50) {
      toast.success("Your application has been submitted successfully!");
    } else {
      toast.error("Your application has been rejected!");
    }
  };

  return (
    <form onSubmit={_onSubmit} className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-semibold">Accommodation</h2>
        <div className="flex flex-col gap-1">
          <ResumeItem label="Name" value={accommodation.name.value} />
          <ResumeItem label="Address" value={accommodation.address.value} />
          {accommodation.description.value && (
            <ResumeItem
              label="Description"
              value={accommodation.description.value}
            />
          )}
          <ResumeItem
            label="Type"
            value={ACCOMMODATION_TYPES_DICT[accommodation.type]}
          />
          {images.length > 0 && (
            <div className="flex flex-col gap-1">
              <p className="text-sm font-semibold">Photos:</p>
              <div className="flex items-center gap-2">
                {images.map((image) => (
                  <Image key={image.id} image={image} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="w-full h-0.25 bg-neutral-300" />
      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-semibold">Owner</h2>
        <ul className="flex flex-col gap-1">
          <li>
            <ResumeItem label="Name" value={owner.name.value} />
          </li>
          <li>
            <ResumeItem
              label="Email"
              link={`mailto:${owner.email.value}`}
              value={owner.email.value}
            />
          </li>
          {owner.phone.value && (
            <li>
              <ResumeItem
                label="Phone"
                link={`tel:${owner.phone.value}`}
                value={owner.phone.value}
              />
            </li>
          )}
        </ul>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="secondary" onClick={() => onNext(1)}>
          Prev step
        </Button>
        <Button type="submit">Sumbit</Button>
      </div>
    </form>
  );
}
