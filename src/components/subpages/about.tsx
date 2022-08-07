import React, { useState } from "react"
import { Container, Grid, Collapse } from "@material-ui/core"
const About = () => {
  const [skills, openSkills] = useState<boolean>(true)
  const [interests, openInterests] = useState<boolean>(true)
  return (
    <Container id="about" className="site__section">
      <h1>About Me</h1>
      <Grid container>
        <Grid item xs={12} md={6}>
          <div
            onClick={() => openSkills(!skills)}
            className="projects__collapse-header"
          >
            <h4>Skills</h4>
          </div>
          <Collapse in={skills}>
            <ul>
              <li>Go</li>
              <li>DynamoDB</li>
              <li>MongoDB</li>
              <li>SQL</li>
              <li>Docker</li>
              <li>Kubernetes</li>
              <li>Writing Documentation</li>
              <li>Breaking down and communicating complex ideas</li>
            </ul>
          </Collapse>
        </Grid>
        <Grid item xs={12} md={6}>
          <div
            onClick={() => openInterests(!interests)}
            className="projects__collapse-header"
          >
            <h4>Interests</h4>
          </div>
          <Collapse in={interests}>
            <ul>
              <li>Distributed Systems</li>
              <li>Functional Programming</li>
              <li>Hacking Productivity</li>
              <li>Classics (Greco-Roman)</li>
              <li>Theology</li>
              <li>Philosophy</li>
              <li>Video Games</li>
            </ul>
          </Collapse>
        </Grid>
      </Grid>
    </Container>
  )
}

export default About
