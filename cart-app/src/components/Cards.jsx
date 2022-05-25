import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
import { useDispatch } from 'react-redux';
import { ADD } from '../Redux/Action/Action';
import CardsData from './CardsData';

function Cards() {
    const [data,setData] = useState(CardsData);
    //console.log(data)

    const Dispatch = useDispatch ()

    const send =(e)=>{
      //console.log(e)
      Dispatch(ADD(e))
    }
  return (
    <div className='container mt-3'>
        <h2>Add to cart project</h2>
        <div className='row d-flex justify-content-center align-items-center'>
            {
                data.map((element,id)=>{
                    return(
                        <>
                            <Card style={{ width: '22rem',border:"none" }} className="mx-2 mt-4 card_style" >
                              <Card.Img variant="top" src={element.imgdata} style={{height:"16rem",}} className="mt-3"/>
                               <Card.Body>
                                <Card.Title>{element.rname}</Card.Title>
                                <Card.Text>
                                 price : ₹ {element.price}
                                </Card.Text>
                                <div className='button_div d_flex justify-content-center'>
                                 <Button variant="primary" className='col-lg-12'onClick={()=>send(element)}>Add to cart</Button>
                                </div>
                              
                              </Card.Body>
                            </Card>
                        </>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Cards;