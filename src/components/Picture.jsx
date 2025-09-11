// src/components/Picture.jsx
export default function Picture({ data, alt, className, loading, decoding, fetchpriority }) {
  // Accept BOTH:
  //  • imagetools object: { sources: [...], img: { src, width, height } }
  //  • plain URL string:  "assets/cover.png"
  //  • plain URL wrapper: { src: "assets/cover.png" }
  const src =
    typeof data === 'string'
      ? data
      : (data?.img?.src || data?.src);

  const width =
    typeof data === 'string'
      ? undefined
      : (data?.img?.width);

  const height =
    typeof data === 'string'
      ? undefined
      : (data?.img?.height);

  return (
    <picture>
      {Array.isArray(data?.sources) &&
        data.sources.map((s, i) => (
          <source key={i} type={s.type} srcSet={s.srcset} sizes={s.sizes} />
        ))}
      <img
        src={src}
        width={width}
        height={height}
        alt={alt}
        className={className}
        loading={loading}
        decoding={decoding}
        fetchpriority={fetchpriority}
      />
    </picture>
  );
}
