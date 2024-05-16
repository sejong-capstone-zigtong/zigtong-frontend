import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const userAccessToken = atom({
  key: "userAccessToken",
  default: "",
  effects: [persistAtom],
});

export const userInfoState = atom({
  key: "userInfoState",
  default: {},
  effects: [persistAtom],
});
