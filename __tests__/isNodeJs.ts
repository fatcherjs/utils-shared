import { describe, expect, it } from 'vitest';
import { isNodeJs } from '../src';

describe('isNodeJS', () => {
  it('Test env is in node js', () => {
    expect(isNodeJs()).toBe(true);
  });
});
