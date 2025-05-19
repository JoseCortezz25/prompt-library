import type { Meta, StoryObj } from '@storybook/react';
import { StampCard } from '../components/molecules/prompt-card';

const meta = {
  title: 'Example/StampCard',
  component: StampCard,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof StampCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Stamp Card',
    description: 'This is a stamp card',
    image: 'https://placehold.co/600x400'
  }
};
