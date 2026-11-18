import Header from "@/components/Header";
import ComingSoon from "@/components/ComingSoon";
import Ticker from "@/components/Ticker";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <ComingSoon />
        <Ticker />
      </main>
      <Footer />
    </>
  );
}
