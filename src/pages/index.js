import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <div className="w-full h-full flex flex-row items-center justify-center">
      <StaticImage src="../images/gb.png"
        className="w-1/2"
      />
    </div>
  </Layout>
)

export const Head = () => <Seo title="Gnome Bobon" />

export default IndexPage
