import { Canvas } from "@react-three/fiber";
import "./App.css";
import Configurator from "./components/Configurator";
import Experience from "./components/Experience";
import { CustomizationProvider } from "./Context/Customization";
import { XR, VRButton, ARButton } from "@react-three/xr";
function App() {
  return (
    <CustomizationProvider>
    <div className="App">
    <ARButton/>
      <Canvas dpr={[1, 2]} shadows camera={{ position: [0, 0, 3], fov: 50 }}>
      <XR>
      <pointLight position={[10, 20, 100]} intensity={.5}/>
      <color attach="background" args={['#000000']} />
      <fog attach="fog" args={['#000000', 10, 20]} />     
        <Experience />
        </XR>
      </Canvas>
      <Configurator/>
    </div>
    </CustomizationProvider>
  );
}
export default App;
