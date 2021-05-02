import React from "react";
import { Link } from "@reach/router";
import { Card } from "react-bootstrap";
import { Votes } from "./Votes";


export default function ArticleCard(props) {
  const { article } = props;

  return (
    <div className="mb-3">
    <Card className="mx-auto .d-inline-flex flex-row justify-content-between align-items-center col-md-8" border='dark'  bg='light' >
      <div className="card-container1">
    <Votes votes={article.votes} id={article.article_id} endpoint="articles" />
    </div>
    <div className="card-container2">
      <Card.Body>
        <Link to={`/articles/${article.article_id}`}>
          <Card.Title> {article.title}</Card.Title>
        </Link>
        <Card.Subtitle className="mb-2 text-muted">
          {" "}
          posted in {article.topic} by {article.author}
        </Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">
        {(article.body).substring(0,250)}...
        </Card.Subtitle>
        </Card.Body>
        </div>
      <div className="card-container3">
        <Card.Link href={`/articles/${article.article_id}/comments`}>
          {article.comment_count} comments
        </Card.Link>
        </div>
    </Card>
    </div>
  );
}
