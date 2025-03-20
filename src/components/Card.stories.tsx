import type { Meta, StoryObj } from '@storybook/react'
import Card from './Card'

const meta = {
  title: 'Component/Card',
  component: Card,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Card>

export default meta

type Story = StoryObj<typeof meta>

export const Default = {
  args: {
    Balance: 234,
    CardNumber: '1234 **** **** 3421',
    expiry: '23/34',
    name: 'lubaba',
    variant: 'white',
  },
} satisfies Story

export const Dark = {
  args: {
    Balance: 234,
    CardNumber: '1234 **** **** 3421',
    expiry: '23/34',
    name: 'lubaba',
    variant: 'dark',
  },
} satisfies Story
