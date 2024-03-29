import React from "react"
import TDDGo from "../images/tdd_go"
import Scrum from "../images/scrum"
import GrokkingAlgos from "../images/grokkingalgos"
import US3 from "../images/ultimate_service_3"
import PragProg from "../images/pragprog"
import DesertFathersImg from "../images/desertfathers"
import LetsGo from "../images/lets_go"
import GoBook from "../images/gobook"
import ConcurrencyInGo from "../images/concurrency_in_go"
import Kafka from "../images/kafka"
import DDS from "../images/domaindrivensystems"
import DDDGO from "../images/ddd_go";
import INSIDETHEMACHINE from "../images/inside_the_machine";
import MITOCW from "../images/mit_ocw";
import LITTLESCHEMER from "../images/little_schemer";

type CTA = {
    text: string,
    link: string
}

type Book = {
    read: boolean,
    recurring: boolean,
    Img: () => JSX.Element,
    title: string,
    textArr: (string | JSX.Element)[],
    ctaArr: CTA[],
}

const dds: Book = {
    read: true,
    recurring: false,
    Img: () => <DDS/>,
    title: "Designing Distributed Systems",
    textArr: [
        <p>
            Helping build an event driven distributed systems showed me many of the gaps I have and infrastructure
            context I lacked. I decided to go through this book to remedy that.
        </p>,
        <p>
            So far, it has been a wonderful and practical survey of various ways to use containers and orchestration to
            build a variety of systems.
        </p>
    ],
    ctaArr: [
        {
            text: "Check it out on O'Reilly Media",
            link:
                "https://www.oreilly.com/library/view/designing-distributed-systems/9781491983638",
        },
    ],
}


const kafka: Book = {
    read: true,
    recurring: false,
    Img: () => <Kafka/>,
    title: "Kafka: The Definitive Guide",
    textArr: [
        <p>
            Kafka is a powerful tool with a host of challenges in store for the team that decides to use it.
        </p>,
        <p>
            Having now worked with Kafka for a little less than a year, I realize the need to have a deeper
            understanding of the technology.
        </p>,
        <p>
            Even if you're using something like Confluent to manage Kafka for you, this book provides a great foundation
            for how to build and maintain high performance and reliable Kafka producers and consumers.
        </p>
    ],
    ctaArr: [
        {
            text: "Check it out on O'Reilly Media",
            link:
                "https://www.oreilly.com/library/view/kafka-the-definitive/9781492043072/",
        },
    ],
}

const concurrencyGo: Book = {
    read: true,
    recurring: false,
    Img: () => <ConcurrencyInGo/>,
    title: "Concurrency in Go",
    textArr: [
        <p>
            Go is my favorite language for many reasons, but chief is how it handles concurrency. Given that, I thought
            it wise to dive deeper into that.
        </p>,
        <p>
            Katherine Cox-Buday has written an amazing introduction into Go's concurrency primitives (goroutines and
            channels), libraries (<code>sync</code> and <code>context</code>), and best practices.
        </p>,
        <p>This is definitely a book I'll be rereading in the future.</p>
    ],
    ctaArr: [
        {
            text: "Check it out on O'Reilly Media",
            link:
                "https://www.oreilly.com/library/view/concurrency-in-go/9781491941294/",
        },
    ],
}

const dddGo: Book = {
    read: false,
    recurring: false,
    Img: () => <DDDGO/>,
    title: "Domain Driven Design with Golang",
    textArr: [
        <p>
            My work with Groundfloor in 2022 introduced me to Domain Driven Design (DDD).
            I appreciate DDD's focus on collaboration between the domain experts and the developers.
        </p>,
        <p>
            After I saw <a target="_blank" rel="noreferrer noopener" href="https://quii.dev/">Chris James</a> recommend
            this book on Twitter, I decided to give it a read. Eric Evan's original
            <a target="_blank" rel="noreferrer noopener" href="https://www.domainlanguage.com/ddd/blue-book/">blue book</a>
             on DDD assumes a class-based paradigm. Given that, I appreciate Matt Boyle's translation of those patterns for
            Go's paradigms.
        </p>
    ],
    ctaArr: [
        {
            text: "Visit the Book's Site",
            link:
                "https://www.packtpub.com/product/domain-driven-design-with-golang/9781804613450",
        },
    ],
}

const insideTheMachine: Book = {
    read: false,
    recurring: false,
    Img: () => <INSIDETHEMACHINE/>,
    title: "Inside the Machine",
    textArr: [
        <p>
            TEXT GOES HERE
        </p>
    ],
    ctaArr: [
        {
            text: "Visit the Book's Site",
            link:
                "https://nostarch.com/insidemachine.htm",
        },
    ],
}

const mitOcw: Book = {
    read: false,
    recurring: false,
    Img: () => <MITOCW/>,
    title: "MIT Opencourseware",
    textArr: [
        <p>
            I'm filling in the gaps of my Liberal Arts education by auditing MIT Computer Science courses.
        </p>,
        <p>
             I <a target="_blank" rel="noreferrer noopener"  href="https://dev.to/cpustejovsky/do-leetcode-assessments-make-sense-1kp6">
                am skeptical of LeetCode assessments
            </a> for
            developers. However, I appreciate the need for senior developers to understand Data Structures and Algorithms.
            That knowledge helps us build complex applications than run efficiently.
        </p>
    ],
    ctaArr: [
        {
            text: "Mathematics For Computer Science (MIT 6.042J)",
            link:
                "https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-fall-2010/",
        },
        {
            text: "Introduction to Algorithms (MIT 6.006)",
            link:
                "https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/",
        },
    ],
}

const littleSchemer: Book = {
    read: false,
    recurring: false,
    Img: () => <LITTLESCHEMER/>,
    title: "The Little Schemer",
    textArr: [
        <p>
            I've always loved Functional Programming (FP). Since <a href="https://www.youtube.com/watch?v=5buaPyJ0XeQ">Go has first class functions</a>,
            grokking FP by learning Scheme is helpful for me as a Go developer.
        </p>
    ],
    ctaArr: [
        {
            text: "Visit the Book's Site",
            link:
                "https://mitpress.mit.edu/9780262560993/the-little-schemer/",
        },
    ],
}

const goBook: Book = {
    read: false,
    recurring: false,
    Img: () => <GoBook/>,
    title: "The Go Programming Language",
    textArr: [
        <p>
            Brian Kernighan has already written [one classic programming
            book](https://www.amazon.com/Programming-Language-2nd-Brian-Kernighan/dp/0131103628), so I believe I'm in
            good hands
        </p>
    ],
    ctaArr: [
        {
            text: "Visit the Book's Site",
            link:
                "https://www.gopl.io/",
        },
    ],
}

const letsGo: Book = {
    read: true,
    recurring: false,
    Img: () => <LetsGo/>,
    title: "Let's Go",
    textArr: [
        <p>
            This book is absolutely wonderful for any newcomer to Go wanting to dive into web development.
        </p>,
        <p>
            Alex Edwards shows you how to build scalable, composable, maintainable backends with Go.
        </p>
    ],
    ctaArr: [
        {
            text: "Full Review on DEV.to",
            link: "https://dev.to/cpustejovsky/let-s-go-book-review-1909"
        },
        {
            text: "Buy on Alex Edward's Website",
            link:
                "https://lets-go.alexedwards.net/",
        },
    ],
}
const pragProg: Book = {
    read: true,
    recurring: false,
    Img: () => <PragProg/>,
    title: "The Pragmatic Programmer",
    textArr: [
        <p>
            This book is filled with wisdom and best practices that any programmer can use to improve their craft and
            better provide value with the software they help create. Now that I've finished reading it, I'm slowly going
            back throught it to really grok its lessons.
        </p>,
    ],
    ctaArr: [
        {
            text: "Buy on the Pragmatic Bookshelf",
            link:
                "https://pragprog.com/book/tpp20/the-pragmatic-programmer-20th-anniversary-edition",
        },
    ],
}
const DesertFathers: Book = {
    read: true,
    recurring: true,
    Img: () => <DesertFathersImg/>,
    title: "The Alphabetical Sayings of the Desert Fathers",
    textArr: [
        <p>
            The Desert Fathers of Christianity hold a special place in my heart. Their lessons of self-discipline,
            humility, perserverance, and not judging others help me not only as a developer, but as a human being. It is
            why I read some of their sayings at the beginning of each day, to center and focus me for the day ahead,
            with all the challenges it may bring.
        </p>,
    ],
    ctaArr: [
        {
            text: "Buy on Amazon",
            link:
                "https://amazon.com/Sayings-Desert-Fathers-Alphabetical-Collection/dp/0879079592",
        },
    ],
}

const scrum: Book = {
    read: true,
    recurring: false,
    Img: () => <Scrum/>,
    title: "Learn Go with tests",
    textArr: [
        "I've never been at company that used Agile/Scrum and, as a result, have been able to see first-hand the issues that can arise from not following a system like this.",
        'Jeff Sutherland does not only an amazing job of explaining the "what" and "how" of Scrum, but also the "why". Through anecdotes and philosophical asides, he lays a foundation for why Scrum can and will help any team be more effective.',
        "It's very easy to read and is almost certainly worth reading multiple times. There are short summaries at the end of each chapter and an appendix for someone looking to implement Scrum for their team. It's an excellent book that anyone, but especially those working as developers, product managers, and project managers, should read.",
    ],
    ctaArr: [
        {
            text: "Buy on Amazon",
            link:
                "https://www.amazon.com/gp/product/B00JI54HCU/ref=ppx_yo_dt_b_search_asin_title",
        },
    ],
}
const tddGo: Book = {
    read: true,
    recurring: false,
    Img: () => <TDDGo/>,
    title: "Learn Go with tests",
    textArr: [
        "I believe both Golang and TDD are excelent tools for writing scalable, maintainable code so it made sense to improve my Golang skills while also getting into the habit of doing test-driven development.",
    ],
    ctaArr: [
        {
            text: "Full Review on DEV.to",
            link: "https://dev.to/cpustejovsky/learn-go-with-tests-book-review-na4",
        },
        {
            text: "Read on GitBook",
            link: "https://quii.gitbook.io/learn-go-with-tests/",
        },
    ],
}
const grokkingAlgos = {
    read: true,
    recurring: false,
    Img: () => <GrokkingAlgos/>,
    title: "Grokking Algorithms",
    textArr: [
        "I love learning about computer science both because it's fun and to fill in the gaps that I likely have from not getting a computer science degree. Grokking Algorithms by Aditya Y. Bhargava was a great place to start that journey.",
    ],
    ctaArr: [
        {
            text: "Buy on Amazon",
            link:
                "https://www.amazon.com/Grokking-Algorithms-illustrated-programmers-curious/dp/1617292230",
        },
    ],
}

const ultimateServiceGo = {
    read: true,
    recurring: false,
    Img: () => <US3/>,
    title: "Ardan Labs Ultimate Service 3.0",
    textArr: [
        "A friend recommended this course to me and I enjoyed learn package driven design and idiomatic Go patterns for microservice architecture",
    ],
    ctaArr: [
        {
            text: "Check out Ardan Labs",
            link:
                "https://www.ardanlabs.com/",
        },
    ],
}


const books: Book[] = [
    // goBook,
    mitOcw,
    littleSchemer,
    dddGo,
    // insideTheMachine,
    kafka,
    dds,
    ultimateServiceGo,
    tddGo,
    concurrencyGo,
    pragProg,
    scrum,
    DesertFathers,
    letsGo,
    grokkingAlgos,
]

export default books
