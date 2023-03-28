import each from 'jest-each'
import { describe, it, expect } from 'vitest'

import { sanitizeElement, sanitizePath } from './utils'

describe('utils', () => {
  describe('sanitizeElement', () => {
    [
      {expected: undefined, element: undefined},
      {expected: '', element:''},
      {expected:'#element', element: '#element'},
      {expected:'#element', element: 'element'}
    ].forEach((item, i) => {
      it('returns %s for path %s', () => {
        expect(sanitizeElement(item.element)).toBe(item.expected)
      })
    })
  })

  describe('sanitizePath', () => {
    [
      {expected:undefined, path: undefined},
      {expected:'', path: ''},
      {expected:'/path', path: '/path'},
      {expected:'/path', path: 'path'},
      {expected:'/path', path: 'path/'}
    ].forEach((item) => {
      it('returns %s for path %s', () => {
        expect(sanitizePath(item.path)).toBe(item.expected)
      })
    })
  })
})
