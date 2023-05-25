const LinkItem = ({ children }) => {
  const fontFamily = {
    fontFamily: "Space Mono",
  };

  return (
    <div
      className="uppercase flex flex-col font-bold md:mb-0 mb-12"
      style={fontFamily}
    >
      {children}
    </div>
  );
};

export default LinkItem;
