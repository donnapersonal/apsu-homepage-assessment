import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, userEvent, waitFor } from "storybook/test";

import { homePageContent } from "@/data/home";

import { Header } from "./header";

const meta = {
  title: "Layout/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
  globals: {
    viewport: {
      value: "desktop1440",
      isRotated: false,
    },
  },
  args: {
    nav: homePageContent.nav,
    primaryAction: homePageContent.header.primaryAction,
    secondaryAction: homePageContent.header.secondaryAction,
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Desktop: Story = {
  play: async ({ canvasElement }) => {
    const primaryNavigation = canvasElement.querySelector(
      'nav[aria-label="Primary navigation"]',
    );
    const links = Array.from(canvasElement.querySelectorAll("a"));
    const hasLink = (label: string, href: string) =>
      links.some(
        (link) =>
          link.textContent?.trim() === label && link.getAttribute("href") === href,
      );

    await expect(primaryNavigation).toBeInTheDocument();
    await expect(hasLink("Get started", "#weight-loss")).toBe(true);
    await expect(hasLink("Login", "#login")).toBe(true);
  },
};

export const MobileClosed: Story = {
  globals: {
    viewport: {
      value: "mobile375",
      isRotated: false,
    },
  },
  play: async ({ canvas }) => {
    const menuButton = canvas.getByRole("button", {
      name: "Open navigation menu",
    });

    await expect(menuButton).toHaveAttribute("aria-expanded", "false");
    await expect(canvas.queryByRole("dialog")).not.toBeInTheDocument();
  },
};

export const MobileOpen: Story = {
  globals: {
    viewport: {
      value: "mobile375",
      isRotated: false,
    },
  },
  play: async ({ canvas }) => {
    const menuButton = canvas.getByRole("button", {
      name: "Open navigation menu",
    });

    await userEvent.click(menuButton);

    const dialog = canvas.getByRole("dialog");
    await expect(menuButton).toHaveAttribute("aria-expanded", "true");
    await expect(dialog).toBeVisible();
    await expect(
      canvas.getByRole("navigation", { name: "Mobile navigation" }),
    ).toBeVisible();

    await userEvent.click(
      canvas.getByRole("button", { name: "Close navigation menu" }),
    );
    await waitFor(() => expect(menuButton).toHaveAttribute("aria-expanded", "false"));

    // Reopen so the story still represents the documented open state.
    await userEvent.click(menuButton);
    await expect(canvas.getByRole("dialog")).toBeVisible();
  },
};
