import { describe, it, expect } from 'vitest';
import { formatWhatsApp } from '../../helpers/masks';

describe('formatWhatsApp', () => {
  it('returns empty string when input contains no digits', () => {
    expect(formatWhatsApp('')).toBe('');
    expect(formatWhatsApp('abc')).toBe('');
  });

  it('formats country code when digit length is up to 2', () => {
    expect(formatWhatsApp('5')).toBe('+5');
    expect(formatWhatsApp('55')).toBe('+55');
  });

  it('formats area code when digit length is between 3 and 4', () => {
    expect(formatWhatsApp('551')).toBe('+55 (1');
    expect(formatWhatsApp('5511')).toBe('+55 (11');
  });

  it('formats first number part when digit length is between 5 and 9', () => {
    expect(formatWhatsApp('55119')).toBe('+55 (11) 9');
    expect(formatWhatsApp('551198765')).toBe('+55 (11) 98765');
  });

  it('formats full phone number when digit length is 10 or more', () => {
    expect(formatWhatsApp('5511987654321')).toBe('+55 (11) 98765-4321');
  });

  it('limits input to 13 digits and ignores extra characters', () => {
    expect(formatWhatsApp('+55 (11) 98765-4321999')).toBe('+55 (11) 98765-4321');
  });
});
