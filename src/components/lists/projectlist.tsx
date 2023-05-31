// @ts-ignore
import React from "react"
import {Grid} from "@material-ui/core"
import BlogOriginal from "../images/blog_original"
import BlogRefresh from "../images/blog_refresh"
import BlogHeadlessCMS from "../images/blog_headless_cms"

type Links = {
    text: string,
    link: string
}

type Project = {
    name: string,
    title: string,
    languages: string,
    content: (string | JSX.Element)[],
    links: Links[],
    current: boolean
}

const franz: Project = {
    name: "franz",
    title: "Franz (Kafka Wrapper)",
    languages: "Go",
    content: [
        <p>I've spent a lot of time with Kafka or at least enough to know how difficult it can be to use.</p>,
        <p>My ultimate goal with this project is to provide code wrappers for Kafka producers and consumers that can be
            easily configured and extended to different applications.</p>,
    ],
    links: [
        {
            text:
                "Code",
            link: "https://github.com/cpustejovsky/franz",
        }
    ],
    current: true
}

const customSortGo: Project = {
    name: "customSortGo",
    title: "CS:GO (Custom Sort: Go)",
    languages: "Go",
    content: [
        <p>Frustrated with some whiteboard interviews I encountered, I decided to start making a repo to collect code
            that sorts data.</p>,
        <p>This allowed me to learn how to set up benchmark tests to compare algorithm speeds.</p>,
        <p>This repo is also where I first appreciated a need for generics and began including them in my code.</p>,
        <p>I'm open to PRs and Issues with ideas and other recipes for different kinds of sorting</p>
    ],
    links: [
        {
            text:
                "Code",
            link: "https://github.com/cpustejovsky/customsortgo",
        }
    ],
    current: true
}


const twitterBot: Project = {
    name: "twitterBot",
    title: "Twitter Bot",
    languages: "Go",
    content: [
        <p>My first Go application, this Twitter bot gave me less
            reasons to check Twitter (before Twitter's decline in 2023) by sending me updates from
            people I want to keep up with.</p>,
        <p>Since then, with the help of the amazing people on the{" "}
            <a
                rel="noreferrer noopener"
                target="_blank"
                href="https://gophers.slack.com/"
            >Gophers Slack Channel</a>, I was able to refactor it to better use Go's concurrency primitives (goroutines
            and channels).
        </p>
    ],
    links: [
        {
            text:
                "Code",
            link: "https://github.com/cpustejovsky/twitterbot",
        },
    ],
    current: true
}

const lifeTogetherCalculator: Project = {
    name: "lifeTogetherCalculator",
    title: "Life Together Calculator",
    languages: "React/TypeScript",
    content: [
        <p>
            The first application I created which calculated how long my wife
            and I had known each other and showed what percentage of our lives
            that was. It gave me hands on experience with working with the DOM
            and JavaScript's Date Object.
        </p>,
        <p>
            I then made it interactive so anyone with a significant other can
            calculate their life together.
        </p>,
        <p>
            Most recently, I've rebuilt the app in React and allowed it to
            calculate any kind of friendship or personal relationship.
        </p>
    ],
    links: [
        {
            text:
                "Calculator",
            link: "https://life-together-calculator-1992.web.app/",
        },
        {
            text:
                "Code",
            link: "https://github.com/cpustejovsky/life-together-calculator"
        },
    ],
    current: false
}

const blog: Project = {
    name: "blog",
    title: "BitPay Blog Redesign",
    languages: "CSS/SASS",
    content: [`I forked Ghost's Casper theme and modified it with the help of an
  amazing marketing designer to give it a modern look.`, <Grid container>
        <Grid item md={6} className="projects__section">
            <h3>Original</h3>
            <BlogOriginal/>
        </Grid>
        <Grid item md={6} className="projects__section">
            <h3>CSS Redesign</h3>
            <BlogRefresh/>
        </Grid>
    </Grid>],
    links: [],
    current: false
}

const headlessCms: Project = {
    name: "headlessCms",
    title: "BitPay Headless CMS",
    languages: "Nuxt.js / Vue.js",
    content: [`I used Ghost's Content API to turn BitPay's blog into a headless
  CMS and add the blog to BitPay's Nuxt.js site.`, `This created design consistency and allowed non-developers to
  make basic copy edits to BitPay's site without a full
  development process.`, <Grid item md={12} className="projects__section">
        <BlogHeadlessCMS/>
    </Grid>],
    links: [],
    current: false
}

const projects: Project[] = [
    franz,
    customSortGo,
    twitterBot,
    headlessCms,
    lifeTogetherCalculator,
    blog
]

export default projects