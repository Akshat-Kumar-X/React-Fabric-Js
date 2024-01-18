import FabricCanvas from "./components/FabricCanvas";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
    <Navbar />
    <div className="pb-20 pt-7">
      <FabricCanvas />
    </div>
    </>
  );
}

export default App;
