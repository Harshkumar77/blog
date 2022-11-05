import type { ComponentMeta, ComponentStory } from '@storybook/react'

import MainRouteLayout from './MainRoutesLayout'

export const generated: ComponentStory<typeof MainRouteLayout> = (args) => {
  return <MainRouteLayout {...args} />
}

export default {
  title: 'Layouts/MainRouteLayout',
  component: MainRouteLayout,
} as ComponentMeta<typeof MainRouteLayout>
