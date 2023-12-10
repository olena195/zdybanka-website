export const title = "asdad";

export default (data: {title: typeof title}) => (
    <>
        <link rel="stylesheet" href="/styles.css"/>
        <h1>{data.title}</h1>
        <p>This is my first post using lume. I hope you like it!</p>
    </>
);
