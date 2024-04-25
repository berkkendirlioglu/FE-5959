function Header(){
    return (
        <header className="head-content py-0 py-lg-5">
            <div className="container py-5">
                <div className="row justify-content-center align-items-center py-5 px-4 px-xl-5">
                    <div className="col-xl-12 text-center px-4 px-xl-5">
                        <h1 className="fw-bold display-5">A warm welcome!</h1>
                        <p className="fs-4 px-4 px-xl-5">Bootstrap utility classes are used to create this jumbotron since the old component has been removed from the framework. Why create custom CSS when you can use utilities?</p>
                        <button className="btn btn-primary py-2 px-3 fs-5 rounded-3">Call to action</button>
                    </div>
                </div>
            </div>
      </header>
    )
}

export default Header;