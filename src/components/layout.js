/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Footer from "./footer"
import Header from "./header"
import "./layout.css"
import { createMuiTheme } from "@material-ui/core"
import { ThemeProvider } from "@material-ui/core/styles"
import { teal, indigo } from "@material-ui/core/colors"

const theme = createMuiTheme({
  palette: {
    primary: teal,
    secondary: indigo,
  },
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
  },
})

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={theme}>
      <Header siteTitle={data.site.siteMetadata.title} />

      <main>{children}</main>
      <Footer />
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
