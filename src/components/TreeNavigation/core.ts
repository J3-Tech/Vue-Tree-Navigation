import NavigationLevel from '../NavigationLevel/NavigationLevel.vue'
import NavigationItem from '../NavigationItem/NavigationItem.vue'

import { sanitizeElement, sanitizePath } from '../utils'
import { VNode } from 'vue'

export interface ItemMetaData {
  name?: string
  element?: string
  path?: string
  external?: string
  target?: string
  meta?: ItemMetaData
  children?: ItemMetaData[]
}

/**
 * Recursive function.
 * One call generates one level of the tree.
 */
export const generateLevel = (
  createElement: (el: String | Object | Function, prop: Object, children: VNode[]) => VNode,
  items: ItemMetaData[],
  level: number,
  defaultOpenLevel: number
): VNode[] => {
  const children: VNode[] = []

  items.forEach(item => {
    if (item.hasOwnProperty('children')) {
      const navLevel = createElement(
        NavigationLevel,
        {
          props: {
            parentItem: item,
            level,
            defaultOpenLevel
          }
        },
        [
          ...generateLevel(
            createElement,
            item.children,
            level + 1,
            defaultOpenLevel
          )
        ]
      )

      children.push(createElement('li', {}, [navLevel]))
    } else {
      const navItem = createElement(NavigationItem, {
        props: {
          item
        }
      }, [])

      children.push(createElement('li', {}, [navItem]))
    }
  })

  return children
}

/**
 * Recursive function.
 * Insert metadata containing the navigation path and its type to each item.
 **/
export const insertMetadataToNavItems = (items: ItemMetaData[], parent?: ItemMetaData): ItemMetaData[] => {
  items.forEach(item => {
    item.meta = getItemMetadata(item, parent)

    if (item.children) {
      item.children = insertMetadataToNavItems(item.children, item)
    }
  })

  return items
}

/**
 * Return item metadata object: { path: ..., target: ... }
 */
export const getItemMetadata = (item: ItemMetaData, parent?: ItemMetaData): ItemMetaData => {
  const element = sanitizeElement(item.element)
  const path = sanitizePath(item.path)
  const external = item.external

  // item is its own parent
  if (parent === undefined) {
    if (element === undefined && path === undefined && external === undefined) {
      return {
        path: '',
        target: ''
      }
    }

    if (external !== undefined) {
      return {
        path: '',
        target: external
      }
    }

    if (path !== undefined) {
      return {
        path,
        target: path
      }
    }

    if (element !== undefined) {
      return {
        path: '',
        target: '/' + element
      }
    }
  }

  const parentPath = sanitizePath(parent?.meta?.path)

  if (external !== undefined) {
    return {
      path: parentPath,
      target: external
    }
  }

  if (path !== undefined) {
    return {
      path: parentPath + path,
      target: parentPath + path
    }
  }

  if (element !== undefined && parentPath !== undefined) {
    return {
      path: parentPath,
      target: sanitizePath(parentPath + element)
    }
  }

  return {
    path: parentPath,
    target: ''
  }
}
