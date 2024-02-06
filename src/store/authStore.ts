import { create } from "zustand";
import { persist } from "zustand/middleware";

type AuthState = {
  isAuth: boolean;
  updateAuth: (isAuth: AuthState["isAuth"]) => void;
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isAuth: false,
      updateAuth: (isAuth) => set(() => ({ isAuth: isAuth })),
    }),
    { name: "authStore" }
  )
);
