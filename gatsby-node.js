exports.createPages = async ({ graphql, actions }) => {
    const { data } = await graphql(`
        query resumeQuery {
            allFile(filter: { ext: { eq: ".json" } }) {
                nodes {
                    id
                    name
                }
            }
        }
    `);
    data.allFile.nodes.forEach((node) => {
        actions.createPage({
            path: node.name,
            component: require.resolve("./src/templates/resume.js"),
            context: {
                slug: node.name,
            },
        });
        actions.createPage({
            path: `${node.name}/ats`,
            component: require.resolve("./src/templates/ats.js"),
            context: {
                slug: `${node.name}`,
            },
        });
        actions.createPage({
            path: `${node.name}/minimal`,
            component: require.resolve("./src/templates/minimal.js"),
            context: {
                slug: `${node.name}`,
            },
        });
    });
};
