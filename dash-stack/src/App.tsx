import { Routes, Route } from "react-router"
import Layout from "./layout/layout";
import Homepage from "./content/Homepage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route index element={<Homepage/>}/>
        <Route path="/about" element={<h1>About</h1>}/>
      </Routes>
    </Layout>
  )
};

export default App;
