import React from "react"
import Layout from "../components/layout"
import PhotoBox from "../components/photo-box"
// import Section from "../components/section"
// import photography from "../data/photography"
// import Img from "gatsby-image";
// import { graphql } from "gatsby"

const page = () => (
    <Layout>
        <div style={{ background: `black`}}>
            <PhotoBox />
            <div
                style={{
                    margin: `0 auto`,
                    maxWidth: 960,
                    padding: `0px 1.0875rem 1.45rem`,
                    paddingTop: 0,
                }}
            >

            </div>
        </div>
    </Layout>
)

export default page
// const photographyPage = ({ data }) => {
//     const { edges: ImgData } = data.ProjectImgs;

//     return (
//         <Section>
//             <p>You can't put a price on beauty, enjoy free use and downloads of these images. Feel free to donate money that will go towards new equipment, or order a canvas print.</p>
//             {photography.map(photo => {
//                 const image = ImgData.find(n => {
//                     return n.node.relativePath === `photography/${photo.file}`;
//                 });
//                 const imageSizes = image.node.childImageSharp.sizes;
//                 return (
//                     <Img

//                         sizes={imageSizes}
//                         className="card-img_src center-block"
//                     />
//                 )
//             })}
//         </Section>
//     )
// }

// export default photographyPage

// export const query = graphql`
//   query allImgsQuery {
//     site {
//       siteMetadata {
//         title
//         description
//       }
//     }

//     ProjectImgs: allFile(
//       sort: { order: ASC, fields: [absolutePath] }
//       filter: { relativePath: { regex: "/photography/.*.jpg/" } }
//     ) {
//       edges {
//         node {
//           relativePath
//           childImageSharp {
//             sizes(maxWidth: 320) {
//               ...GatsbyImageSharpSizes
//             }
//           }
//         }
//       }
//     }
//   }
// `;