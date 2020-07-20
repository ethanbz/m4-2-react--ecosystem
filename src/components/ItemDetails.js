import React from 'react';
import {
    useParams
} from 'react-router-dom'
import {items, sellers} from '../data'
import styled from 'styled-components'

const Grid = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    justify-content: center;
`

const ItemDetails = () => {
    const id = useParams().id
    const item = Object.values(items).find(item => item.name.toLowerCase().replace(' ', '-') === id)
    const stock = item.quantity === 0 ? 'out of stock' : `$${item.price} - Buy now`

    const imgStyle = {
        height: 300,
        borderRadius: 10,
    }
    const imgStyle2 = {
        height: 40,
        borderRadius: '50%',
        marginRight: 10
    }
    const infoStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginLeft: 40,
    }
    const buttonStyle = {
        height: 50,
        width: 220,
        borderRadius: 10,
        backgroundColor: 'purple',
        color: 'white',
        fontSize: 18,
        border: 'none'
    }
    return (
        <Grid>
            <img src={item.imageSrc} alt={item.name} style={imgStyle}/>
            <div style={infoStyle}>
                <div style={{fontSize: 28, fontWeight: 700}}>{item.name}</div>
                <div style={{margin: '-35px 0 0px', color: 'gray'}}>{item.latinName}</div>
                <div>{item.description}</div>
                <div style={{marginTop: -30}}>Product of <span style={{fontWeight: 800}}>{item.countryOfOrigin}</span></div>
                <button style={buttonStyle}>{stock}</button>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <img src={sellers[item.sellerId].avatarSrc} alt='seller' style={imgStyle2}/><span style={{}}>Sold by: 
                    <span style={{fontWeight: 700}}> {sellers[item.sellerId].storeName}</span></span>
                </div>
            </div>
        </Grid>
    )
}

export default ItemDetails