import { type InputType } from '@storybook/csf'

export const asChild: InputType = {
  type: 'boolean',
  control: 'boolean',
  description: 'Change the default rendered element for the one passed as a child, merging their props and behavior.'
}
