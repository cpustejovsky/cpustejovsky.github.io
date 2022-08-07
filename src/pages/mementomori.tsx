import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import { Container, Typography, Button } from "@material-ui/core"
import AbbaSisoesJPG from "../images/abbaSisoes.jpg"
import { purple } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
  },
}))(Button);

const MementoMori = () => (
  <Layout>
    <Container className="site mementomori">
      <SEO title="Memento Mori" />
      <Typography variant="h4" className="mementomori__text">"The mere sight of you tomb, dismays me and causes my heart to shed tears, as I contemplate the debt we, all men, owe. How can I possibly stand it? Oh, Death! Who can evade you?"</Typography>
      <Typography variant="h5" className="mementomori__text"> - Saint Sisoes</Typography>
      <img src={AbbaSisoesJPG} />
      <ColorButton variant="contained" size="large">
        <a className="mementomori__link" target="_blank" rel="noreferrer noopener" href="https://www.orthodoxpath.org/spiritual-life/abba-sisoes-at-the-tomb-of-alexander-the-great/" >Learn More</a>
      </ColorButton>
    </Container>
  </Layout>
)

export default MementoMori