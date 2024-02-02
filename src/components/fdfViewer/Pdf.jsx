'use client';
import { useEffect, useRef } from 'react';
// import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";


export default function Pdf() {
    const containerRef = useRef(null);
    // const { isOpen, onOpen, onOpenChange } = useDisclosure();
    // console.log(pdfFile)

    useEffect(() => {
        const container = containerRef.current;
        if (typeof window !== 'undefined') {
            import('pspdfkit').then((PSPDFKit) => {
                if (PSPDFKit) {
                    PSPDFKit.unload(container);
                }
                PSPDFKit.load({
                    container,
                    document: `/nazrul.pdf`,
                    baseUrl: `${window.location.protocol}//${window.location.host}/`,
                });
            });
        }
    }, []);

    return (
        <div ref={containerRef} style={{ height: '90vh' }} className='container mx-auto' />

    )
}