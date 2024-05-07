const CustomButton = ({
  text,
  containerStyles,
}: {
  text: string;
  containerStyles: string;
}) => {
  return (
    <button
      type="button"
      className={`${containerStyles} group relative cursor-pointer overflow-hidden bg-accent uppercase`}
    >
      <span
        className="absolute top-1/2 -translate-x-20  ease bg-black duration-300 
      group-hover:h-64 group-hover:-translate-y-32 h-0 origin-center rotate-45 transition-all w-64"
      ></span>

      <span className="ease relative text-black transition duration-300 group-hover:text-accent">
        {text}
      </span>
    </button>
  );
};

export default CustomButton;
