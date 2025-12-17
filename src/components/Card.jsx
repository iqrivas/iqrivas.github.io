const Card = ({ children, className = '', image, alt = '', href, linkText, size = 'sm' }) => {
  const sizeClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
    '3xl': 'max-w-3xl',
    '4xl': 'max-w-4xl',
    full: 'w-full',
  };

  const widthClass = sizeClasses[size] || sizeClasses.sm;

  return (
    <div className={`p-4 text-base bg-yellow-400 rounded mx-auto my-4 ${widthClass} ${className}`}>
      {image && (
        <img
          className="w-80 h-auto border border-black mx-auto mb-2"
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
