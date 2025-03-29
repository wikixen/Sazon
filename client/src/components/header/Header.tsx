import { Dispatch } from "react";
import "./Header.css";
import { IconContext } from "react-icons";
import { BiHomeAlt2, BiPlusCircle, BiSearch } from "react-icons/bi";
import sazonLogoWhite from "../../assets/LogoWhiteBg.png";
import sazonLogoRed from "../../assets/LogoRedBg.png";

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

function AuthHeaderBtns(
  { setAuthStatus }: { setAuthStatus: Dispatch<React.SetStateAction<boolean>> },
) {
  return (
    <div className="authHeaderBtns">
      <IconContext.Provider value={{ color: "white" }}>
        <button className="authHeaderBtn">
          <BiHomeAlt2 />
        </button>
        <button className="authHeaderBtn">
          <BiPlusCircle />
        </button>
        <button className="authHeaderBtn" onClick={() => setAuthStatus(false)}>
          Log Out
        </button>
      </IconContext.Provider>
    </div>
  );
}

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
