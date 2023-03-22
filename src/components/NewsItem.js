import React from 'react'

const NewsItem = (props) => {
    let { title, description, imgurl, newsurl,author,datetime,source} = props;
    return (
        <div className="container my-3" >
          <div className="card" style={{width : '20rem'}}>
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger text-white">{source}</span>
            <img src={!imgurl ? "https://www.hindustantimes.com/ht-img/img/2023/02/09/550x309/Breaking-News-Live-Blog-pic_1627344775185_1675900884976_1675900884976.jpg" : imgurl} className="card-img-top" alt={newsurl} />
            <div className="card-body">
              <h5 className="card-title">{title}... <span className="badge rounded-pill bg-info text-white">New</span></h5>
              <p className="card-text">{description}...</p>
              <p className="card-text"><small className="text-muted">By {author? author : "Author"} on {new Date(datetime).toLocaleString()} </small></p>
              <a  rel="noreferrer" href={newsurl} target="_blank" className="btn btn-sm btn-dark">Read more</a>
            </div>
          </div>
        </div>
    )
}

export default NewsItem
