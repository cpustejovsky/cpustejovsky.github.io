import React, {useState} from "react"
import {Collapse, Container, Grid} from "@material-ui/core"

const About = () => {
    const [skills, openSkills] = useState<boolean>(true)
    const [interests, openInterests] = useState<boolean>(true)
    return (
        <Container id="about" className="site__section">
            <h1>About Me</h1>
            <p>
                My journey towards becoming a developer begins my senior year of college.
                I had decided not to go to Seminary the next year. I had spent years preparing for it.
                I had studied and improved my interpersonal skills. Despite that work and time spent,
                I finally accepted that such a people-focused job would not be for me.
            </p>
            <p>
                I finished my liberal arts degree and looked into other career options.
                When I discovered programming, I fell in love.
                Since then, I have been on a lifelong journey of learning.
                I've taught myself every skill listed below.
                Just as importantly, I've learned the value of humility and collaboration on this journey.
            </p>
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
                            <li>Test-Driven Development</li>
                            <li>SQL</li>
                            <li>gRPC/Protobuf</li>
                            <li>Kafka</li>
                            <li>DynamoDB</li>
                            <li>Docker</li>
                            <li>Kubernetes</li>
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
                            <li>Classics (Greco-Roman)</li>
                            <li>History</li>
                            <li>Theology</li>
                            <li>Philosophy</li>
                            <li>Dungeons and Dragons</li>
                        </ul>
                    </Collapse>
                </Grid>
            </Grid>
        </Container>
    )
}

export default About
