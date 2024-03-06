export function htmlDoc({ content, css }: { content: string; css: string }) {
  return `
  <!DOCTYPE html>
  <html lang="en-us">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Intyg Certificate</title>
    <script src="https://cdn.jsdelivr.net/npm/@unocss/runtime"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@unocss/reset/tailwind.min.css">
    <style>${css}</style>
  </head>
    <body>
      ${content}
    </body>
  </html>
  `;
}
