import type { Meta, StoryObj } from '@storybook/react'

import TransferList from './TransferList'

const meta = {
  title: 'features/TransferList',
  component: TransferList,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof TransferList>

export default meta
type Story = StoryObj<typeof TransferList>

export const Default = {
  args: {},
} satisfies Story
