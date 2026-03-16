import { I18nProvider } from "./i18n/index.tsx";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./sections/About";
import Bio from "./sections/Bio";
import Hero from "./sections/Hero";
import Works from "./sections/Works";
import Research from "./sections/Research";
import Skills from "./sections/Skills";

function App() {
  return (
    <I18nProvider>
      <div className="App">
        <Header />
        <main>
          <Hero />
          <About />
          <Research />
          <Works />
          <Skills />
          <Bio />
          <div className="h-6" />
        </main>
        <Footer />
      </div>
    </I18nProvider>
  );
}

export default App;
