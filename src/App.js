import Header from "./components/Header"
import Section1 from "./components/Section1"
import Category from "./components/Cateories"
import Data from "./components/Data"
import './App.css';


const nav = [
  { id: 1, name: "PORTFOLIO" },
  { id: 2, name: "BLOG" },
  { id: 3, name: "CV" },
  { id: 4, name: "STORE" },
  { id: 5, name: "FREELANCE" },
  { id: 6, name: "ABOUT ME" },
  { id: 7, name: "CONTACT" },
]



const category = [
  { id: 1, name: "All" },
  { id: 2, name: "UI Design" },
  { id: 3, name: "UX Design" },
  { id: 4, name: "Product" },
  { id: 5, name: "Design" },
  { id: 6, name: "Articles" },
  { id: 7, name: "Tutorials" },
  { id: 8, name: "News" }
]
function App() {
  return (
    <div className="App">
      <Header nav={nav} />

      <Section1 />

      <section className="two">
      <Category cat = {category}/>
      <Data />
      </section >

    </div >
  );
}

export default App;

