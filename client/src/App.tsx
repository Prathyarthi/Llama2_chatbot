import { BrowserRouter, Route, Routes } from "react-router-dom"
import { InputBox } from "./components/InputBox"


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<InputBox />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
