import type { Metadata } from "next"
import ContactUsClient from "./ContactUsClient"

export const metadata: Metadata = {
  title: "Contact Us | CK - Complete Krop",
  description:
    "Get in touch with CK to discuss how we can help you achieve better agricultural results. Contact our team for support and inquiries.",
}

export default function ContactUsPage() {
  return <ContactUsClient />
}
