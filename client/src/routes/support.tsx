import { createFileRoute } from '@tanstack/react-router'
import ContactForm from '../components/ContactForm';
import "../styles/contact.css"

export const Route = createFileRoute('/support')({
  component: RouteComponent,
})

function RouteComponent() {
  return <ContactForm subjectDesc="Need Help Send a Message to Our Support Staff" />;
}
