import {Provider} from "react-redux";
import store from "./redux/store";
import AccommodationPage from "./pages/Accommodation.tsx";
import OwnerPage from "./pages/Owner.tsx";
import ResumePage from "./pages/Resume.tsx";


export default function App() {
  return (
    <div className="flex flex-col h-screen max-w-full p-4 w-2xl mx-auto">
      <Provider store={store}>
        <div>
          <AccommodationPage />
          <OwnerPage />
          <ResumePage />
        </div>
      </Provider>
    </div>
  )
}
