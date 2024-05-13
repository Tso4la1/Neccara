import React from "react";
import { Banner, NavBar, SubNav, BannerHead, Process } from "./Components/Molecule";
import styled from "styled-components";


export const GenStyle = styled.div`
display: ${props => props.Display};
justify-content:${props => props.JustifyContent};
width:${props => props.Width};
height:${props => props.Height};
float: ${props => props.Float};
background-color:${props => props.BackgroundColour};
align-items: ${props => props.AlignItems};
line-height: ${props => props.LineHeight};
flex-direction:${props => props.FlexDirection};
color : ${props => props.Color};
margin: ${props => props.Margin};
padding: ${props => props.Padding};
transform: ${props => props.Transform};
gap: ${props => props.Gap}


`

function App() {

  return (
    <div>
      <NavBar />
      <SubNav />
      <BannerHead />
      <Banner />
      <Process />
    </div>
  )
}

export default App
