import React from 'react'
import { Col, Container, Row } from 'reactstrap';
import clientdata1 from '../clientdata1';
import clientdata2 from '../clientdata2';
import CommonComponent from './CommonComponent';


const ClientComponent = () => {
  return (
    <div id='client'>
    <Container className='mt-5'>
        <div className='client-heading'><CommonComponent textAlign = {'center'} flexDirection={'center'} height1={'7px'} height2={'2px'} width1={'95px'} width2={'200px'} text={'OUR CLIENTS'} /></div>
        <Row className='row-1'>
        {
            clientdata1.map(item=>(
                <Col key={item.index} className='my-auto'  >
                    <img src={item.img} className='client-images' />
                </Col>
            ))
        }

        </Row>
        <Row className='g-sm-4 g-lg-3 g-md-4 mt-3 '>
        {
            clientdata2.map(item=>(
                <Col key={item.index} className='my-auto mt-4' xxl='3' lg='6' md='6' sm='12' g-sm-2>
                    <img src={item.img} className='client-images' />
                </Col>
            ))
            
        }
        </Row>
    </Container>
      
    </div>
  )
}

export default ClientComponent
