const AdminLayout = (props) => {
    return(
        <>
            <div>              
                <main>
                    {props.children}
                </main>
            </div>
        </>
    )
}

export default AdminLayout;