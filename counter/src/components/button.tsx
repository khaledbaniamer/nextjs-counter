// Conditional class assignment based on the 'className' prop value
// This expression checks if a 'className' prop is provided. If it is, it appends
// additional Tailwind CSS classes for styling. If not, it falls back to a default
// set of classes.

type Props = {
  label: string;
  className?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};
const Button = (props: Props) => {
  const { className, label, onClick } = props;
  return (
    <button
      onClick={onClick}
      className={
        className ??
        "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-1 rounded"
      }
    >
      {label}
    </button>
  );
};

export default Button;
