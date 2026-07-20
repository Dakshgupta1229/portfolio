import { useEffect, useState } from "react";

interface AnimatedCounterProps {
  end: number;
  duration?: number;
}

export default function AnimatedCounter({
  end,
  duration = 2000,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;

    const stepTime = 16;
    const increment = end / (duration / stepTime);

    const interval = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(interval);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(interval);
  }, [end, duration]);

  return <>{count}</>;
}