import { createFileRoute } from "@tanstack/react-router";
import { ContactForm } from "../components/footer/contactForm";

export const Route = createFileRoute("/support")({
  component: RouteComponent,
});

function RouteComponent() {
  return <ContactForm title="Need Help, Message Our Staff" />;
}
