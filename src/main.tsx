import ReactDOM from "react-dom/client";
import App from "./App";
import styles from "./index.css?inline";

class CustomReactForm extends HTMLElement {
  private root: ReactDOM.Root | null = null;
  private mountPoint;

  constructor() {
    super();
    this.mountPoint = this;
  }

  connectedCallback() {
    if (!this.root) {
      const style = document.createElement("style");
      style.textContent = styles;
      const container = document.createElement("div");
      this.mountPoint.appendChild(style);
      this.mountPoint.appendChild(container);
      this.root = ReactDOM.createRoot(container);
      this.root.render(
        <App
          onSubmit={(data) => {
            this.dispatchEvent(
              new CustomEvent("custom-react-submit", {
                detail: data,
              }),
            );
          }}
        />,
      );
    }
  }

  disconnectedCallback() {
    if (this.root) {
      this.root.unmount();
      this.root = null;
    }
  }
}

customElements.define("custom-react-form", CustomReactForm);
