import MyButton from "./MyButton";

// ストーリーの基本情報
export default {
  title: "MyApp/MyButton",
  component: MyButton,
};

export const Index = {
  args: {
    primary: true,
    size: "medium",
    label: "ボタン",
    onClick: () => console.log("Hello"),
  },
};

export const White = {
  args: {
    size: "small",
    label: "ボタン",
    backgroundColor: "#fff",
  },
};

export const Yellow = {
  args: {
    ...White.args,
    backgroundColor: "lightyellow",
  },
};
