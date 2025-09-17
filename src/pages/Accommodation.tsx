import { Input } from "../components/Input.tsx";
import { useSelector } from "react-redux";
import { getAccommodationData } from "../features/accommodation/redux/selectors.ts";
import { useAccommodationActions } from "../features/accommodation/hooks/actions.ts";

export default function AccommodationPage() {
  const { checkInputValue } = useAccommodationActions();
  const data = useSelector(getAccommodationData);

  return (
    <div className="flex flex-col gap-4">
      <h1>Accommodation</h1>
      <div className="flex flex-col gap-4">
        <Input
          label="Name"
          errors={data.name.errors}
          value={data.name.value}
          onChange={(value: string) => checkInputValue("name", value)}
          isRequired={data.name.isRequired}
        />
        <Input
          label="Address"
          errors={data.address.errors}
          value={data.address.value}
          onChange={(value: string) => checkInputValue("address", value)}
          isRequired={data.address.isRequired}
        />
        <Input
          label="Description"
          errors={data.description.errors}
          value={data.description.value}
          onChange={(value: string) => checkInputValue("description", value)}
          isRequired={data.description.isRequired}
        />
      </div>
    </div>
  );
}
