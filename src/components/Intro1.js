function Intro1(props) {
    return (
        <div className="blog-post-intro">
            <h2>Virtual Dom in {props.name}</h2>
            <div>
                <p>React JS Virtual DOM is an in-memory representation of the DOM. DOM refers to the Document Object Model that represents the content of XML or HTML documents as a tree structure so that the programs can be read, accessed and changed in the document structure, style, and content.</p>
                <p className="link">Read more...</p>
            </div>
        </div>
    );
};

export default Intro1;