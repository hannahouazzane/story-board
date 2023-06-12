import Testing from "../components/Button";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: "This is a button1",
  component: Testing,
};

export const Default = () => {
  return <Testing name="hello there" />;
};
