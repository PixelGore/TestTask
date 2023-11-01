import { ActionTree } from "vuex";
import { State } from "./state";
export type Actions = object;

export const actions: ActionTree<State, State> & Actions = {};
