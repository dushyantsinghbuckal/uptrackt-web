'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

type GradientBackgroundProps = React.ComponentProps<'div'> & {
  /** Array of CSS gradient strings to cycle through */
  gradients?: string[];
  /** Duration (in seconds) each gradient is displayed */
  animationDuration?: number;
  /** Whether to add a dark overlay on top of the gradient */
  overlay?: boolean;
  /** Opacity of the overlay (0 to 1) */
  overlayOpacity?: number;
  /** If true, content is centered vertically and horizontally (requires min-height) */
  centerContent?: boolean;
};

const Default_Gradients = [
  "linear-gradient(135deg, #2d1b69, #11998e)",
  "linear-gradient(135deg, #8e2de2, #4a00e0)",
  "linear-gradient(135deg, #0f3460, #e94560)",
  "linear-gradient(135deg, #134e5e, #71b280)",
  "linear-gradient(135deg, #2d1b69, #11998e)",
];

export function GradientBackground({
  children,
  className,
  gradients = Default_Gradients,
  animationDuration = 8,
  overlay = false,
  overlayOpacity = 0.3,
  centerContent = false,
}: GradientBackgroundProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Cycle through gradients
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % gradients.length);
    }, animationDuration * 1000);
    return () => clearInterval(interval);
  }, [gradients.length, animationDuration]);

  return (
    <div
      className={cn(
        'relative w-full overflow-hidden',
        centerContent && 'min-h-screen', // only apply min-height if centering content
        className
      )}
    >
      {/* Background gradient with crossfade */}
      <div
        className="absolute inset-0 transition-opacity duration-1000"
        style={{
          background: gradients[currentIndex],
          opacity: 1,
        }}
      />

      {/* Optional overlay */}
      {overlay && (
        <div
          className="absolute inset-0 bg-black"
          style={{ opacity: overlayOpacity }}
        />
      )}

      {/* Content wrapper */}
      {children && (
        <div
          className={cn(
            'relative z-10',
            centerContent && 'flex min-h-screen items-center justify-center'
          )}
        >
          {children}
        </div>
      )}
    </div>
  );
}