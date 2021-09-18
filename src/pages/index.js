import * as React from "react"

import Typography from "@material-ui/core/Typography"
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import Layout from "../components/layout"
import ArticleCard from "../components/articlecard"

// data
const links = [
  {
    text: "Tutorial",
    url: "https://www.gatsbyjs.com/docs/tutorial/",
    img: "https://v4.mui.com/static/images/cards/contemplative-reptile.jpg",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
  },
  {
    text: "How to Guides",
    url: "https://www.gatsbyjs.com/docs/how-to/",
    img: "https://v4.mui.com/static/images/cards/contemplative-reptile.jpg",
    description:
      "Practical step-by-step guides to help you achieve a specific goal. Most useful when you're trying to get something done.",
  },
  {
    text: "Reference Guides",
    url: "https://www.gatsbyjs.com/docs/reference/",
    img: "https://v4.mui.com/static/images/cards/contemplative-reptile.jpg",
    description:
      "Nitty-gritty technical descriptions of how Gatsby works. Most useful when you need detailed information about Gatsby's APIs.",
  },
  {
    text: "Conceptual Guides",
    url: "https://www.gatsbyjs.com/docs/conceptual/",
    img: "https://v4.mui.com/static/images/cards/contemplative-reptile.jpg",
    description:
      "Big-picture explanations of higher-level Gatsby concepts. Most useful for building understanding of a particular topic.",
  },
  {
    text: "Plugin Library",
    url: "https://www.gatsbyjs.com/plugins",
    img: "https://v4.mui.com/static/images/cards/contemplative-reptile.jpg",
    description:
      "Add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
  },
  {
    text: "Build and Host",
    url: "https://www.gatsbyjs.com/cloud",
    img: "https://v4.mui.com/static/images/cards/contemplative-reptile.jpg",
    badge: true,
    description:
      "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
  },
]

// markup
const IndexPage = () => {
  return (
    <Layout siteTitle="Home Page">
      <Container>
        <Typography
          component="div"
          style={{ backgroundColor: "#cfe8fc", height: "20px" }}
        />
        <Grid container spacing={1}>
          <Grid container item xs={12} spacing={3}>
            {links.map(link => (
              <ArticleCard
                cardTitle={link.text}
                cardImg={link.img}
                cardLink={link.url}
              >
                {link.description}
              </ArticleCard>
            ))}
          </Grid>
        </Grid>
      </Container>
    </Layout>
  )
}

export default IndexPage
