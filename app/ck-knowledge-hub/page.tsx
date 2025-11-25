import type { Metadata } from "next"
import CKKnowledgeHubClientPage from "./client-page"

export const metadata: Metadata = {
  title: "CK Knowledge Hub | Agricultural Resources & Education",
  description:
    "Access comprehensive agricultural resources, research articles, guides, and educational content to enhance your farming practices and crop management skills.",
}

export default function CKKnowledgeHubPage() {
  return <CKKnowledgeHubClientPage />
}
