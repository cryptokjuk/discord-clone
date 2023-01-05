import "../styles/globals.css";
import "remixicon/fonts/remixicon.css";

import ProvidersWrapper from "./ProvidersWrapper";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />

      <body>
       {children}
      </body>
    </html>
  );
}
