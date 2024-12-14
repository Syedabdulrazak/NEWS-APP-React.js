import React, { Component } from "react";

export class NewsItem extends Component {
  truncateText = (text, maxLength) => {
    if (!text) return ""; // If text is null or undefined, return empty string
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };

  render() {
    let {
      title,
      description,
      imageUrl,
      newsUrl,
      author,
      date,
      source,
    } = this.props;

    const defaultImage = "https://media.istockphoto.com/vectors/breaking-news-banner-template-vector-id1218708633?k=6&m=1218708633&s=612x612&w=0&h=alaPpusfhuKrgIJBZ1JcK21Cm8EJVf237pC3Y2j99V4="; 

    return (
      <div>
        <div
          className="card"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            position: "relative",
          }}
        >
          <span
            className="position-absolute badge rounded-pill bg-danger"
            style={{ right: "0", top: "0", zIndex: 2 }}
          >
            {source}
          </span>
          <img
            src={imageUrl ? imageUrl : defaultImage}
            className="card-img-top"
            alt="news"
          />
          <div className="card-body">
            <h5 className="card-title">
              {this.truncateText(title, 50)}
            </h5>
            <p className="card-text">
              {this.truncateText(description, 100)}
            </p>
            <p className="card-text">
              <small className="text-body-secondary">
                By {author ? author : "Unknown"} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>

            <a
              href={newsUrl}
              rel="noreferrer"
              target="_blank"
              className="btn btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
