import { Link } from "react-router-dom";
import React from 'react';

export const ArticlesList = ({ articles }) => (
  <>
  {articles.map(article => (
    <Link key={article.name} className="article-list-item" to ={`/articles/${article.name}`}>
      <h3 className="article_title">{article.title}</h3>
      <p className="article_paragraph">{article.content[0].substring(0, 160)}...</p>
    </Link>
   ))}
  </>
);
