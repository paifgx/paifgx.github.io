import { defineStore } from "pinia";

export interface IWorkStore {
  works: IWork[];
}

export interface IWork {
  id: number;
  name: string;
  position: string;
  from: string;
  to: string;
  link: string;
}

export const useWorkStore = defineStore({
  id: "workStore",
  state: () =>
    ({
      works: [],
    } as IWorkStore),
  getters: {
    getAllWorks: (state) => state.works,
  },
});
