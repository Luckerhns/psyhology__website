import { ThemeCreators } from "./theme/theme-creator";
import { ModalCreators } from "./modal/modal-creator";
import { AuthActionCreators } from "./auth/auth-creator";
export default {
  ...ModalCreators,
  ...AuthActionCreators,
  ...ThemeCreators,
};
