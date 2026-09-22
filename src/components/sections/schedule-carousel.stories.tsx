import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, userEvent, waitFor } from "storybook/test";

import { homePageContent } from "@/data/home";

import { ScheduleCarousel } from "./schedule-carousel";

const meta = {
  title: "Sections/Schedule carousel",
  component: ScheduleCarousel,
  parameters: {
    layout: "fullscreen",
  },
  globals: {
    viewport: {
      value: "mobile375",
      isRotated: false,
    },
  },
  args: {
    content: homePageContent.schedule,
  },
  argTypes: {
    initialIndex: {
      control: {
        type: "range",
        min: 0,
        max: homePageContent.schedule.features.length - 1,
        step: 1,
      },
      description: "Slide shown when the carousel first mounts.",
    },
  },
} satisfies Meta<typeof ScheduleCarousel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FirstSlide: Story = {
  args: {
    initialIndex: 0,
  },
  play: async ({ canvas }) => {
    const previousButton = canvas.getByRole("button", {
      name: "Show previous features",
    });
    const nextButton = canvas.getByRole("button", {
      name: "Show next features",
    });

    await expect(canvas.getByText("Showing feature 1 of 4")).toBeInTheDocument();
    await expect(previousButton).toBeDisabled();
    await expect(nextButton).toBeEnabled();

    await userEvent.click(nextButton);
    await waitFor(() =>
      expect(canvas.getByText("Showing feature 2 of 4")).toBeInTheDocument(),
    );

    await userEvent.click(previousButton);
    await waitFor(() =>
      expect(canvas.getByText("Showing feature 1 of 4")).toBeInTheDocument(),
    );
  },
};

export const MiddleSlide: Story = {
  args: {
    initialIndex: 1,
  },
  play: async ({ canvas }) => {
    const carousel = canvas
      .getAllByRole("region", { name: homePageContent.schedule.title })
      .find(
        (region) => region.getAttribute("aria-roledescription") === "carousel",
      );

    await expect(carousel).toBeDefined();

    await waitFor(() =>
      expect(canvas.getByText("Showing feature 2 of 4")).toBeInTheDocument(),
    );
    carousel?.focus();
    await userEvent.keyboard("{ArrowRight}");
    await waitFor(() =>
      expect(canvas.getByText("Showing feature 3 of 4")).toBeInTheDocument(),
    );
    await userEvent.keyboard("{ArrowLeft}");
    await waitFor(() =>
      expect(canvas.getByText("Showing feature 2 of 4")).toBeInTheDocument(),
    );
  },
};

export const LastSlide: Story = {
  args: {
    initialIndex: homePageContent.schedule.features.length - 1,
  },
  play: async ({ canvas }) => {
    const previousButton = canvas.getByRole("button", {
      name: "Show previous features",
    });
    const nextButton = canvas.getByRole("button", {
      name: "Show next features",
    });

    await waitFor(() =>
      expect(canvas.getByText("Showing feature 4 of 4")).toBeInTheDocument(),
    );
    await expect(previousButton).toBeEnabled();
    await expect(nextButton).toBeDisabled();

    await userEvent.click(previousButton);
    await waitFor(() =>
      expect(canvas.getByText("Showing feature 3 of 4")).toBeInTheDocument(),
    );

    await userEvent.click(nextButton);
    await waitFor(() =>
      expect(canvas.getByText("Showing feature 4 of 4")).toBeInTheDocument(),
    );
  },
};
