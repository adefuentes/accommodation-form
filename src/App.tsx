import {Provider} from "react-redux";
import store from "./redux/store";
import Accommodation from "./pages/Accomodation.tsx";

export default function App() {
  return (
    <div className="flex flex-col h-screen max-w-full p-4 w-2xl mx-auto bg-red-500">
      <Provider store={store}>
        <Accommodation />
      </Provider>
    </div>
  )
}
