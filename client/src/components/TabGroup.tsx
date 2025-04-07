import { Dialog, Tabs } from "radix-ui";

interface TabsProps {
  ariaLabel: string;
  tabs: string[];
  content: JSX.Element;
}

// Brackets mean I have to change to a prop
export const TabGroup = (
  { ariaLabel, tabs, content }: TabsProps,
) => (
  <Tabs.Root
    className="flex w-[300px] flex-col"
    defaultValue="tab1"
  >
    <Tabs.List
      className="flex shrink-0 border-b"
      aria-label={ariaLabel}
    >
      <Dialog.Title>
        {tabs.map((tab, i) => (
          <Tabs.Trigger
            className="flex h-[45px] flex-1 select-none items-center justify-center bg-white px-5 text-[15px] leading-none 
        outline-none first:rounded-tl-md last:rounded-tr-md data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] 
        data-[state=active]:shadow-current data-[state=active]:focus:relative hover:bg-gray-100 cursor-pointer transition-colors"
            value={`tab${i + 1}`}
          >
            {tab}
          </Tabs.Trigger>
        ))}
      </Dialog.Title>
    </Tabs.List>
    {content}
  </Tabs.Root>
);
