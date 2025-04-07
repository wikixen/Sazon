import { Tabs } from "radix-ui";

interface TabsProps {
  ariaLabel: string;
  tabs: string[];
  Content: JSX.Element;
}

// Brackets mean I have to change to a prop
export const TabsDemo = (
  { ariaLabel, tabs, Content }: TabsProps,
) => (
  <Tabs.Root
    className="flex w-[300px] flex-col shadow-[0_1px_5px] rounded-md"
    defaultValue="tab1"
  >
    <Tabs.List
      className="flex shrink-0 border-b"
      aria-label={ariaLabel}
    >
      {tabs.map((tab, i) => (
        <Tabs.Trigger
          className="flex h-[45px] flex-1 cursor-default select-none items-center justify-center bg-white px-5 text-[15px] leading-none outline-none first:rounded-tl-md last:rounded-tr-md data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px] data-[state=active]:focus:shadow-black"
          value={`tab${i + 1}`}
        >
          {tab}
        </Tabs.Trigger>
      ))}
    </Tabs.List>
    {Content}
  </Tabs.Root>
);