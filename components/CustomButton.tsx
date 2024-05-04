const CustomButton = ({
  text,
  containerStyles,
}: {
  text: string;
  containerStyles: string;
}) => {
  return (
    <button type="button" className={`${containerStyles}`}>
      <span></span>
      <span>{text}</span>
    </button>
  );
};

export default CustomButton;
