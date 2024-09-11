import { test, expect, beforeEach, afterEach } from 'bun:test'

beforeEach(async () => {
    await Bun.sleep(1)
})

afterEach(async () => {
    await Bun.sleep(1)
})

test('Should pass', () => {
    expect(true).toBe(true)
})
