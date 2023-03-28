import { insertMetadataToNavItems, generateLevel } from './core'
import { h } from 'vue';
import './TreeNavigation.scss'

const TreeNavigation = {
  props: {
    items: {
      type: Array,
      required: false,
      default: () => []
    },
    defaultOpenLevel: {
      type: Number,
      default: 0
    }
  },
  computed: {
    navItems () {
      if (this.items && this.items.length) {
        return this.items
      }

      if (
        this.$router &&
        this.$router.options &&
        this.$router.options.routes &&
        this.$router.options.routes.length
      ) {
        return this.$router.options.routes
      }

      console.warn(
        "[VueTreeNavigation]: Haven't you forget to provide items or define vue-router routes?"
      )
      return []
    },
    navItemsWithMetadata () {
      const navItems = JSON.parse(JSON.stringify(this.navItems))
      return insertMetadataToNavItems(navItems)
    }
  },

  render () {
    const self = this

    const level = 1
    const tree = h(
      'ul',
      generateLevel(
        self.navItemsWithMetadata,
        level,
        self.defaultOpenLevel
      )
    )

    const level0 = h(
      'div',
      {
        class: ['navigation-level', 'navigation-level--level-0']
      },
      [tree]
    )

    const treeNavigation = h(
      'div',
      {
        class: 'tree-navigation'
      },
      [level0]
    )

    return treeNavigation
  }
}

export default TreeNavigation
