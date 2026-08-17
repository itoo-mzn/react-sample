import MyButton from "./MyButton";
import { action } from "storybook/actions";
import { userEvent, within, expect, fn } from "storybook/test";

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
    // storybookが提供するスパイ関数。裏で、関数の呼び出し回数や引数などを追跡。こういうイディオムだと捉えてOK
    onClick: fn(),
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button");
    await userEvent.click(button);
    await userEvent.click(button);
    await expect(args.onClick).toHaveBeenCalledTimes(2);
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
