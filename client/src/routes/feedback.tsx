import { createFileRoute } from "@tanstack/react-router";
import { ContactForm } from "../components/footer/contactForm";

export const Route = createFileRoute("/feedback")({
  component: RouteComponent,
});

function RouteComponent() {
  return <ContactForm title="Have some suggestions, tell us below" />;
}
