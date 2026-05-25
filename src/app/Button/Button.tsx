type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

export default function Button({
  children,
  variant = "primary",
  className = "",
  onClick,
  type = "button",
}: ButtonProps) {
  const baseStyles =
    "px-6 py-3 rounded-md font-medium transition-all duration-300 cursor-pointer";

  const variants = {
    primary:
      "bg-[#FCB728] text-white hover:bg-neutral-800",

    secondary:
      "bg-[#7C4EE4] text-white hover:opacity-90",

    outline:
      "border border-black text-black hover:bg-black hover:text-white",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}