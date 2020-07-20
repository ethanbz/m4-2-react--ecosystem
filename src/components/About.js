import React from 'react';
import {
    BrowserRouter as Router,
    Switch, Route, Link
} from 'react-router-dom'
import styled from 'styled-components'

const About = () => {
    const weight = {
        fontWeight: 800
    }
    return (
        <div>
            <div>Fruit emporium is founded on a very simple principle: <span style={weight}>Fruit is good.</span><br/><br/>We carry the finest selection of produce from around the world, from tart citrus to sweet cherries. Our sellers are world-class, and your fruit is guaranteed to be worthy of auction in Asian markets.</div>
        </div>
    )
}

export default About