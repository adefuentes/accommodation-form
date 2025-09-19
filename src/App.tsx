import Form from "./pages/Form.tsx";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
import store from "./redux/store";

export default function App({
  onSubmit,
}: {
  onSubmit: (data: unknown) => void;
}) {
  return (
    <div className="flex flex-col h-screen max-w-full p-4 w-2xl mx-auto">
      <Provider store={store}>
        <Form onSubmit={onSubmit} />
        <Toaster position="top-right" />
      </Provider>
    </div>
  );
}
