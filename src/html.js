import React from 'react'
import PropTypes from 'prop-types'

export default class HTML extends React.Component {
  render() {
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
<<<<<<< HEAD
          <link rel="stylesheet" href="globekit/examples/pointsofinterest/css/globe.css">
          <link rel="stylesheet" href="globekit/examples/pointsofinterest/css/pin-callout.css">
          <link rel="stylesheet" href="globekit/examples/pointsofinterest/css/detail-callout.css">
=======
>>>>>>> 957710a205fafb77008ef2f26e76bbf4140d0590
          {this.props.headComponents}
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <noscript>This website requires JavaScript.</noscript>
          <div
            key="body"
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    )
  }
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
