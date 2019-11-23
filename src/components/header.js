import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import useScrollTrigger from "@material-ui/core/useScrollTrigger"
import { Slide } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    background: theme.palette.primary,
  },
  link: {
    color: theme.palette.text.secondary,
    textDecoration: "none",
  },
  menuButton: {
    color: theme.palette.text.secondary,
    marginRight: theme.spacing(2),
    outline: "none",
    border: "none",
  },
  title: {
    outline: "none",
    color: theme.palette.text.secondary,
    flexGrow: 1,
  },
}))

function HideOnScroll(props) {
  const { children, window } = props
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger()
  // TODO: Fix this to give me the slide it is not working yet
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}

const Header = ({ siteTitle }) => {
  const classes = useStyles()
  return (
    <HideOnScroll>
      <AppBar position="static" color="primary">
        <Toolbar className={classes.root}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Showcase
          </Typography>
          <Typography variant="h6" className={classes.title}>
            Services
          </Typography>
          <Typography variant="h6" className={classes.title}>
            Blog
          </Typography>
          <Typography variant="h6" className={classes.title}>
            About Us
          </Typography>
          <Typography>
            <Link className={classes.link} to="/login">
              Login
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
