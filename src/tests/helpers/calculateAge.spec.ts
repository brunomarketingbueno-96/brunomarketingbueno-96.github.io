import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { calculateAge } from '../../helpers/calculateAge';

describe('calculateAge', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date(2025, 5, 15));
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('calculates age correctly when birthday month has passed in current year', () => {
    const age = calculateAge(1990, 4, 10);
    expect(age).toBe(35);
  });

  it('calculates age correctly when birthday is today', () => {
    const age = calculateAge(1990, 5, 15);
    expect(age).toBe(35);
  });

  it('calculates age correctly when birthday is later in current month', () => {
    const age = calculateAge(1990, 5, 20);
    expect(age).toBe(34);
  });

  it('calculates age correctly when birthday month is later in current year', () => {
    const age = calculateAge(1990, 7, 10);
    expect(age).toBe(34);
  });
});
