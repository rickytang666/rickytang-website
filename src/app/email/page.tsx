import { redirect } from "next/navigation";
import { externalLinks } from "@/data/links";

export default function EmailRedirect() {
  redirect(externalLinks.email);
}
