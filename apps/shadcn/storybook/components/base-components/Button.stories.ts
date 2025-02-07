import type { Meta, StoryObj } from '@storybook/vue3'
import { CheckIcon, ChevronRightIcon } from 'lucide-vue-next'

import { Button, type ButtonProps } from '@/06-shared'

const meta = {
  title: 'Base Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    default: { control: 'text' },
    variant: {
      type: 'string',
      control: 'inline-radio',
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'] as Array<ButtonProps['variant']>
    },
    size: {
      type: 'string',
      control: 'inline-radio',
      options: ['xs', 's', 'default', 'l', 'xl', 'icon-xs', 'icon-s', 'icon-default', 'icon-l', 'icon-xl'] as Array<
        ButtonProps['size']
      >
    },
    to: { control: 'object' },
    href: {
      type: 'string',
      control: 'text'
    },
    target: {
      type: 'string',
      control: 'select',
      options: ['Undefined', '_blank'] as Array<ButtonProps['target']>,
      mapping: {
        Undefined: undefined,
        _blank: '_blank'
      }
    },
    icon: {
      control: 'select',
      description: `Icon component.`,
      options: ['Undefined', 'check', 'chevron-right'],
      mapping: {
        Undefined: undefined,
        check: CheckIcon,
        'chevron-right': ChevronRightIcon
      }
    },
    iconPosition: {
      type: 'string',
      control: 'select',
      options: ['left', 'right'] as Array<ButtonProps['iconPosition']>
    },
    disabled: {
      type: 'boolean',
      control: 'boolean',
      description: `If true, the button will be disabled.`
    },
    loading: {
      type: 'boolean',
      control: 'boolean',
      description: `If true, the button will be in a loading state.`
    }
  },
  args: {
    default: 'Button text',
    variant: undefined,
    size: undefined,
    to: undefined,
    href: undefined,
    target: undefined,
    icon: undefined,
    iconPosition: undefined,
    disabled: undefined,
    loading: undefined
  },
  parameters: {
    slots: {
      default: {
        description: 'Default slot'
      }
    }
  }
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const VariantDefault: Story = {
  name: 'Variant: default',
  args: {}
}

export const VariantDestructive: Story = {
  name: 'Variant: destructive',
  args: {
    variant: 'destructive'
  }
}

export const VariantOutline: Story = {
  name: 'Variant: outline',
  args: {
    variant: 'outline'
  }
}

export const VariantSecondary: Story = {
  name: 'Variant: secondary',
  args: {
    variant: 'secondary'
  }
}

export const VariantGhost: Story = {
  name: 'Variant: ghost',
  args: {
    variant: 'ghost'
  }
}

export const VariantLink: Story = {
  name: 'Variant: link',
  args: {
    variant: 'link'
  }
}

export const SizeXs: Story = {
  name: 'Size: xs',
  args: {
    size: 'xs'
  }
}

export const SizeS: Story = {
  name: 'Size: s',
  args: {
    size: 's'
  }
}

export const SizeDefault: Story = {
  name: 'Size: default',
  args: {
    size: 'default'
  }
}

export const SizeL: Story = {
  name: 'Size: l',
  args: {
    size: 'l'
  }
}

export const SizeXl: Story = {
  name: 'Size: xl',
  args: {
    size: 'xl'
  }
}

export const SizeIconXs: Story = {
  name: 'Size: icon-xs',
  args: {
    default: '',
    size: 'icon-xs',
    icon: CheckIcon
  }
}

export const SizeIconS: Story = {
  name: 'Size: icon-s',
  args: {
    default: '',
    size: 'icon-s',
    icon: CheckIcon
  }
}

export const SizeIconDefault: Story = {
  name: 'Size: icon-default',
  args: {
    default: '',
    size: 'icon-default',
    icon: CheckIcon
  }
}

export const SizeIconL: Story = {
  name: 'Size: icon-l',
  args: {
    default: '',
    size: 'icon-l',
    icon: CheckIcon
  }
}

export const SizeIconXl: Story = {
  name: 'Size: icon-xl',
  args: {
    default: '',
    size: 'icon-xl',
    icon: CheckIcon
  }
}

export const IconPositionLeft: Story = {
  name: 'Icon position: left',
  args: {
    icon: CheckIcon,
    iconPosition: 'left'
  }
}

export const IconPositionRight: Story = {
  name: 'Icon position: right',
  args: {
    icon: CheckIcon,
    iconPosition: 'right'
  }
}

export const Disabled: Story = {
  name: 'Disabled',
  args: {
    disabled: true
  }
}

export const Loading: Story = {
  name: 'Loading',
  args: {
    loading: true
  }
}

export const LoadingWithIcon: Story = {
  name: 'Loading with icon',
  args: {
    icon: CheckIcon,
    loading: true
  }
}

export const LoadingWithoutText: Story = {
  name: 'Loading without text',
  args: {
    default: '',
    size: 'icon-default',
    icon: CheckIcon,
    loading: true
  }
}
