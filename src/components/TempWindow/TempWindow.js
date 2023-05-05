import {useEffect, useState} from 'react';
import useFetchData from '../../services/services';
import SelectCityInput from '../SelectCityInput/SelectCityInput';
import GrowExample from '../Spinner/Spinner';
import 'bootstrap/dist/css/bootstrap.min.css';
import './TempWindow.css'


function TempWindow(props) {
    const [data, setData] = useState(null)
    const [city, setCity] = useState()
    const {weatherData} = useFetchData()

    function valueFromInput(value) {
        setCity(value)
    }
    
    useEffect(() => {
        weatherData(setData, city)
    }, [city])
    
    return (
    <>
        <SelectCityInput onSelectChange={valueFromInput}/>
        {data === null ? <GrowExample/> : <p>Temperature in {data.data.location.name} - {data.data.current.temp_c}°C</p>}
    </>
    )
}

export default TempWindow