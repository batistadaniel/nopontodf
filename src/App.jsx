import MapView from "./components/MapView";
import NavBar from "./components/NavBar";

function App() {
  return (
    // wrapper: dá espaço para a barra inferior (pb-16) em mobile
    // e espaço à esquerda (pl-24) em md+ quando a sidebar estiver fixa
    <div className="min-h-screen bg-gray-100">
      <NavBar />

      {/* main deve respeitar a barra bottom em mobile e a sidebar em md+ */}
      <main className="min-h-screen md:pl-24 pb-16 md:pb-0">
        <MapView />
      </main>
    </div>
  );
}

export default App;