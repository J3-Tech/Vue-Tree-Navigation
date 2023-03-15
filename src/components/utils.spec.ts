import each from 'jest-each'

import { sanitizeElement, sanitizePath } from './utils'

describe('utils', () => {
  describe('sanitizeElement', () => {
    each([
      [undefined, undefined],
      ['', ''],
      ['#element', '#element'],
      ['#element', 'element']
    ]).it('returns %s for path %s', (expected, element) => {
      expect(sanitizeElement(element)).toBe(expected)
    })
  })

  describe('sanitizePath', () => {
    each([
      [undefined, undefined],
      ['', ''],
      ['/path', '/path'],
      ['/path', 'path'],
      ['/path', 'path/']
    ]).it('returns %s for path %s', (expected: string, path: string) => {
      expect(sanitizePath(path)).toBe(expected)
    })
  })
})
