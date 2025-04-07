import { Link } from "@tanstack/react-router";
import { IconContext, IconType } from "react-icons";
import {
  BiCog,
  BiFridge,
  BiHomeAlt2,
  BiPlusCircle,
  BiSearch,
} from "react-icons/bi";
import sazonLogoRed from "../assets/LogoRedBg.png";
import sazonLogoWhite from "../assets/LogoWhiteBg.png";
// import "../styles/header.css";
import IconBtn from "./IconBtn";
import { useForm } from "@tanstack/react-form";
import { Dialog, Tabs } from "radix-ui";
import HeaderDialog from "./Dialog";
import { TabGroup } from "./TabGroup";
import HeaderDropdown from "./Dropdown";

/** Header contains all files that concern the header
 * AuthTabs is for the Login/Sign Up dialog in the header that shows for guests
 * SearchBar & HeaderBtns are for the header when a user is logged in
 */

export default function Header({ authStatus }: { authStatus: boolean }) {
  const loginBtn = (
    <button className="mx-1 mt-4 border-white border-1 bg-[#ec221f] rounded-sm px-2 py-3 text-lg cursor-pointer transition-colors hover:bg-[#c00f0c]">
      Log In
    </button>
  );
  const signUpBtn = (
    <button className="mx-1 mt-4 border-[#900b09] border-1 bg-white text-[#900b09] rounded-sm px-2 py-3 text-lg cursor-pointer transition-colors hover:bg-[#b3b3b3]">
      Sign Up
    </button>
  );

  if (!authStatus) {
    return (
      <header className="grid grid-cols-[auto_auto_auto] items-center justify-between mt-2 mx-4">
        <Link to="/home">
          <img src={sazonLogoWhite} className="w-36" alt="Sazon Logo" />
        </Link>
        <SearchBar />
        <HeaderBtns />
      </header>
    );
  } else {
    return (
      <header className="grid grid-cols-[auto_1fr_auto] items-start justify-between bg-[#fd2727] text-white">
        <div>
          <Link to="/">
            <img src={sazonLogoRed} className="w-60 ms-2" alt="Sazon Logo" />
          </Link>
          <h1 className="ms-4 text-[3rem]">
            Add some spice to<br /> your life with Sazon
          </h1>
        </div>
        <div />
        <div>
          <HeaderDialog
            aria="Login"
            button={loginBtn}
            content={
              <TabGroup
                ariaLabel={"Login/Sign Up"}
                tabs={["Login", "Sign Up"]}
                content={<AuthTabs />}
              />
            }
          />
          <HeaderDialog
            aria="Sign Up"
            button={signUpBtn}
            content={
              <TabGroup
                ariaLabel={"Login/Sign Up"}
                tabs={["Login", "Sign Up"]}
                content={<AuthTabs />}
              />
            }
          />
        </div>
      </header>
    );
  }
}

interface IconBtnItem {
  icon?: IconType;
  btnDesc?: string;
  hyperlink?: string;
  specialBtn?: JSX.Element;
}

// HeaderBtns is the header toolbar shown when a user is logged in
function HeaderBtns() {
  const dropdownItems = [{ name: "Settings" }, { name: "Log Out" }];

  const headerBtns: IconBtnItem[] = [
    { icon: BiHomeAlt2, hyperlink: "/home" },
    { icon: BiFridge, btnDesc: "Check your pantry" },
    { icon: BiPlusCircle, btnDesc: "Create a recipe" },
    {
      hyperlink:"/settings",
      specialBtn: (
        <HeaderDropdown BtnContent={BiCog} dropdownItems={dropdownItems} />
      ),
    },
  ];

  return (
    <div className="authHeaderBtns">
      <IconContext.Provider value={{ color: "white" }}>
        {headerBtns.map((item) => (
          <IconBtn
            Icon={item.icon}
            btnDesc={item.btnDesc}
            hyperlink={item.hyperlink}
            specialBtn={item.specialBtn}
          />
        ))}
      </IconContext.Provider>
    </div>
  );
}

function SearchBar() {
  return (
    <div className="w-max min-w-[300px] flex items-center px-2 py-3 rounded-full bg-[#ffd8e4]">
      <IconContext.Provider value={{ color: "#49454F", size: "1.25rem" }}>
        <BiSearch />
      </IconContext.Provider>
      <input
        type="search"
        name="searchbar"
        id="searchbar"
        placeholder="Search Recipes"
        className="text-md ml-4 outline-none border-none bg-transparent flex-1"
      />
    </div>
  );
}

// AuthTabs are the tabs for the Login & Sign Up Buttons when a guest arrives
function AuthTabs() {
  const loginForm = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
    onSubmit: ({ value }) => {
      console.log(value);
    },
  });
  const signForm = useForm({
    defaultValues: {
      email: "",
      username: "",
      password: "",
    },
    onSubmit: ({ value }) => {
      console.log(value);
    },
  });

  return (
    <>
      <Tabs.Content
        className="grow rounded-b-md bg-white p-5 outline-none"
        value={"tab1"}
      >
        <form
          className="flex flex-col gap-4 items-center"
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            loginForm.handleSubmit();
          }}
        >
          <loginForm.Field
            name="username"
            children={(field) => (
              <label htmlFor="userForm" className="text-lg">
                Email or Username<br />
                <input
                  id="userForm"
                  className="w-[15rem] h-10 border-1 rounded-sm ps-2 focus:outline-[.1rem]"
                  type="text"
                  name="userForm"
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
              </label>
            )}
          />
          <loginForm.Field
            name="password"
            children={(field) => (
              <div>
                <label htmlFor="pwForm" className="text-lg">
                  Password<br />
                  <input
                    id="pwForm"
                    className="w-[15rem] h-10 border-1 rounded-sm ps-2 focus:outline-[.1rem]"
                    type="password"
                    name="pwForm"
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />
                </label>
              </div>
            )}
          />
          <Dialog.Close asChild>
            <button
              type="submit"
              onClick={loginForm.handleSubmit}
              className="text-white mx-1 bg-[#ec221f] rounded-sm px-6 py-3 text-lg cursor-pointer transition-colors hover:bg-[#c00f0c]"
            >
              Sign In
            </button>
          </Dialog.Close>
        </form>
      </Tabs.Content>
      <Tabs.Content
        className="grow rounded-b-md bg-white p-5 outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
        value="tab2"
      >
        <form
          className="flex flex-col gap-4 items-center"
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
        >
          <signForm.Field
            name="email"
            children={(field) => (
              <div>
                <label htmlFor="email" className="text-lg">
                  Email<br />
                  <input
                    id="email"
                    className="w-[16rem] h-10 border-1 rounded-sm ps-2 focus:outline-[.1rem]"
                    type="email"
                    name="email"
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />
                </label>
              </div>
            )}
          />
          <signForm.Field
            name="username"
            children={(field) => (
              <div>
                <label htmlFor="username" className="text-lg">
                  Username<br />
                  <input
                    id="username"
                    className="w-[16rem] h-10 border-1 rounded-sm ps-2 focus:outline-[.1rem]"
                    type="text"
                    name="username"
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />
                </label>
              </div>
            )}
          />
          <signForm.Field
            name="password"
            children={(field) => (
              <div>
                <label htmlFor="password" className="text-lg">
                  Password<br />
                  <input
                    id="password"
                    className="w-[16rem] h-10 border-1 rounded-sm ps-2 focus:outline-[.1rem]"
                    type="password"
                    name="password"
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />
                </label>
              </div>
            )}
          />
          <Dialog.Close asChild>
            <button
              type="submit"
              onClick={signForm.handleSubmit}
              className="w-[7rem] text-white mx-1 bg-[#ec221f] rounded-sm px-6 py-3 text-lg cursor-pointer transition-colors hover:bg-[#c00f0c]"
            >
              Sign Up
            </button>
          </Dialog.Close>
        </form>
      </Tabs.Content>
    </>
  );
}
