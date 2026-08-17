import MyButton from "./MyButton";
import { action } from "storybook/actions";

// ストーリーの基本情報
export default {
  title: "MyApp/MyButton",
  component: MyButton,
  args: {
    onClick: action("CLICK"),
  },
  argTypes: {
    primary: {
      type: "boolean",
      description: "Primaryカラーを有効にするか",
    },
    backgroundColor: {
      type: "string",
    },
    size: {
      type: "enum",
      options: ["small", "medium", "large"],
    },
    label: {
      type: "string",
    },
    onClick: {
      type: "function",
      description: "clickハンドラー",
    },
  },
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
