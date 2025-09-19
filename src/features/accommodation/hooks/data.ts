import { useSelector } from "react-redux";
import { getAccommodationData, isNextAvailable } from "../redux/selectors.ts";
import { useMemo } from "react";
import { unNormalizeState } from "../../../utils.ts";

export const useGetAccommodationData = () => {
  const data = useSelector(getAccommodationData);
  const isAvailable = useSelector(isNextAvailable);
  const images = useMemo(() => unNormalizeState(data.images), [data.images]);

  return {
    data,
    isAvailable,
    images,
  };
};
