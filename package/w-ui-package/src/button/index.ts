import WButton from "./Button";
import { App } from "vue";

export { WButton };

export default {
  install(app: App) {
    app.component(WButton.name, WButton);
  },
};
