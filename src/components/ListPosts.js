import React from "react"

const ListPosts = (props) => {
    const { postLists } = props
    return <React.Fragment>
        {
            postLists.map(({ node }) => {
                return (<div className="card" key={node.id}>
                    <div className="card-body">
                        <a href={node.fields.slug}><h4 className="card-title">{node.frontmatter.title}</h4></a>
                        <p className="card-text">{node.headings.map((h) => h.value).join(" ")}</p>
                    </div>
                </div>)
            })
        }
    </React.Fragment>
}

export default ListPosts