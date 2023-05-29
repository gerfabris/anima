import { useInstagramFeed } from "./useInstagramFeed";

export const InstagramFeed = () => {

  const images = useInstagramFeed()
  
  return (
    <div className="instagram-feed">
      {images.length === 0 ? (
        <p>No se encontraron imágenes de Instagram.</p>
      ) : (
        images.map((image) => (
          <img key={image.id} src={image.thumbnailUrl} alt="Instagram Image Anima" />
        ))
      )}
    </div>
  );
};