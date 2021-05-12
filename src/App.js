import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import Heder from './components/heder';

import Login from './pages/login';

const App = () => {
  

  return (
    <Router>
      <Heder/>
        <Login />
    </Router>
    
  );
};

export default App;