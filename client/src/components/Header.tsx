import { Dialog, DropdownMenu } from "radix-ui";
import React, { Dispatch } from "react";
import { IconContext } from "react-icons";
import {
  BiCog,
  BiFridge,
  BiHomeAlt2,
  BiPlusCircle,
  BiSearch,
  BiX,
} from "react-icons/bi";
import sazonLogoRed from "../assets/LogoRedBg.png";
import sazonLogoWhite from "../assets/LogoWhiteBg.png";
import IconBtn from "./IconBtn";
import "../styles/header.css";

export default function Header(
  { authStatus, setAuthStatus }: {
    authStatus: boolean;
    setAuthStatus: Dispatch<React.SetStateAction<boolean>>;
  },
) {
  if (authStatus) {
    return (
      <header className="authHeader">
        <a href="/">
          <img src={sazonLogoWhite} className="whiteLogo" alt="Sazon Logo" />
        </a>
        <SearchBar />
        <AuthHeaderBtns setAuthStatus={setAuthStatus} />
      </header>
    );
  } else {
    return (
      <header className="landingHeader">
        <div className="">
          <img src={sazonLogoRed} className="redLogo" alt="Sazon Logo" />
          <h1 className="tagline">
            Add some spice to<br /> your life with Sazon
          </h1>
        </div>
        <div />
        <div className="landingHeaderBtns">
          <button className="loginBtn">Log In</button>
          <button className="signBtn">Sign Up</button>
        </div>
      </header>
    );
  }
}

// AuthHeaderBtns is the header toolbar shown when a user is logged in
function AuthHeaderBtns(
  { setAuthStatus }: { setAuthStatus: Dispatch<React.SetStateAction<boolean>> },
) {
  return (
    <div className="authHeaderBtns">
      <IconContext.Provider value={{ color: "white" }}>
        <button className="authHeaderBtn">
          <BiHomeAlt2 />
        </button>
        <IconBtn
          Icon={BiFridge}
          btnDesc="Check your pantry"
          className={"authHeaderBtn"}
        />
        <CreateRecipe />
        <HeaderDropdown setAuthStatus={setAuthStatus} />
      </IconContext.Provider>
    </div>
  );
}

function CreateRecipe() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <IconBtn
          Icon={BiPlusCircle}
          btnDesc="Create a recipe"
          className={"authHeaderBtn"}
        />
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay />
        <Dialog.Content>
          <Dialog.Title>New Recipe</Dialog.Title>
          <Dialog.Description>
            Create a new recipe here. Separate ingredients by commas or spaces
            Click save when you're done.
          </Dialog.Description>
          <fieldset>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" />
          </fieldset>
          <fieldset>
            <label htmlFor="ingredients">Ingredients</label>
            <input type="text" id="ingredients" />
          </fieldset>
          <fieldset>
            <label htmlFor="description">Description</label>
            <input type="text" id="description" />
          </fieldset>
          <Dialog.Close asChild>
            <button>Save changes</button>
          </Dialog.Close>
          <Dialog.Close asChild>
            <button className="IconButton" aria-label="Close">
              <BiX />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

// Dropdown menu for Settings Dropdown in AuthHeaderBtns
function HeaderDropdown(
  { setAuthStatus }: { setAuthStatus: Dispatch<React.SetStateAction<boolean>> },
) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="authHeaderBtn" aria-label="Settings">
          <BiCog />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content>
          <DropdownMenu.Item>
            Settings
          </DropdownMenu.Item>
          <DropdownMenu.Item onClick={() => setAuthStatus(false)}>
            Log Out
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}

function SearchBar() {
  return (
    <div className="search">
      <IconContext.Provider value={{ color: "#49454F", size: "1.25rem" }}>
        <BiSearch />
      </IconContext.Provider>
      <input
        type="search"
        name="searchbar"
        id="searchbar"
        className="searchbar"
        placeholder="Search Recipes"
      />
    </div>
  );
}
