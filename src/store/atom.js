import { atomWithReset, atomWithStorage } from "jotai/utils";
import { atom } from "jotai";

export const counterAtom = atomWithReset(0);

export const todosAtom = atomWithStorage("todos", [
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

// ゲッター（派生Atom）
export const todoLastIdAtom = atom((get) => {
  const todos = get(todosAtom);
  return todos.at(-1)?.id ?? 0;
});

// セッター（派生Atom）
export const todoAddAtom = atom(null, (get, set, title) => {
  set(todosAtom, [
    ...get(todosAtom),
    {
      id: get(todoLastIdAtom) + 1,
      title,
      isDone: false,
    },
  ]);
});

export const todoDoneAtom = atom(null, (get, set, id) => {
  set(
    todosAtom,
    get(todosAtom).map((item) => {
      if (item.id === Number(id)) {
        return {
          ...item,
          isDone: true,
        };
      } else {
        return item;
      }
    }),
  );
});

export const todoRemoveAtom = atom(null, (get, set, id) => {
  set(
    todosAtom,
    get(todosAtom).filter((item) => item.id !== Number(id)),
  );
});
