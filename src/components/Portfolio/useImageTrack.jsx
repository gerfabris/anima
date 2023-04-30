import { useState, useEffect } from 'react';

export const useImageTrack = () => {
    const [percentage, setPercentage] = useState(0);
    const [prevPercentage, setPrevPercentage] = useState(0);
    const [mouseDownAt, setMouseDownAt] = useState(0);

    useEffect(() => {
        const track = document.getElementById('image-track');
        const images = track.getElementsByClassName('image');
        
        const handleMouseDown = e => setMouseDownAt(e.clientX);

        const handleMouseUp = () => {
            setMouseDownAt(0);
            setPrevPercentage(percentage);
        };

        const handleMouseMove = (e) => {
            if (mouseDownAt === 0) return;

            const mouseDelta = parseFloat(mouseDownAt) - e.clientX;
            const maxDelta = window.innerWidth / 2;

            const nextPercentageUnconstrained = parseFloat(prevPercentage) + (mouseDelta / maxDelta) * -100;
            const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

            setPercentage(nextPercentage);

            track.animate(
                { transform: `translate(${nextPercentage}%, -50%)` },
                { duration: 1200, fill: 'forwards' }
            );

            for (const image of images) {
                image.animate(
                    { objectPosition: `${100 + nextPercentage}% center` },
                    { duration: 1200, fill: 'forwards' }
                );
            }
        };

        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('touchstart', e => handleMouseDown(e.touches[0]));
        window.addEventListener('touchend', e => handleMouseUp(e.touches[0]));
        window.addEventListener('touchmove', e => handleMouseMove(e.touches[0]));


        return () => {
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('touchstart', e => handleMouseDown(e.touches[0]));
            window.removeEventListener('touchend', e => handleMouseUp(e.touches[0]));
            window.removeEventListener('touchmove', e => handleMouseMove(e.touches[0]));
        };
    }, [percentage, prevPercentage, mouseDownAt]);

    return { percentage };
};