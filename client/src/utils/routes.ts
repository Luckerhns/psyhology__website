import MainPage from "../pages/ru/MainPage";
import TherapyPage from "../pages/ru/TherapyPage";
import UserPage from "../pages/ru/UserPage";
import { IRoute } from "../types/routes";
import { PublicRoutesEnum } from "./consts";

export const publicRoutes: IRoute[] = [
  { path: PublicRoutesEnum.MainPath, element: MainPage },
  { path: PublicRoutesEnum.UserPath, element: UserPage },
  { path: PublicRoutesEnum.TherapyPath, element: TherapyPage },
];

export const privateRoutes = [
  { path: PublicRoutesEnum.UserPath, element: UserPage },
];
