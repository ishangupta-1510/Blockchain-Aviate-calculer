import './App.css';
import Header from './screens/Header';
import Intro from './screens/Intro';
import First from './screens/First';
import Converter from './screens/Converter'
import Graph from './screens/Graph';
function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <First />
      <Converter />
    </div>
  );
}

export default App;
