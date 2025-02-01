import { TagLabelProps } from "./types";
const TagLabel = ({ children, text, className }: TagLabelProps) => {
  return (
    <div className={`flex gap-1 rounded-sm items-center text-xs px-2 py-1 w-fit font-semibold ` + `${className}`}>
        {children}
      <p >{text}</p>
    </div>
  );
};

export { TagLabel };
