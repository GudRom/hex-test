import { create } from "zustand";
import { persist } from "zustand/middleware";

type LinkStoreState = {
  currentPage: number;
  short: "asc_short" | "desc_short" | "";
  target: "asc_target" | "desc_target" | "";
  counter: "asc_counter" | "desc_counter" | "";
  increasePage: () => void;
  decreasePage: () => void;
  toggleShort: () => void;
  toggleTarget: () => void;
  toggleCounter: () => void;
};

export const useLinkStore = create<LinkStoreState>()(
  persist(
    (set) => ({
      short: "",
      target: "",
      counter: "",
      currentPage: 0,
      increasePage: () =>
        set((state) => ({ currentPage: state.currentPage + 1 })),
      decreasePage: () =>
        set((state) => ({ currentPage: state.currentPage - 1 })),
      toggleShort: () =>
        set((state) => ({
          short:
            state.short.length === 0
              ? "asc_short"
              : state.short === "asc_short"
              ? "desc_short"
              : "",
        })),
      toggleTarget: () =>
        set((state) => ({
          target:
            state.target.length === 0
              ? "asc_target"
              : state.target === "asc_target"
              ? "desc_target"
              : "",
        })),
      toggleCounter: () =>
        set((state) => ({
          counter:
            state.counter.length === 0
              ? "asc_counter"
              : state.counter === "asc_counter"
              ? "desc_counter"
              : "",
        })),
    }),
    {
      name: "linkStore",
    }
  )
);
