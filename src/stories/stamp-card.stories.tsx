import type { Meta, StoryObj } from '@storybook/react';
import { PromptCard } from '../components/molecules/prompt-card';

const meta = {
  title: 'Example/StampCard',
  component: PromptCard,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof PromptCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Stamp Card',
    description: 'This is a stamp card',
    image: 'https://placehold.co/600x400'
  }
};
