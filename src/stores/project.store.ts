import { defineStore } from "pinia";

export interface IProjectStore {
  projects: IProject[];
  grave: IProject[];
}

export interface IProject {
  id: number;
  name: string;
  image: string;
  description: string;
  tech: string[];
  link: string;
  featured?: boolean;
}

export const useProjectStore = defineStore({
  id: "projectStore",
  state: () =>
    ({
      projects: [],
      grave: [],
    } as IProjectStore),
  getters: {
    getAllProjects: (state) => state.projects,
    getFeaturedProjects: (state): IProject[] =>
      state.projects.filter((project) => project.featured),
    getGraveProjects: (state) => state.grave,
  },
});
