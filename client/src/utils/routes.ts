import AboutmePage from "../pages/ru/AboutmePage";
import MainPage from "../pages/ru/MainPage";
import RecordPage from "../pages/ru/RecordPage";
import TherapyPage from "../pages/ru/TherapyPage";
import { IRoute } from "../types/routes";
import { PrivateRoutesEnum, PublicRoutesEnum } from "./consts";

export const publicRoutes: IRoute[] = [
  { path: PublicRoutesEnum.MainPath, element: MainPage },
  { path: PublicRoutesEnum.TherapyPath, element: TherapyPage },
  { path: PublicRoutesEnum.AboutMePath, element: AboutmePage },
];

export const privateRoutes = [
  { path: PrivateRoutesEnum.RecordPath, element: RecordPage },
  { path: PublicRoutesEnum.MainPath, element: MainPage },
  { path: PublicRoutesEnum.TherapyPath, element: TherapyPage },
];
