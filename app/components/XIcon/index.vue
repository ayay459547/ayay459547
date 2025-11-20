<script setup lang="ts">
import type { ComponentOptionsMixin, Component } from 'vue'
import { h } from 'vue'
import { Icon } from '@vicons/utils'

import fluent from './fluent'
import ionicons4 from './ionicons4'
import ionicons5 from './ionicons5'
import antd from './antd'
import fa from './fa'
import material from './material'
import tabler from './tabler'
import carbon from './carbon'

interface Props {
  type?: string
  name?: string
  size?: string | number
  color?: string
  tag?: string
}

const props = withDefaults(defineProps<Props>(), {
  type: 'fluent',
  name: 'Question16Filled',
  size: '1rem',
  color: 'inherit',
  tag: 'i'
})

const { isEmpty, hasOwnProperty } = useUtils()

const defaultIcon: ComponentOptionsMixin = fluent.Question16Filled

// 取得+渲染組件
const getComponent = (iconComponent: ComponentOptionsMixin): Component => {
  const { name, render } = iconComponent
  if (typeof name === 'string' && typeof render === 'function') {
    return h(iconComponent)
  }
  return h('svg', {}, '')
}

// 取得圖示
const getIcon = (): Component => {
  let renderIcon = defaultIcon
  if (isEmpty(props.name)) return getComponent(renderIcon)

  switch (props.type) {
    case 'fluent': {
      if (hasOwnProperty(fluent, props.name)) {
        renderIcon = fluent[`${props.name}`]
      }
      break
    }
    case 'ionicons4': {
      if (hasOwnProperty(ionicons4, props.name)) {
        renderIcon = ionicons4[props.name]
      }
      break
    }
    case 'ionicons5': {
      if (hasOwnProperty(ionicons5, props.name)) {
        renderIcon = ionicons5[props.name]
      }
      break
    }
    case 'antd': {
      if (hasOwnProperty(antd, props.name)) {
        renderIcon = antd[props.name]
      }
      break
    }
    case 'fa': {
      if (hasOwnProperty(fa, props.name)) {
        renderIcon = fa[props.name]
      }
      break
    }
    case 'material': {
      if (hasOwnProperty(material, props.name)) {
        renderIcon = material[props.name]
      }
      break
    }
    case 'tabler': {
      if (hasOwnProperty(tabler, props.name)) {
        renderIcon = tabler[props.name]
      }
      break
    }
    case 'carbon': {
      if (hasOwnProperty(carbon, props.name)) {
        renderIcon = carbon[props.name]
      }
      break
    }
  }
  return getComponent(renderIcon)
}
</script>

<template>
  <ClientOnly>
    <Icon :size="props.size" :color="props.color" :tag="props.tag">
      <component :is="getIcon" />
    </Icon>
  </ClientOnly>
</template>

<style lang="scss" scoped></style>
