import { useState, useEffect } from 'react';

import Carousel from 'react-bootstrap/Carousel';
import belrinImage from '../Carousel/imgCarousel/berlin.jpeg'
import parisImage from '../Carousel/imgCarousel/Paris.jpg'
import pragaImage from '../Carousel/imgCarousel/praga.jpeg'
import useFetchData from '../../services/services';

import './Carousel.css'
import Spinner from 'react-bootstrap/esm/Spinner';

function CarouselCities() {
  const {weatherData} = useFetchData()
  const [dataBerlin, setDataBerlin] = useState(null)
  const [dataParis, setDataParis] = useState(null)
  const [dataPrague, setDataPrague] = useState(null)
  const [berlin] = useState('Berlin')
  const [prague] = useState('Prague')
  const [paris] = useState('Paris')

  useEffect(() => {
    weatherData(setDataBerlin, berlin)
  }, [berlin])

  useEffect(() => {
    weatherData(setDataParis, paris)
  }, [paris])

  useEffect(() => {
    weatherData(setDataPrague, prague)
  }, [prague])

  return (
    <Carousel interval={50000}>
      <Carousel.Item>
        <img
          className="first"
          src={belrinImage}
          alt="First slide"
        />
        <Carousel.Caption>
          {dataBerlin === null ? <Spinner/> :<h3>Temperature in {berlin} is - {dataBerlin.data.current.temp_c}°C</h3>}
          {dataBerlin === null ? <Spinner/> :<p>{dataBerlin.data.current.condition.text}, temperature feels like {dataBerlin.data.current.feelslike_c}°C</p>}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="second"
          src={parisImage}
          alt="Second slide"
        />

        <Carousel.Caption >
          {dataParis === null ? <Spinner/> :<h3>Temperature in {paris} is - {dataParis.data.current.temp_c}°C</h3>}
          {dataParis === null ? <Spinner/> :<p>{dataParis.data.current.condition.text}, temperature feels like {dataParis.data.current.feelslike_c}°C</p>}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="third"
          src={pragaImage}
          alt="Third slide"
        />

        <Carousel.Caption>
          {dataPrague === null ? <Spinner/> :<h3>Temperature in {prague} is - {dataPrague.data.current.temp_c}°C</h3>}
          {dataPrague === null ? <Spinner/> :<p>{dataPrague.data.current.condition.text}, temperature feels like {dataParis.data.current.feelslike_c}°C</p>}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselCities;