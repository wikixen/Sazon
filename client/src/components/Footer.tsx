import { Link } from "@tanstack/react-router";

interface FooterList {
  title: string;
  footerItem: FooterItem[];
}

interface FooterItem {
  text: string;
  hyperlink: string | undefined;
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
        hyperlink: "/support",
      },
      {
        text: "Feedback",
        hyperlink: "/feedback",
      },
    ],
  };

  return (
    <footer className="grid grid-cols-[auto_1fr_auto] items-end border-t-1 mx-4 h-auto">
      <section className="flex gap-4">
        <FooterListItem items={aboutItems} />
        <FooterListItem items={contactItems} />
      </section>
      <div />
      <p>&copy; 2024 Sazon</p>
    </footer>
  );
}

function FooterListItem({ items }: { items: FooterList }) {
  return (
    <article>
      <ul className="list-none">
        <h3 className="font-bold">{items.title}</h3>
        {items.footerItem.map((item) => (
          <Link
            to={item.hyperlink}
            className="no-underline hover:underline hover:text-gray-400"
          >
            <li className="footerItem">
              {item.text}
            </li>
          </Link>
        ))}
      </ul>
    </article>
  );
}
