import React, { useEffect, useState } from 'react';
import useFetchData from '../../services/services';

import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Spinner from 'react-bootstrap/esm/Spinner';

const Forecast = () => {
    const {forecastFetchData} = useFetchData()

    const [dataForecastWeather, setDataForecastWeather] = useState(null)

    useEffect(() => {
        forecastFetchData(setDataForecastWeather)
    },[])

    console.log(dataForecastWeather)

    return (
         <>
            {dataForecastWeather === null ? <Spinner/> : <>
                {dataForecastWeather.data.forecast.forecastday.map((elem) =>  { 
                    return <>
                    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                    <Col sm={3}>
                        <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                            <Nav.Link eventKey="first">{elem.date}</Nav.Link>
                        </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <p>{`Maximum day tempreture is - ${elem.day.maxtemp_c}, minimum temperature is - ${elem.day.mintemp_c}`}</p>
                        </Tab.Pane>
                        </Tab.Content>
                    </Col>
                    </Row>
                </Tab.Container>
                </>
        })}
                </>}
         </>
      );
};

export default Forecast;