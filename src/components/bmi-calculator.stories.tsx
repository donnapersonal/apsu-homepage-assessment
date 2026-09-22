import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, userEvent } from "storybook/test";

import { BmiCalculator } from "./bmi-calculator";

const meta = {
  title: "Components/BMI calculator",
  component: BmiCalculator,
  parameters: {
    layout: "fullscreen",
  },
  globals: {
    viewport: {
      value: "desktop1440",
      isRotated: false,
    },
  },
  render: (args) => (
    <BmiCalculator key={args.initialMode} {...args} />
  ),
  argTypes: {
    initialMode: {
      control: "inline-radio",
      options: ["empty", "result", "invalid"],
      description: "Initial form and result-panel state.",
    },
  },
} satisfies Meta<typeof BmiCalculator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {
  args: {
    initialMode: "empty",
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByLabelText("Height (feet)")).toHaveValue(null);
    await expect(canvas.getByLabelText("Height (inches)")).toHaveValue(null);
    await expect(canvas.getByLabelText("Weight (lb)")).toHaveValue(null);
    await expect(canvas.getByText("Your result will appear here.")).toBeVisible();
    await expect(
      canvas.getByText(/BMI is one screening measure/),
    ).toBeVisible();
  },
};

export const ValidResult: Story = {
  args: {
    initialMode: "result",
  },
  play: async ({ canvas }) => {
    await expect(canvas.getAllByText("25.1")[0]).toBeInTheDocument();

    const weightInput = canvas.getByLabelText("Weight (lb)");
    await userEvent.clear(weightInput);
    await userEvent.type(weightInput, "140");
    await userEvent.click(
      canvas.getByRole("button", { name: "Calculate BMI" }),
    );

    await expect(canvas.getAllByText("21.3")[0]).toBeInTheDocument();
    await expect(
      canvas.getByText("Healthy range", { selector: "strong" }),
    ).toBeInTheDocument();

    await userEvent.clear(weightInput);
    await userEvent.type(weightInput, "165");
    await userEvent.click(
      canvas.getByRole("button", { name: "Calculate BMI" }),
    );
    await expect(canvas.getAllByText("25.1")[0]).toBeInTheDocument();
  },
};

export const InvalidInput: Story = {
  args: {
    initialMode: "invalid",
  },
  play: async ({ canvas }) => {
    const weightInput = canvas.getByLabelText("Weight (lb)");

    await expect(canvas.getByText("Check your measurements.")).toBeInTheDocument();
    await expect(weightInput).toHaveAttribute("aria-invalid", "true");

    await userEvent.clear(weightInput);
    await userEvent.type(weightInput, "165");
    await userEvent.click(
      canvas.getByRole("button", { name: "Calculate BMI" }),
    );

    await expect(weightInput).toHaveAttribute("aria-invalid", "false");
    await expect(canvas.queryByText("Check your measurements.")).not.toBeInTheDocument();
    await expect(canvas.getAllByText("25.1")[0]).toBeInTheDocument();

    await userEvent.clear(weightInput);
    await userEvent.type(weightInput, "0");
    await userEvent.click(
      canvas.getByRole("button", { name: "Calculate BMI" }),
    );
    await expect(canvas.getByText("Check your measurements.")).toBeInTheDocument();
    await expect(weightInput).toHaveAttribute("aria-invalid", "true");
  },
};
