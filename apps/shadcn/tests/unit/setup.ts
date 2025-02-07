import { vi } from 'vitest'

vi.stubGlobal(
  'matchMedia',
  vi.fn(() => ({
    writable: true,
    value: vi.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(), // deprecated
      removeListener: vi.fn(), // deprecated
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn()
    }))
  }))
)

vi.stubGlobal(
  'IntersectionObserver',
  vi.fn(() => ({
    disconnect: vi.fn(),
    observe: vi.fn(),
    takeRecords: vi.fn(),
    unobserve: vi.fn()
  }))
)

vi.stubGlobal(
  'getComputedStyle',
  vi.fn(() => ({
    getPropertyValue: vi.fn()
  }))
)
