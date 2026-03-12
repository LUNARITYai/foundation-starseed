import type { Meta, StoryObj } from '@storybook/react-vite'
import { Stack } from './Stack'

const meta = {
  title: 'Layout/Stack',
  component: Stack,
  tags: ['autodocs'],
  argTypes: {
    direction: { control: 'select', options: ['row', 'column'] },
    gap: { control: 'select', options: [0, 1, 2, 3, 4, 6, 8] },
    align: { control: 'select', options: ['start', 'center', 'end', 'stretch'] },
    justify: { control: 'select', options: ['start', 'center', 'end', 'between'] },
  },
} satisfies Meta<typeof Stack>

export default meta
type Story = StoryObj<typeof meta>

const Box = ({ children }: { children: string }) => (
  <div className="rounded-md bg-brand-primary/20 px-4 py-2 text-sm">
    {children}
  </div>
)

export const Vertical: Story = {
  render: () => (
    <Stack gap={4}>
      <Box>Item 1</Box>
      <Box>Item 2</Box>
      <Box>Item 3</Box>
    </Stack>
  ),
}

export const Horizontal: Story = {
  render: () => (
    <Stack direction="row" gap={4}>
      <Box>Item 1</Box>
      <Box>Item 2</Box>
      <Box>Item 3</Box>
    </Stack>
  ),
}
