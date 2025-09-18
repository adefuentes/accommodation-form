import { Input } from "../components/Input.tsx";
import { useSelector } from "react-redux";
import {
  getOwnerData,
  isNextAvailable,
} from "../features/owner/redux/selectors.ts";
import { Button } from "../components/Button.tsx";
import { useOwnerActions } from "../features/owner/hooks/actions.ts";

export default function OwnerPage({
  onNext,
}: {
  onNext: (step: number) => void;
}) {
  const data = useSelector(getOwnerData);
  const isAvailable = useSelector(isNextAvailable);
  const { checkInputValue } = useOwnerActions();

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
        label="Email"
        isValid={data.email.isValid}
        errorLabel={data.email.errorLabel}
        value={data.email.value}
        onChange={(value: string) => checkInputValue("email", value)}
        isRequired={data.email.isRequired}
      />
      <Input
        label="Phone"
        isValid={data.phone.isValid}
        errorLabel={data.phone.errorLabel}
        value={data.phone.value}
        onChange={(value: string) => checkInputValue("phone", value)}
        isRequired={data.phone.isRequired}
      />
      <div className="flex items-center gap-2">
        <Button variant="secondary" onClick={() => onNext(0)}>
          Prev step
        </Button>
        <Button isDisabled={!isAvailable} onClick={() => onNext(2)}>
          Next step
        </Button>
      </div>
    </div>
  );
}
