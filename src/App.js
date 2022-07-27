import './App.css';

import Header from "./components/Header/Header";
import Speakers from "./components/Speakers/Speakers";
import Intro from "./components/Intro/Intro"
import Footer from "./components/Footer/Footer"

function App() {


  return (
    <div className="App">
      <header>
        <Header/>
      </header>
 
      <main className="App-main">
        <div className="App-main__background"></div>
        <section className="App-intro">
          <Intro/>
        </section>
        <section className="App-speakers">
          <Speakers/>
        </section>
      </main>
      <footer className="App-footer">
        <div className="App-footer__background"></div>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
