import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

// 어세스토큰 저장
export const userAccessTokenState = atom({
  key: "userAccessTokenState",
  default: "",
  effects: [persistAtom],
});

// 유저 정보 저장
export const userInfoState = atom({
  key: "userInfoState",
  default: {},
  effects: [persistAtom],
});

export const adminInfoState = atom({
  key: "adminInfoState",
  default: {
    accessToken: "",
    adminId: -1,
  },
  effects: [persistAtom],
});
