import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, userEvent } from "storybook/test";

import { homePageContent } from "@/data/home";

import { Faq } from "./faq";

const firstItemId = homePageContent.faqs.items[0]?.id;

const meta = {
  title: "Sections/FAQ",
  component: Faq,
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
    content: homePageContent.faqs,
  },
  render: (args) => (
    <Faq key={args.initialOpenId ?? "closed"} {...args} />
  ),
  argTypes: {
    initialOpenId: {
      control: "select",
      options: [null, ...homePageContent.faqs.items.map((item) => item.id)],
      description: "FAQ item expanded when the component first mounts.",
    },
  },
} satisfies Meta<typeof Faq>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllClosed: Story = {
  args: {
    initialOpenId: null,
  },
  play: async ({ canvas }) => {
    const triggers = canvas.getAllByRole("button");

    for (const trigger of triggers) {
      await expect(trigger).toHaveAttribute("aria-expanded", "false");
    }

    await userEvent.click(triggers[0]);
    await expect(triggers[0]).toHaveAttribute("aria-expanded", "true");
    await expect(
      canvas.getByRole("region", { name: homePageContent.faqs.items[0].question }),
    ).toHaveAttribute("aria-hidden", "false");

    await userEvent.click(triggers[1]);
    await expect(triggers[0]).toHaveAttribute("aria-expanded", "false");
    await expect(triggers[1]).toHaveAttribute("aria-expanded", "true");

    await userEvent.click(triggers[1]);
    for (const trigger of triggers) {
      await expect(trigger).toHaveAttribute("aria-expanded", "false");
    }
  },
};

export const ItemOpen: Story = {
  args: {
    initialOpenId: firstItemId,
  },
  play: async ({ canvas }) => {
    const firstTrigger = canvas.getAllByRole("button")[0];
    await expect(firstTrigger).toHaveAttribute("aria-expanded", "true");

    const firstPanel = canvas.getByRole("region", {
      name: homePageContent.faqs.items[0].question,
    });
    await expect(firstPanel).toHaveAttribute("aria-hidden", "false");

    await userEvent.click(firstTrigger);
    await expect(firstTrigger).toHaveAttribute("aria-expanded", "false");
    await expect(firstPanel).toHaveAttribute("aria-hidden", "true");

    await userEvent.click(firstTrigger);
    await expect(firstTrigger).toHaveAttribute("aria-expanded", "true");
    await expect(firstPanel).toHaveAttribute("aria-hidden", "false");
  },
};
