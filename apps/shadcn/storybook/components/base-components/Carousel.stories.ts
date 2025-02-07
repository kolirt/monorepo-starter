import type { Meta, StoryObj } from '@storybook/vue3'

import { CarouselItem, type CarouselProps } from '@/06-shared'

import Carousel from './Carousel.vue'

const meta = {
  title: 'Base Components/Carousel',
  component: Carousel,
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      type: 'string',
      control: 'inline-radio',
      description: 'The orientation of the carousel.',
      options: ['horizontal', 'vertical'] as Array<CarouselProps['orientation']>
    },
    arrows: {
      type: 'boolean',
      control: 'boolean',
      description: 'If true, the carousel will have arrows.'
    },
    onlyActiveArrows: {
      type: 'boolean',
      control: 'boolean',
      description: 'If true, the carousel will only show arrows when hovered.'
    }
  },
  args: {
    orientation: undefined,
    arrows: undefined,
    onlyActiveArrows: undefined
  },
  parameters: {
    layout: 'centered',
    slots: {
      default: {
        description: 'Default slot',
        components: {
          CarouselItem
        },
        template: `
          <CarouselItem>
            <div class="flex aspect-square items-center justify-center p-6 border rounded">
              <span class="text-4xl font-semibold">1</span>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div class="flex aspect-square items-center justify-center p-6 border rounded">
              <span class="text-4xl font-semibold">2</span>
            </div>
          </CarouselItem>
        `
      }
    }
  }
} satisfies Meta<typeof Carousel>

export default meta

type Story = StoryObj<typeof meta>

export const Example: Story = {
  name: 'Example',
  args: {}
}

export const withArrows: Story = {
  name: 'With arrows',
  args: {
    arrows: true
  }
}

export const withOnlyActiveArrows: Story = {
  name: 'With only active arrows',
  args: {
    arrows: true,
    onlyActiveArrows: true
  }
}
