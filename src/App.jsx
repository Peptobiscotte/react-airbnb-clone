import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import data from "./data"
import Card from "./components/Card"


function App() {
  const cards = data.map(item => {
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
