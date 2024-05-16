import React from "react";
import { Products, Banner, NavBar, SubNav, BannerHead, Remarks, Process, ProductHead, ProductSample, SocialHandle, Features, Footer } from "./Components/Molecule";
import styled from "styled-components";



export const GenStyle = styled.div`
display: ${props => props.Display};
border:${props => props.Boder};
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
gap: ${props => props.Gap};
font-size : ${props => props.FontSize};
font-weight: ${props => props.FontWeight};

`

function App() {

  return (
    <div>
      <NavBar />
      <SubNav />
      <BannerHead />
      <Banner />
      <Process />
      <ProductHead />
      <Products />
      <ProductSample />
      <SocialHandle />
      <Remarks />
      <Features />
      <Footer />
    </div>
  )
}

export default App
