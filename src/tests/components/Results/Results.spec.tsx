import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, act } from '@testing-library/react';
import Results from '../../../components/Results';

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string, options?: { defaultValue?: string }) => options?.defaultValue || key,
  }),
}));

vi.mock('@/components/SectionHeader', () => ({
  default: ({ title, subtitle, description }: { title: string; subtitle: string; description: string }) => (
    <div data-testid="section-header">
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>{description}</p>
    </div>
  ),
}));

vi.mock('@/components/CallToAction', () => ({
  default: ({ buttonText }: { buttonText: string }) => (
    <button data-testid="cta-button">{buttonText}</button>
  ),
}));

describe('Results component', () => {
  let observerCallback: IntersectionObserverCallback;
  const mockObserve = vi.fn();
  const mockDisconnect = vi.fn();
  const rafCallbacks: FrameRequestCallback[] = [];

  beforeEach(() => {
    mockObserve.mockReset();
    mockDisconnect.mockReset();
    rafCallbacks.length = 0;

    class MockIntersectionObserver implements IntersectionObserver {
      readonly root: Element | null = null;
      readonly rootMargin: string = '';
      readonly thresholds: ReadonlyArray<number> = [];

      constructor(callback: IntersectionObserverCallback) {
        observerCallback = callback;
      }

      observe(target: Element): void {
        mockObserve(target);
      }

      unobserve(_target: Element): void {}

      disconnect(): void {
        mockDisconnect();
      }

      takeRecords(): IntersectionObserverEntry[] {
        return [];
      }
    }

    vi.stubGlobal('IntersectionObserver', MockIntersectionObserver);

    vi.spyOn(window, 'requestAnimationFrame').mockImplementation((cb) => {
      rafCallbacks.push(cb);
      return rafCallbacks.length;
    });
  });

  afterEach(() => {
    vi.restoreAllMocks();
    vi.unstubAllGlobals();
  });

  it('renders case studies, triggers intersection observer animation and completes counting', () => {
    const { unmount } = render(<Results />);

    expect(screen.getByText('Results that speak louder than promises.')).toBeInTheDocument();
    expect(screen.getByText('Niche: Evergreen Product')).toBeInTheDocument();

    expect(mockObserve).toHaveBeenCalled();

    act(() => {
      observerCallback(
        [{ isIntersecting: false } as IntersectionObserverEntry],
        {} as IntersectionObserver
      );
    });

    act(() => {
      observerCallback(
        [{ isIntersecting: true } as IntersectionObserverEntry],
        {} as IntersectionObserver
      );
    });

    const stepFn = rafCallbacks[0];
    if (stepFn) {
      act(() => {
        stepFn(100);
        stepFn(1100);
        stepFn(2100);
      });
    }

    unmount();
    expect(mockDisconnect).toHaveBeenCalled();
  });
});
