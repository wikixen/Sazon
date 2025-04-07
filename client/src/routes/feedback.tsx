import { createFileRoute } from "@tanstack/react-router";
import ContactForm from "../components/ContactForm";

export const Route = createFileRoute("/feedback")({
  component: RouteComponent,
});

function RouteComponent() {
  return <ContactForm subjectDesc="Have some Feedback?" />;
}
