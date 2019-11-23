import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    backgroundPosition: "bottom center",
    backgroundRepeat: "repeat-y",
    backgroundSize: "cover",
    height: "100vh",
    backgroundAttachment: "fixed",
  },
}))

export default function Hero() {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "falling-lights.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <BackgroundImage
      fluid={data.placeholderImage.childImageSharp.fluid}
      className={classes.root}
    />
  )
}
