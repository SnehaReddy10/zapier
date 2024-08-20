function TertiaryButton({
  text,
  className = '',
}: {
  text: string;
  className?: string;
}) {
  return (
    <button className={`${className} rounded-sm px-2 font-semibold`}>
      {text}
    </button>
  );
}

export default TertiaryButton;
