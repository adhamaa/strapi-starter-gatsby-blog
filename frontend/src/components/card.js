import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

const Card = ({ article }) => {
  return (
    <Link to={`/article/${article.node.title}`} className="uk-link-reset">
      <div className="uk-card uk-card-muted">
        <div className="uk-card-media-top">
          <Img
            fluid={article.node.image.childImageSharp.fluid}
            alt="picture"
            height="100"
          />
        </div>
        <div className="uk-card-body">
          <p id="category" className="uk-text-uppercase">
            {article.node.category.name}
          </p>
          <p id="title" className="uk-text-large">
            {article.node.title}
          </p>
        </div>
      </div>
    </Link>
  )
}

export default Card
