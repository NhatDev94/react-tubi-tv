import './App.css';
import Hero from './componet/Hero.js';
import Header from './componet/Header.js';
import Topic from './componet/Topic.js';

import { films } from './componet/data.js';

function App() {

  return (
    <div className="App">
      <Hero />
      <Header />
      <Topic title={'Action'} films={films.filter(item => item.type.indexOf('Action') > -1)} />
      <Topic title={'Comedy'} films={films.filter(item => item.type.indexOf('Comedy') > -1)} />

    </div>
  );
}

export default App;
