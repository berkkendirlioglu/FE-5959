function Cards({icon, title, text}){
    return (
        <div className="col-xl-6 col-xxl-4 mb-5">
              <div className="card border-0">
                <div className="card-img-top">
                  <div className="card-icon text-center">
                    <i className={`${icon} bg-primary py-2 px-3 fs-2 text-white rounded-3`}></i>
                  </div>
                </div>
                <div className="card-body text-center mt-2 px-4">
                  <div className="card-title fw-bold fs-4">{title}</div>
                  <p className="card-text px-4">{text}</p>
                </div>
            </div>
        </div>
    )
};

export default Cards;