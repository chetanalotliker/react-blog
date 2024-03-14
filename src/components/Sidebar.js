function Sidebar() {
    const asideStyle = {
        background: "azure",
        width: "20%",
        marginLeft: "10px"
    }

    return (
        <aside style={asideStyle}
            className="sidebar-component">
            <h2>Sidebar content here</h2>
        </aside>
    )
}

export default Sidebar;