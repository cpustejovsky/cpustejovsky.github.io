import React from "react"
import { Grid } from "@material-ui/core"
import Cpustejovsky from "../images/cpustejovsky"

const Introduction = () => (
    <Grid container className="introduction">
      <Grid item xs={12} sm={5}>
        <Cpustejovsky/>
      </Grid>
      <Grid item className="padding-top" xs={12} sm={7}>
        <h3>Howdy!</h3>
        <p>I'm Charles Pustejovsky.</p>
        <p>
          Some things you're good at. Some things are good for you.
        </p>
        <p>
          For me, programming is both. That's why I love it.
        </p>
        <p>
          It's why I love Go, TDD, and SDLC methodologies.
        </p>
        <p>
          They all can help me to better provide value to my team and my organization.
        </p>
      </Grid>
    </Grid>
)

export default Introduction
