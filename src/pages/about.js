import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import ArticleCard from "../components/articlecard"

const AboutPage = () => {
  return (
    <Layout siteTitle="About This Website">
      <p>This is a website to create a Material UI template</p>
      <ArticleCard
        cardTitle="Lizard"
        cardImg="https://v4.mui.com/static/images/cards/contemplative-reptile.jpg"
      >
        Lizards are a widespread group of squamate reptiles, with over 6,000
        species, ranging across all continents except Antarctica
      </ArticleCard>
      <Link to="/">Go home</Link>.
    </Layout>
  )
}

export default AboutPage
