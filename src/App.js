import './App.css';
import TempWindow from './components/TempWindow/TempWindow';
import CarouselCities from './components/Carousel/Carousel';
import Forecast from './components/Forecast/Forecast';


function App() {

  return (
    <div className="App">
      <div>
        <TempWindow/>
        <Forecast/>
        <CarouselCities/>
        <Forecast/>
      </div>
    </div>
  );
}

export default App;
