import { useSelector } from "react-redux";
import { getAccommodationData } from "../features/accommodation/redux/selectors.ts";
import { getOwnerData } from "../features/owner/redux/selectors.ts";
import { useMemo } from "react";
import { unNormalizeState } from "../utils.ts";
import { Image } from "../components/Image.tsx";
import { Button } from "../components/Button.tsx";
import type { AccommodationTypes } from "../features/accommodation/redux/types.ts";

const ACCOMMODATION_TYPES_DICT = {
  house: "House",
  apartment: "Apartment",
  villa: "Villa",
} as Record<AccommodationTypes, string>;

export default function ResumePage({
  onNext,
}: {
  onNext: (step: number) => void;
}) {
  const accommodation = useSelector(getAccommodationData);
  const owner = useSelector(getOwnerData);

  const images = useMemo(
    () => unNormalizeState(accommodation.images),
    [accommodation.images],
  );

  return (
    <form action="" className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-semibold">Accommodation</h2>
        <ul className="flex flex-col gap-1">
          <li>
            <p>
              <span>Name: </span>
              {accommodation.name.value}
            </p>
          </li>
          <li>
            <p>
              <span>Address: </span>
              {accommodation.address.value}
            </p>
          </li>
          {accommodation.description.value && (
            <li>
              <p>
                <span>Description: </span>
                {accommodation.description.value}
              </p>
            </li>
          )}
          <li>
            <p>
              <span>Type: </span>
              {ACCOMMODATION_TYPES_DICT[accommodation.type]}
            </p>
          </li>
          {images.length > 0 && (
            <li>
              <p>Photos:</p>
              {images.map((image) => (
                <Image key={image.id} image={image} />
              ))}
            </li>
          )}
        </ul>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-semibold">Owner</h2>
        <ul className="flex flex-col gap-1">
          <li>
            <p>
              <span>Name: </span>
              {owner.name.value}
            </p>
          </li>
          <li>
            <p>
              <span>Email: </span>
              {owner.email.value}
            </p>
          </li>
          {owner.phone.value && (
            <li>
              <p>
                <span>Phone: </span>
                {owner.phone.value}
              </p>
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
