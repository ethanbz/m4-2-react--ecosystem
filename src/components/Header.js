import React from 'react';
import {
    BrowserRouter as Router,
    Switch, Route, NavLink
} from 'react-router-dom'
import styled from 'styled-components'

const Title = styled.h1`
    font-weight: 900;
    display: inline-block;
`
const Links = styled.div`
    position: absolute;
    display: inline-block;
    right: 0;
    top: 35px;
`
const Header = () => {
    const padding = {
        padding: 5,
        marginLeft: 20,
        textDecoration: 'none',
    }
    const activeStyle = {
        color: 'red',
        borderBottom: '3px solid red',
    }
    return (
    <div style={{marginBottom: 30}}>
        <Title>Fruit Emporium</Title>
        <Links>
            <NavLink exact to='/' style={padding} activeStyle={activeStyle}>Home</NavLink>
            <NavLink to='/about' style={padding} activeStyle={activeStyle}>About</NavLink>
        </Links>
    </div>
    )
}

export default Header