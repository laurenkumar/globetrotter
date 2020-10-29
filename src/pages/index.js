import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Billboard from '../components/billboard'
import Gallery from '../components/gallery'
<<<<<<< HEAD
import { POIGlobe } from '../globekit/examples/pointsofinterest/js/POIGlobe.js';
=======
>>>>>>> 957710a205fafb77008ef2f26e76bbf4140d0590

const HomeWrapper = styled.div`
  padding-top: 0.5rem;
  margin-right: auto;
  margin-left: auto;
  &:before,
  &:after {
    content: ' ';
    display: table;
  }
  &:after {
    clear: both;
  }
  & {
    *zoom: 1;
  }
`

const IndexPage = ({ data }) => {
  const { edges: homeImgData } = data.HomeImgs
<<<<<<< HEAD
  const canvas = document.getElementById('globekit-canvas')
  const calloutContainer = document.getElementById('callout-container')
  window.globe = new POIGlobe(canvas, calloutContainer)
=======
>>>>>>> 957710a205fafb77008ef2f26e76bbf4140d0590

  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

      <Billboard />

      <HomeWrapper>
        <Gallery homeImgs={homeImgData} />
<<<<<<< HEAD
        <div id="globekit-container">
          <canvas id="globekit-canvas"></canvas>
          <div id="callout-container"></div>
        </div>
=======
>>>>>>> 957710a205fafb77008ef2f26e76bbf4140d0590
      </HomeWrapper>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query allHomeImgsQuery {
    HomeImgs: allFile(
      sort: { order: ASC, fields: [absolutePath] }
      filter: { relativePath: { regex: "/covers/.*.jpg/" } }
    ) {
      edges {
        node {
          relativePath
          name
          childImageSharp {
            fluid(maxWidth: 1240) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
