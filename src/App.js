import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import Members from './Pages/Members.js'
import MemberProfile from './Pages/MemberProfile.js'
import Home from './Pages/Home.js'
import TemplateDefault from './Template/Default.js'


const App = () => {
  return (
    
      <Router>
        <TemplateDefault>
          <Routes>

            <Route path='/home' element={<Home/>}/>
            <Route path='/memberprofile/*' element={<MemberProfile/>}/>
            <Route path='/members' element={<Members/>}/>
      
          </Routes>  
        </TemplateDefault>
      </Router>
    
  );
}

export default App;
