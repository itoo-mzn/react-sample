import { atomWithReset } from "jotai/utils";
import { atom } from "jotai";

export const counterAtom = atomWithReset(0);

export const todosAtom = atom([
  {
    id: 1,
    title: "資料作成",
    isDone: false,
  },
  {
    id: 2,
    title: "レビュー",
    isDone: false,
  },
]);

export const todoLastIdAtom = atom((get) => {
  const todos = get(todosAtom);
  return todos.at(-1)?.id ?? 0;
});
