import * as React from "react"
import PropTypes from "prop-types"
import HeaderBar from "./headerbar"

const Layout = ({ siteTitle, children }) => {
  return (
    <main>
      <title>{siteTitle}</title>
      <HeaderBar />
      {children}
    </main>
  )
}

Layout.propTypes = {
  siteTitle: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
}

export default Layout
