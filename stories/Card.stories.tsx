import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/shadcn/ui/card";
import { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta = {
  title: "Card",
  component: Card,
  parameters: {
    layout: "center",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="flex items-center justify-center p-5">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    className: "w-2xs block",
    children: (
      <>
        <CardHeader>
          <CardTitle>Title</CardTitle>
        </CardHeader>
        <CardContent>Mid content</CardContent>
        <CardFooter>Footer</CardFooter>
      </>
    ),
  },
};
