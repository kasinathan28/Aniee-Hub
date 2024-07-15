import React from "react";
import "./TrendingPosts.css";

function TrendingPosts({ news }) {

  return (
    <div className="TrendingPostContainer">
    <div className="title">
    <h1>Trending Posts</h1>
    </div>
    <div className="TrendingPosts">
      {news.map((newsItem, index) => (
        <div key={index} className="newsCard">
          <div className="newsHeader">
            <span className="author">{newsItem.author_username}</span>
            <span className="comments">{newsItem.comments} comments</span>
          </div>
          <h4 className="newsTitle">{newsItem.title}</h4>
          <p className="newsExcerpt">{newsItem.excerpt}</p>
          <a
            href={newsItem.url}
            target="_blank"
            rel="noopener noreferrer"
            className="readMore"
          >
            Read more
          </a>
        </div>
      ))}
    </div>
    </div>
  );
}

export default TrendingPosts;
