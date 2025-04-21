import React from "react"

const ListPosts = (props) => {
    const { postLists = [] } = props; // Default to an empty array if postLists is undefined

    if (postLists.length === 0) {
        return <p className="text-slate-700 dark:text-slate-300 italic">No posts available at the moment.</p>; // Graceful fallback for empty or undefined postLists
    }

    return (
        <div className="space-y-6">
            {postLists.map(({ node }) => (
                <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300" key={node.id}>
                    <div className="p-6">
                        <a href={node.fields.slug} className="block mb-2">
                            <h4 className="text-xl font-bold text-slate-900 dark:text-white hover:text-accent dark:hover:text-accent transition-colors">
                                {node.frontmatter.title}
                            </h4>
                        </a>
                        <p className="text-slate-700 dark:text-slate-300">
                            {node.headings.map((h) => h.value).join(" ")}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ListPosts