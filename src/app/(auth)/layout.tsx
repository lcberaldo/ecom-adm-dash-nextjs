import Aside from "../components/Aside";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body>
        <div className="flex">
          <Aside />

          <section className="w-full ">

            {children}
          </section>
        </div>
      </body>
    </html>
  );
}
