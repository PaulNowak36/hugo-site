import { h } from "https://esm.sh/preact";
import PMButton from "https://esm.sh/preact-material-components/Button";
import "https://esm.sh/preact-material-components/Button/style.css";
import "https://esm.sh/preact-material-components/Theme/style.css";

export const MaterialButton = ({ text, type = "button", primary = false, href }) =>
  h(
    PMButton,
    {
      type,
      href,
      ripple: true,
      raised: true,
      class: primary ? "mdc-theme--primary-bg" : ""
    },
    text
  );