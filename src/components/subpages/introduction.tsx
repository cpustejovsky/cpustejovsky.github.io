// @ts-ignore
import React from "react"
import {Grid} from "@material-ui/core"
import Cpustejovsky from "../images/cpustejovsky"

const Introduction = () => (
    <Grid container className="introduction">
        <Grid item xs={12} sm={5}>
            <Cpustejovsky/>
        </Grid>
        <Grid item className="padding-top" xs={12} sm={7}>
            <h3>Howdy!</h3>
            <p>
                I'm Charles Pustejovsky.
            </p>
            <p>
                I'm a software engineer who is passionate about providing value with programming.
            </p>
            <p>
                I use Go, Test-Driven Development
                and SDLC methodologies to do this.
            </p>
            <p>
                I focus on empathy, continuing education, and skills improvement.
            </p>
        </Grid>
    </Grid>
)

export default Introduction
