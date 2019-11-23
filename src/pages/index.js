import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import CompCard from "../components/card"
import { Paper, Container } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles(theme => ({
  root: {
    // something
  },
  sectionOne: {
    height: "100vh",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
}))

const IndexPage = () => {
  const classes = useStyles()
  return (
    <Layout>
      <SEO title="Home" />

      <Hero />
      <Container>
        <Paper className={classes.sectionOne}>
          <CompCard />
          <CompCard />
        </Paper>
      </Container>
    </Layout>
  )
}
export default IndexPage
