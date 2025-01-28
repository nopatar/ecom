import Providers from "./Providers"
import Navbar from "@/components/Navbar/Navbar"

const RootLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return <>
  <Providers>
    <Navbar />
    <main className="container">
      {children}
    </main>
  </Providers>
 </>
}

export default RootLayout
