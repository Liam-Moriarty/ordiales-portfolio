interface Props {
  label: string;
  variant: "primary" | "secondary";
  className?: string;
  submit?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ label, variant, className, submit, onClick }: Props) => {
  const baseStyle = `
    inline-flex justify-center items-center whitespace-nowrap py-1.5 px-4 rounded-md text-sm font-semibold tracking-wide cursor-pointer
  `;

  const variants = {
    primary: "bg-[var(--primary-ctc)]",
    secondary: "bg-[var(--secondary-ctc)]",
  };

  const buttonStyle = `${baseStyle} ${variants[variant] || " "} ${className}`;

  return (
    <button
      className={buttonStyle}
      onClick={onClick}
      type={submit ? "submit" : "button"}
    >
      {label}
    </button>
  );
};

export default Button;
