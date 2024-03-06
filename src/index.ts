import { readFileSync } from "fs";
import { createServer } from "http";
import { renderToString } from "react-dom/server";
import { CertificateView } from "./components/CertificateView";
import { Certificate } from "./types/certificate.types";
import { htmlDoc } from "./util/htmlDoc";
import { htmlToPdf } from "./util/htmlToPdf";

const data = JSON.parse(
  readFileSync("./certificate/lisjp.json", "utf8")
) as Certificate;

const html = (async function () {
  const css = readFileSync("./assets/print.css", "utf8");
  return htmlDoc({
    content: renderToString(CertificateView(data)),
    css,
  });
})();

const server = createServer(async (req, res) => {
  if (req.url === "/pdf") {
    const pdf = await htmlToPdf(await html, data.metadata);
    res.setHeader("Content-Type", "application/pdf");
    return res.end(pdf);
  }

  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.end(await html);
});

const PORT = 8000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
