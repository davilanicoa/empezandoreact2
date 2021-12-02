import React,{ useEffect, useState} from 'react';
import Item from '../components/Item/Item';
import {Container,Row} from 'react-bootstrap';

function ItemList(){

    const Item = [
        { name: "Miami", price: 120000},
        { name: "Cancun", price: 100000},
        { name: "Orlando", price: 150000},
      ]

    return (
        <Container>
            <Row>
            {item && item.map((item,index)=>{
                return <Item key={index} id={item.name} image={item.imgUrl} price={item.price}/>

            })}

            </Row>


        </Container>


    )

}


