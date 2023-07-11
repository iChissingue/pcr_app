import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'


import Home from './Pages/Home.js'
import TemplateDefault from './Template/Default.js'


const App = () => {
  return (
    <TemplateDefault>
      <Router>
        <Routes>

          <Route path='/home' element={<Home/>}/>
    
        </Routes>  
      </Router>
    </TemplateDefault>
  );
}

export default App;
