import "./Footer.css";

interface FooterList {
  title: string;
  footerItem: FooterItem[];
}

interface FooterItem {
  text: string;
  hyperlink: string | undefined;
}

function FooterListItem({ items }: { items: FooterList }) {
  return (
    <div className="footerItemContainer">
      <ul className="footerList">
        <h3 className="footerItemTitle">{items.title}</h3>
        {items.footerItem.map((item) =>
          // Replace a link with correct React syntax
          item.hyperlink
            ? (
              <a href={item.hyperlink} className="footerLink">
                <li className="footerItem">
                  {item.text}
                </li>
              </a>
            )
            : <li className="footerItem">{item.text}</li>
        )}
      </ul>
    </div>
  );
}

export default function Footer() {
  const aboutItems: FooterList = {
    title: "About",
    footerItem: [
      {
        text: "Learn More",
        hyperlink: "/about",
      },
    ],
  };

  const contactItems: FooterList = {
    title: "Contact",
    footerItem: [
      {
        text: "Support",
        hyperlink: "/contact",
      },
      {
        text: "Feedback",
        hyperlink: "/feedback",
      },
    ],
  };

  return (
    <footer>
      <div className="footerListsPlural">
        <FooterListItem items={aboutItems} />
        <FooterListItem items={contactItems} />
      </div>
      <div />
      <p className="copyrightFooter">&copy; 2024 Sazon</p>
    </footer>
  );
}
