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
                I'm Charles Pustejovsky, a Go developer
            </p>
            <p>
                I love learning new things and collaborating with others.
            </p>
            <p>
                I love building software that is flexible and scalable, software that will last.
            </p>
        </Grid>
    </Grid>
)

export default Introduction
