import {useDispatch} from "react-redux";
import {checkInputValueAction} from "../redux/slices.ts";

export const useAccommodationActions = () => {
  const dispatch = useDispatch()
  const checkInputValue = (field: 'name' | 'address' | 'description', value: string) => {
    dispatch(checkInputValueAction({field, value}))
  }

  return {checkInputValue}
}
