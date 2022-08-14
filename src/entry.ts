import { App } from "vue";
import WButton from "./button";
import SFCButton from "./button/SFCButton.vue";
import JSXButton from "./button/JSXButton";
import SMButton from "./button/SMButton";

export { WButton, SFCButton, JSXButton, SMButton };

export default {
  install(app: App): void {
    app.component(WButton.name, WButton);
    app.component(SFCButton.name, SFCButton);
    app.component(JSXButton.name, JSXButton);
    app.component(SMButton.name, SMButton);
  },
};
