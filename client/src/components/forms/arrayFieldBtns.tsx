import { IconContext } from "react-icons";

interface ArrayFieldBtnProps {
  onClick: () => void;
  children: React.ReactNode;
}

export const PushBtn = ({ onClick, children }: ArrayFieldBtnProps) => {
  return (
    <button
      onClick={onClick}
      className="w-auto cursor-pointer bg-white border-1 px-3 py-2 rounded-sm hover:bg-gray-200 transition-colors"
    >
      <IconContext.Provider value={{ size: "2rem", color: "white" }}>
        {children}
      </IconContext.Provider>
    </button>
  );
};

export const RemoveBtn = ({ onClick, children }: ArrayFieldBtnProps) => {
  return (
    <button
      onClick={onClick}
      className="w-auto cursor-pointer bg-[#ec221f] rounded-sm hover:bg-red-400 transition-colors"
    >
      <IconContext.Provider value={{ size: "2rem", color: "white" }}>
        {children}
      </IconContext.Provider>
    </button>
  );
};
