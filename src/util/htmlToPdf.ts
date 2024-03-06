import { chromium } from "playwright";
import { renderToString } from "react-dom/server";
import { PageHeader } from "../components/PageHeader";
import { MetaData } from "../types/certificate.types";

export async function htmlToPdf(content: string, metadata: MetaData) {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  page.setContent(content);
  await page.waitForLoadState("networkidle");
  const result = await page.pdf({
    printBackground: true,
    displayHeaderFooter: true,
    tagged: true,
    format: "A4",
    headerTemplate: renderToString(PageHeader(metadata)),
  });
  browser.close();
  return result;
}
