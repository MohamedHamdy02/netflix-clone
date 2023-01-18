import { DocumentData } from "firebase/firestore";
import { atom } from "recoil";
import { Data } from "../typings";

export const modalState = atom({
  key: "modalState",
  default: false,
});

export const movieState = atom<Data | DocumentData | null>({
  key: "movieState",
  default: null,
});
