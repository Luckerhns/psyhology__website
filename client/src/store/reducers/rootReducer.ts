import { combineReducers } from "redux";
import { modalReducer } from "../action-creators/modal";
import { authReducer } from "../action-creators/auth";
import { themeReducer } from "../action-creators/theme";

export const rootReducer = combineReducers({
  auth: authReducer,
  modal: modalReducer,
  theme: themeReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
