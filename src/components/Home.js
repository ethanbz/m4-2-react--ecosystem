import React from 'react';
import {
    BrowserRouter as Router,
    Switch, Route, Link
} from 'react-router-dom'
import styled from 'styled-components'
import {items} from '../data'
import ListingGrid from './ListingGrid'

const Home = () => {
    const weight = {
        fontWeight: 900,
        marginTop: 20,
    }
    return (
        <div>
            <div>Fruit emporium sells the finest fruits from this world and beyond.</div>
            <div style={weight}>Browse items:</div>
            <ListingGrid items={Object.values(items)} />
        </div>
    )
}

export default Home