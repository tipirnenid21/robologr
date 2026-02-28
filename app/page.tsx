import fs from "fs";
import path from "path";
import ClientEffects from "../components/ClientEffects";

export default function Page() {
  const filePath = path.join(process.cwd(), "app", "claude-body.html");
  const html = fs.readFileSync(filePath, "utf8");

  return (
    <>
      <ClientEffects />
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}