import { useCallback, useRef } from 'react';

export function useDoubleTap(onDoubleTap: () => void) {
    const lastTap = useRef<number | null>(null);

    return useCallback(() => {
        const now = Date.now();
        if (lastTap.current && now - lastTap.current < 300) {
            onDoubleTap();
        }
        lastTap.current = now;
    }, [onDoubleTap]);
}
