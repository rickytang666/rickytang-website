import { redirect } from "next/navigation";
import { externalLinks } from "@/data/links";

export default function InstagramRedirect() {
  redirect(externalLinks.instagram);
}
