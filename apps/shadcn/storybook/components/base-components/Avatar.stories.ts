import type { Meta, StoryObj } from '@storybook/vue3'

import { Avatar, type AvatarProps } from '@/06-shared'

import { as } from '../../utils/as'
import { asChild } from '../../utils/asChild'

const imageUrl =
  'https://64.media.tumblr.com/6068e3ac00a1612002bbf6e65240dbee/c1283651b52e4b22-8a/s250x400/aad14a3a3a7270876ddf3445d10d7204b20a1c5d.png'

const meta = {
  title: 'Base Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    asChild,
    as,
    size: {
      type: 'string',
      control: 'inline-radio',
      options: ['sm', 'default', 'lg'] as Array<AvatarProps['size']>
    },
    shape: {
      type: 'string',
      control: 'inline-radio',
      options: ['circle', 'square'] as Array<AvatarProps['shape']>
    },
    fallback: { type: 'string', control: 'text' },
    src: { type: 'string', control: 'text' }
  },
  args: {
    asChild: undefined,
    as: undefined,
    size: undefined,
    shape: undefined,
    fallback: undefined,
    src: imageUrl
  }
} satisfies Meta<typeof Avatar>

export default meta

type Story = StoryObj<typeof meta>

export const sizeDefault: Story = {
  name: 'Size: default',
  args: {}
}

export const sizeSm: Story = {
  name: 'Size: sm',
  args: {
    size: 'sm'
  }
}

export const sizeLg: Story = {
  name: 'Size: lg',
  args: {
    size: 'lg'
  }
}

export const shapeCircle: Story = {
  name: 'Shape: circle',
  args: {}
}

export const shapeSquare: Story = {
  name: 'Shape: square',
  args: {
    shape: 'square'
  }
}

export const fallback: Story = {
  name: 'Fallback',
  args: {
    fallback: 'AB',
    src: undefined
  }
}
