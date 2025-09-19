import { useSelector } from "react-redux";
import { getOwnerData, isNextAvailable } from "../redux/selectors.ts";

export const useGetOwnerData = () => {
  const data = useSelector(getOwnerData);
  const isAvailable = useSelector(isNextAvailable);

  return {
    data,
    isAvailable,
  };
};
