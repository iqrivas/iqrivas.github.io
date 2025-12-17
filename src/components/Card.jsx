const Card = ({ children, className = '', image, alt = '', href, linkText }) => {
  return (
    <div className={`p-4 text-base bg-yellow-400 rounded mx-auto my-4 max-w-sm ${className}`}>
      {image && (
        <img
          className="h-52 w-auto border border-black mx-auto mb-2"
          src={image}
          alt={alt}
        />
      )}

      {href ? (
        <a className="underline text-black" href={href} target="_blank" rel="noreferrer">
          {linkText || children}
        </a>
      ) : (
        children
      )}
    </div>
  );
};

export default Card;
