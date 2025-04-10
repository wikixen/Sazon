import { Link } from "@tanstack/react-router";
import sazonLogoRed from "../../assets/LogoRedBg.png";
import sazonLogoWhite from "../../assets/LogoWhiteBg.png";
import { HeaderAuthBtns } from "./headerAuthBtns";
import { HeaderGuestBtns } from "./headerGuestBtns";
import { SearchBar } from "./searchBar";

export default function Header({ authStatus }: { authStatus: boolean }) {
  if (authStatus) {
    return (
      <header className="grid grid-cols-[auto_auto_auto] items-center justify-between mt-2 mx-4">
        <Link to="/home">
          <img src={sazonLogoWhite} className="w-36" alt="Sazon Logo" />
        </Link>
        <SearchBar />
        <HeaderAuthBtns />
      </header>
    );
  } else {
    return (
      <header className="grid grid-cols-[auto_1fr_auto] items-start justify-between bg-[#fd2727] text-white">
        <section>
          <Link to="/">
            <img src={sazonLogoRed} className="w-60 ms-2" alt="Sazon Logo" />
          </Link>
          <h1 className="ms-4 text-[3rem]">
            Add some spice to<br /> your life with Sazon
          </h1>
        </section>
        <div />
        <section>
          <HeaderGuestBtns />
        </section>
      </header>
    );
  }
}
