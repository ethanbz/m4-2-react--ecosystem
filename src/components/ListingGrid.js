import React from 'react';
import {
    BrowserRouter as Router,
    Switch, Route, Link
} from 'react-router-dom'
import styled from 'styled-components'

const Grid = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`

const ListingGrid = ({ items }) => {
    const imgStyle = {
        height: 150,
        borderRadius: 10,
    }
    const itemStyle = {
        margin: 30,
        fontWeight: 800,
        textDecoration: 'none',
    }
    return (
        <Grid>
            {items.map(item => {
                return <div style={itemStyle}>
                    <Link to={`/item/${item.name.toLowerCase().replace(' ', '-')}`} style={{textDecoration: 'none'}}>
                    <img alt={item.name} src={item.imageSrc} style={imgStyle}/>
                    <div >{item.name}</div>
                    <div style={{fontSize: 12}}>{item.latinName}</div>
                    </Link>
                </div>
            })}
        </Grid>
    )
}

export default ListingGrid