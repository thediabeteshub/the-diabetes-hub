"use client"

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

export function AosProvider({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        AOS.init({
            once: true, // Whether animation should happen only once - while scrolling down
            duration: 700, // values from 0 to 3000, with step 50ms
            easing: 'ease-in-out', // default easing for AOS animations
        });
    }, []);

    return <>{children}</>;
}
