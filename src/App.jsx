import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import data from "./data"
import Card from "./components/Card"
//import convert from "./convert"

function App() {
  const cards = data.map(item => {
    //convert(item)
    item.assetImg = new URL(`./assets/cards/${item.coverImg}`, import.meta.url).href
    
    return (
        <Card
            key={item.id}
            {...item}
            
        />
    )
})  

  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards-list">
        {cards}
      </section>
    </div>
  )
}

export default App
