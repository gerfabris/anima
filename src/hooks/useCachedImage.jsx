import { useState, useEffect } from 'react';
import { LRUCache } from 'lru-cache';

const cache = new LRUCache( {max: 70 }); // Crea una instancia de la caché con un límite de 50 elementos

export const useCachedImage = (src) => {
    const [isInCache, setIsInCache] = useState(false);
    const [imageSrc, setImageSrc] = useState('');
    
        useEffect(() => {
        if (cache.has(src)) {
            setIsInCache(true);
            setImageSrc(cache.get(src));
        } else {
                const image = new Image();
                image.src = src;
                image.onload = () => {
                cache.set(src, src);
                setIsInCache(true);
                setImageSrc(src);
            };
        }
    }, [src]);
    
    return { isInCache, imageSrc };
};

export const useImagePreloading = (imagesToPreload) => {
    useEffect(() => {
        const preloadImages = () => {
            imagesToPreload.forEach((imageUrl) => {
            if (!cache.has(imageUrl)) {
                const image = new Image();
                image.src = imageUrl;
                image.onload = () => {
                cache.set(imageUrl, imageUrl);
                };
            }
            });
        };

        preloadImages();

    }, [imagesToPreload]);
};

