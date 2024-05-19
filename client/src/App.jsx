import Home from "./components/home/Home";
import {Routes, Route} from 'react-router-dom'
import FormSuccessfullySubmitted from "./components/form_Successfully_Submitted/FormSuccessfullySubmitted";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/form_successfully_submitted" element={<FormSuccessfullySubmitted/>}/>
    </Routes>
  )
}

export default App;
