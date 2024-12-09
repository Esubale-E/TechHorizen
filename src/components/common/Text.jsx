/* eslint-disable react/prop-types */
const Text = ({
  children,
  className = "",
  isBold = false,
  isItalic = false,
  color = "text",
  size = "text-base",
  align = "text-left",
}) => {
  // Map color prop to the appropriate TailwindCSS color class for both light and dark modes
  const getColorClass = (color) => {
    switch (color) {
      case "primary":
        return "text-primary dark:text-darkprimary";
      case "secondary":
        return "text-secondary dark:text-darksecondary";
      case "accent":
        return "text-accent dark:text-darkaccent";
      case "background":
        return "text-background dark:text-darkbackground";
      case "highlight":
        return "text-highlight dark:text-darkhighlight";
      case "text":
        return "text-text dark:text-darktext";
      default:
        return "text-text dark:text-darktext";
    }
  };

  const textClass = `
    ${getColorClass(color)} ${size} 
    ${isBold ? "font-bold" : ""} 
    ${isItalic ? "italic" : ""} 
    ${align} 
    ${className}
  `;

  return <p className={textClass}>{children}</p>;
};

export default Text;
