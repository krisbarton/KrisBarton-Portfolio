import Header from "./components/header"
import Hero from "./components/hero"
import Portfolio from "./components/portfolio"
import Technology from "./components/technology"
import About from "./components/about"
import Contact from "./components/contact"
import Footer from "./components/footer"

function App() {

  return (
    <>
      <Header />
      <main className="max-w-full">
        <Hero />
        <Portfolio />
        <Technology />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
