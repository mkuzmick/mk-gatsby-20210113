exports.onCreateNode = ({ node }) => {
    console.log(`Node created of type "${node.internal.type}"`)
    if (node.internal.type === `Mdx`) {
        console.log("found an MDX node")
    } else if (node.internal.type === 'MarkdownRemark') {
        console.log("found a markdown node")
    }
  }