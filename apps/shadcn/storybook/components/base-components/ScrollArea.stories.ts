import type { Meta, StoryObj } from '@storybook/vue3'

import { type ScrollAreaProps } from '@/06-shared'

import { as } from '../../utils/as'
import { asChild } from '../../utils/asChild'
import ScrollArea from './ScrollArea.vue'

const meta = {
  title: 'Base Components/ScrollArea',
  component: ScrollArea,
  tags: ['autodocs'],
  argTypes: {
    asChild,
    as,
    type: {
      type: 'string',
      control: 'inline-radio',
      description:
        `Describes the nature of scrollbar visibility, similar to how the scrollbar preferences in MacOS control visibility of native scrollbars.<br>` +
        `\`auto\` - means that scrollbars are visible when content is overflowing on the corresponding orientation.<br>` +
        `\`always\` - means that scrollbars are always visible regardless of whether the content is overflowing.<br>` +
        `\`scroll\` - means that scrollbars are visible when the user is scrolling along its corresponding orientation.<br>` +
        `\`hover\` - when the user is scrolling along its corresponding orientation and when the user is hovering over the scroll area.`,
      options: ['auto', 'always', 'scroll', 'hover'] as Array<ScrollAreaProps['type']>
    },
    dir: {
      type: 'string',
      control: 'inline-radio',
      description: `The reading direction of the combobox when applicable. <br> If omitted, inherits globally from \`ConfigProvider\` or assumes LTR (left-to-right) reading mode.`,
      options: ['ltr', 'rtl'] as Array<ScrollAreaProps['dir']>
    },
    scrollHideDelay: {
      type: 'number',
      control: 'number',
      description: `If type is set to either \`scroll\` or \`hover\`, this prop determines the length of time, in milliseconds, <br> before the scrollbars are hidden after the user stops interacting with scrollbars.`
    }
  },
  args: {
    asChild: undefined,
    as: undefined,
    type: undefined,
    dir: undefined,
    scrollHideDelay: undefined
  }
} satisfies Meta<typeof ScrollArea>

export default meta

type Story = StoryObj<typeof meta>

export const typeAuto: Story = {
  name: 'Type: auto',
  args: {}
}

export const typeAlways: Story = {
  name: 'Type: always',
  args: {
    type: 'always'
  }
}

export const typeScroll: Story = {
  name: 'Type: scroll',
  args: {
    type: 'scroll'
  }
}

export const typeHover: Story = {
  name: 'Type: hover',
  args: {
    type: 'hover'
  }
}
