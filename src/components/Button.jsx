export const Button = ({
  className = "",
  size = "default",
  children,
  ...props
}) => {
  const baseClasses =
    "relative bg-primary text-primary-foreground overflow-hidden rounded-full font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary shadow-lg shadow-primary/25 hover:bg-primary/90 transition";

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    default: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const classes = `${baseClasses} ${sizeClasses[size]} ${className}`;

  return (
    <button className={classes} {...props}>
      <span className="relative flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
};