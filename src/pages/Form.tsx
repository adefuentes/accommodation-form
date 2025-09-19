import AccommodationPage from "./Accommodation.tsx";
import OwnerPage from "./Owner.tsx";
import ResumePage from "./Resume.tsx";
import { Step } from "../components/Step.tsx";
import { useFormActions } from "../features/form/hooks/actions.ts";
import { useSelector } from "react-redux";
import {
  getCurrentStep,
  getTotalSteps,
} from "../features/form/redux/selectors.ts";

export default function Form({
  onSubmit,
}: {
  onSubmit: (data: unknown) => void;
}) {
  const { nextStep } = useFormActions();
  const current = useSelector(getCurrentStep);
  const total = useSelector(getTotalSteps);

  return (
    <div className="flex flex-col mix-h-screen pb-8">
      <h1 className="text-4xl font-bold pb-4">Accommodation form</h1>
      <Step
        number={1}
        title="Accommodation"
        passed={current > 0}
        total={total}
        selected={current === 0}
      >
        <AccommodationPage onNext={nextStep} />
      </Step>
      <Step
        number={2}
        title="Owner"
        passed={current > 1}
        total={total}
        selected={current === 1}
      >
        <OwnerPage onNext={nextStep} />
      </Step>
      <Step
        number={3}
        title="Summary"
        total={total}
        passed={current > 2}
        selected={current === 2}
        last={true}
      >
        <ResumePage onSubmit={onSubmit} onNext={nextStep} />
      </Step>
    </div>
  );
}
