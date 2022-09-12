import Header from "./components/Header";
import SalesCard from "./components/SalesCard";

export default function App() {
  return (
    <>
      <Header />
      <main className="main-container">
        <section id="sales">
          <SalesCard />
        </section>
      </main>
    </>
  )
}
