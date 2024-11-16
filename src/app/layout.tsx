"use client";
import ConnectWalletButton from "@/components/ConnectWalletButton/ConnectWalletButton";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import ContextProvider from "@/context";
import { useAccount } from "wagmi";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ContextProvider>
          <LayoutWrapper>{children}</LayoutWrapper>
        </ContextProvider>
      </body>
    </html>
  );
}

function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const { isConnected, address } = useAccount();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: "black",
        color: "white",
      }}
    >
      <Navbar />
      {isConnected ? (
        <>
          <main style={{ flex: 1 }}>{children}</main>
          <Footer />
        </>
      ) : (
        <>
          <main style={{ flex: 1 }}>{children}</main>
          <ConnectWalletButton />
        </>
      )}
    </div>
  );
}
