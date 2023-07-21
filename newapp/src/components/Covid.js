import React, { useEffect } from 'react'
import { FcPlus } from "react-icons/fc";
import './Covid.css'
import { useState } from 'react';
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';


const Covid = () => {
 const [data,setData] = useState([])
const getCovidData = async()=>{
    try {
        const res  =  await fetch('https://data.covid19india.org/v4/min/data.min.json');
        const ActualData = await res.json();
        // console.log(ActualData);
        setData(ActualData.MP.districts.Sagar.meta)
        // setData(ActualData.AN.delta)
    
    }catch (error) {
        console.log(error)
    }
}

useEffect(()=>{
    getCovidData();
},[])
  return (
    <> 
        <section>  
        <div className='container'>
        <h1><FcPlus/>LIVE</h1>
        <h2>COVID-19 CORONAVIRUS TRACKER</h2>
        </div>


        {/* <div id="container1">
        <div id="lineLeft">
        <div id="boxOne">Our Country India</div> */}
        {/* <div id="boxTwo">box two</div> */}
        {/* </div>
        <div id="lineRight"> */}
        {/* <div id="image">image</div> */}
        {/* </div>
        <div class="clear"></div>
        </div> */}

        {/* <div id="container2">
        <div id="lineRight">
        <div id="boxOne">Total </div> */}
        {/* <div id="boxTwo">box two</div> */}
        {/* </div>
        <div id="lineLeft"> */}
        {/* <div id="image">image</div> */}
        {/* </div>
        <div class="clear"></div>
        </div> */}




        {/* <Card style={{ width: '18rem' }}> */}
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        
        {/* <Card.Body className='pp'>
        <Card.Title className='jj' ><h1>Our</h1> country</Card.Title>
        <Card.Title>India</Card.Title> 
        <Card.Text>
         
        </Card.Text> */}
        {/* <Button variant="primary"></Button> */}
      {/* </Card.Body> */}
    {/* </Card> */}

        <ul className='gi'>
            <li className='card'>
                <div className='card_main'>
                    <div className='card_inner'>
                        <p className='card_name'><span>OUR</span>COUNTRY POPULATION</p>
                        <p className='card_total card_small'>{data.population}</p>
                        
                    </div>

                </div>
            </li>
            <li className='card'>
                <div className='card_main'>
                    <div className='card_inner'>
                        <p className='card_name'><span>TOTAL</span>Tested</p>
                        <p className='card_total card_small'>{}</p>
                        
                    </div>

                </div>
            </li>
            <li className='card'>
                <div className='card_main'>
                    <div className='card_inner'>
                        <p className='card_name'><span>TOTAL</span>vaccinated</p>
                        <p className='card_total card_small'>{}</p>
                        
                    </div>

                </div>
            </li>
            <li className='card'>
                <div className='card_main'>
                    <div className='card_inner'>
                        <p className='card_name'><span>TOTAL</span>DEATH</p>
                        <p className='card_total card_small'>INDIA</p>
                        
                    </div>

                </div>
            </li>
            <li className='card'>
                <div className='card_main'>
                    <div className='card_inner'>
                        <p className='card_name'><span>TOTAL</span>DEATH</p>
                        <p className='card_total card_small'>INDIA</p>
                        
                    </div>

                </div>
            </li>
            <li className='card'>
                <div className='card_main'>
                    <div className='card_inner'>
                        <p className='card_name'><span>LAST</span>UPDATE</p>
                        <p className='card_total card_small'>INDIA</p>
                        
                    </div>

                </div>
            </li>
        </ul>
        </section>
     </>
  )
}

export default Covid