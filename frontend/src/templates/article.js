import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import ReactMarkdown from "react-markdown"
import Moment from "react-moment"

import Layout from "../components/layout"

export const query = graphql`
  query ArticleQuery($id: Int!) {
    strapiArticle(strapiId: { eq: $id }) {
      strapiId
      title
      content
      published_at
      image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

const Article = ({ data }) => {
  const article = data.strapiArticle
  return (
    <Layout>
      <div>
        <Img
          id="banner"
          className="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding uk-margin"
          fluid={article.image.childImageSharp.fluid}
          data-srcset={article.image.childImageSharp.fluid}
          data-uk-img
        >
          <h1>{article.title}</h1>
        </Img>

        <div className="uk-section">
          <div className="uk-container uk-container-small">
            <p>
              <Moment format="MMM Do YYYY">{article.published_at}</Moment>
            </p>
            <ReactMarkdown source={article.content} />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Article
