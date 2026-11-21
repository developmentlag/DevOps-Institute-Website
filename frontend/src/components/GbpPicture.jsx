export default function GbpPicture({ photo, priority = false, sizes, className = "" }) {
  return (
    <picture className={`block h-full w-full ${className}`}>
      <source type="image/avif" srcSet={photo.avifSrcSet} sizes={sizes} />
      <source type="image/webp" srcSet={photo.webpSrcSet} sizes={sizes} />
      <img
        src={photo.jpg}
        srcSet={photo.jpgSrcSet}
        sizes={sizes}
        alt={photo.alt}
        width={photo.width}
        height={photo.height}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : undefined}
        decoding="async"
        className="h-full w-full object-cover"
      />
    </picture>
  );
}
