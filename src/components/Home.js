import React from 'react'
import styled from "styled-components"
import Section from './Section'
function Home() {
    return (
        <Container>
            <Section image = {require("./images/model-3.jpg")} title="Model 3" description="Order Online for touchless delivery"/>
            <Section image =  {require("./images/model-x.jpg")} title="Model X"  description="Order Online for touchless delivery"/>
            <Section image = {require("./images/model-s.jpg")} title="Model S"  description="Order Online for touchless delivery"/>
            <Section image = {require("./images/model-y.jpg")} title="Model Y"  description="Order Online for touchless delivery"/>
            <Section image = {require("./images/solar-panel.jpg")} title="Solar Panels" description="Lowest cost Solar Panels in India"/>
            <Section image = {require("./images/solar-roof.jpg")} title="Solar Roof" description="produce clean energy from house"/>

        </Container>
    )
}

export default Home

const Container = styled.div`
  height:100vh;
  width:100vw;
`