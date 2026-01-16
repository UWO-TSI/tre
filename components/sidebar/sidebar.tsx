interface SidebarProps {
  title: string;
  items: string[];
  selectedItem: string;
  onItemChange: (newItem: string) => void;
}
function Sidebar(props: SidebarProps) {
  return (
    <div className="flex flex-col">
      <div className="text-h2 font-medium text-secondary-grey pb-2">
        {props.title}
      </div>
      {props.items.map((item, index) => {
        const isSelected = props.selectedItem == item;
        return (
          <div
            onClick={() => {
              props.onItemChange(item);
            }}
            className={`transition-colors text-[16px] pb-2 font-medium ${isSelected ? "text-header-teal" : "text-main-grey"}  cursor-pointer`}
            key={index + item}
          >
            {item}
          </div>
        );
      })}
    </div>
  );
}

export default Sidebar;
