"use client"

import { useEffect, useRef, useState } from 'react';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"

// This is a global type declaration. You can also put this in a separate .d.ts file.
declare global {
    interface Window {
        PagefindUI: any;
    }
}

interface SearchDialogProps {
    isOpen: boolean;
    onClose: () => void;
}

export function SearchDialog({ isOpen, onClose }: SearchDialogProps) {
    const pagefindRef = useRef(null);
    const [pagefindInstance, setPagefindInstance] = useState<any>(null);

    useEffect(() => {
        if (isOpen && pagefindRef.current && !pagefindInstance) {
            // --- THIS IS THE CORRECTED LOGIC ---
            // We avoid the Next.js bundler by creating the script tag manually.
            const script = document.createElement('script');
            script.src = '/pagefind/pagefind-ui.js';
            script.async = true;

            // When the script loads, initialize PagefindUI
            script.onload = () => {
                if (window.PagefindUI) {
                    const pf = new window.PagefindUI({
                        element: pagefindRef.current,
                        showSubResults: true,
                        showImages: false,
                    });
                    setPagefindInstance(pf);
                }
            };

            document.body.appendChild(script);

            // Cleanup function to remove the script when the component unmounts
            return () => {
                document.body.removeChild(script);
            };
        }
    }, [isOpen, pagefindInstance]); // Rerun effect if isOpen changes

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
        <DialogTitle>Search The Diabetes Hub</DialogTitle>
        </DialogHeader>
        <div ref={pagefindRef} id="search" className="pagefind-ui-container"></div>
        </DialogContent>
        </Dialog>
    );
}
