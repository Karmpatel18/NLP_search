import HeroCard from "./components/HeroCard"
import SearchBar from "./components/SearchBar"


function App() {
  

  return (
    <div className="flex flex-col min-h-screen w-full items-center bg-neutral-50 ">
      
        <SearchBar/>
        <div className="flex w-full mt-14 justify-center">
        <HeroCard/>
        </div>
    </div>
  )
}

export default App
