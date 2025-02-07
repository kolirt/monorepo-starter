import type { Meta, StoryObj } from '@storybook/vue3'

import { Heading, type HeadingProps } from '@/06-shared'

const meta = {
  title: 'Typography/Heading',
  component: Heading,
  tags: ['autodocs'],
  argTypes: {
    size: {
      type: 'string',
      control: 'inline-radio',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as Array<HeadingProps['size']>
    }
  },
  args: {
    default: 'Heading text',
    size: undefined
  },
  parameters: {
    slots: {
      default: {
        description: 'Default slot'
      }
    }
  }
} satisfies Meta<typeof Heading>

export default meta

type Story = StoryObj<typeof meta>

export const sizeH1: Story = {
  name: 'Size: h1',
  args: {}
}

export const sizeH2: Story = {
  name: 'Size: h2',
  args: {
    size: 'h2'
  }
}

export const sizeH3: Story = {
  name: 'Size: h3',
  args: {
    size: 'h3'
  }
}

export const sizeH4: Story = {
  name: 'Size: h4',
  args: {
    size: 'h4'
  }
}

export const sizeH5: Story = {
  name: 'Size: h5',
  args: {
    size: 'h5'
  }
}

export const sizeH6: Story = {
  name: 'Size: h6',
  args: {
    size: 'h6'
  }
}
