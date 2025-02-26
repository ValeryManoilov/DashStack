import { Routes, Route } from "react-router"
import Layout from "./layout/layout";
import Homepage from "./homepage/Homepage";
import { observer } from "mobx-react";
import { useContext, useState } from "react";
import React from "react";


export const AsideContext = React.createContext(false);

const App = observer(() => {
  const [isAside, setIsAside] = useState(false)

  const setAside = () => {
    setIsAside(!isAside)
  }

  return (
    <AsideContext.Provider value={{ isAside, setAside }}>
      <Layout>
        <Routes>
          <Route index element={<Homepage/>}/>
          <Route path="/about" element={<h1>About</h1>}/>
        </Routes>
      </Layout>
    </AsideContext.Provider>
  )
})

export default App;
