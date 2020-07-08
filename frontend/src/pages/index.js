import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import ArticlesComponent from "../components/articles"

// import "../assets/css/main.css"

const IndexPage = () => (
  <Layout>
    <StaticQuery
      query={graphql`
        query {
          allStrapiArticle {
            edges {
              node {
                strapiId
                title
                category {
                  name
                }
                image {
                  childImageSharp {
                    fluid(maxWidth: 800) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={(data) => (
        <div className="uk-section">
          <div className="uk-container uk-container-large">
            <h1>resepi bonda</h1>
            <ArticlesComponent articles={data.allStrapiArticle.edges} />
          </div>
        </div>
      )}
    />
  </Layout>
)

export default IndexPage
