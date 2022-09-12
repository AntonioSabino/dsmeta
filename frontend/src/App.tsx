import Header from "./components/Header";
import SalesCard from "./components/SalesCard";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <section id="sales" className="main-container">
          <SalesCard />
        </section>
      </main>
    </>
  )
}
