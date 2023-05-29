import { useEffect, useState } from 'react';

const instagramToken = ''

export const useInstagramFeed = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        // Realizar la consulta a la API de Instagram
        const fetchInstagramFeed = async () => {
        try {
            // Hacer la llamada a la API de Instagram para obtener el feed
            const response = await fetch(
            `https://graph.instagram.com/me/media?fields=media_url,thumbnail_url&limit=3&access_token=${instagramToken}`
            );
            
            // Obtener los datos de la respuesta en formato JSON
            const data = await response.json();
            
            // Extraer las imágenes del feed
            const feedImages = data.data.map((item) => ({
            id: item.id,
            mediaUrl: item.media_url,
            thumbnailUrl: item.thumbnail_url,
            }));
            
            // Actualizar el estado con las imágenes del feed
            setImages(feedImages);
        } catch (error) {
            console.error('Error al obtener el feed de Instagram:', error);
        }
        };
        
        fetchInstagramFeed();
    }, []);

    return images;
};