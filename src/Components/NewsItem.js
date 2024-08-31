import React from 'react';

export const NewsItem = ({ title, description, src, url }) => {
  return (
    <div className="card text-light mb-3 d-inline-flex my-3 px-2 py-2" style={{ maxWidth: "440px", background: "linear-gradient(to bottom, red, #1F1C18)", marginLeft: "30px" }}>
      <img src={src} style={{ height: "200px", width: "420px" }} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title ? title.slice(0,) : "Please Select The News Channel Above"}</h5>
        <p className="card-text">{description ? description.slice(0, 150) : "Updates are on the way..."}</p>
        <a href={url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Read More</a>
      </div>
    </div>
  );
};
