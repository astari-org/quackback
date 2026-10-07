import { describe, expect, it } from 'vitest'
import { DISABLED_CLOUD_CONFIG, type CloudConfig } from '../cloud.types'
import { shouldShowPoweredBy } from '../powered-by'

function cloudOn(overrides: Partial<CloudConfig> = {}): CloudConfig {
  return {
    ...DISABLED_CLOUD_CONFIG,
    enabled: true,
    plan: 'pro',
    ...overrides,
  }
}

// Astari fork: the Powered-by badge is never shown.
describe('shouldShowPoweredBy', () => {
  it('hides on a self-hosted install', () => {
    expect(shouldShowPoweredBy(DISABLED_CLOUD_CONFIG)).toBe(false)
  })

  it('hides on cloud regardless of entitlements', () => {
    expect(shouldShowPoweredBy(cloudOn({ entitlements: {} }))).toBe(false)
    expect(shouldShowPoweredBy(cloudOn({ entitlements: { hideBranding: true } }))).toBe(false)
  })
})
