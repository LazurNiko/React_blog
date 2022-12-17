import React from 'react';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import { articles } from "./article-content";
import { NotFoundPage } from "./NotFoundPage";
import { CommentList } from "../components/CommentsList.js";
import { AddCommentForm } from "../components/AddComment.js";
import { useUser } from "../hooks/useUser.js";

export const ArticlePage = () => {
  const [ articleInfo, setArticleInfo ] = useState({ upvotes: 0, comments: [], canUpvote: false });
  const { canUpvote } = articleInfo;
  const { articleId } = useParams();

  const { user, isLoading } = useUser();
  
  useEffect(() => {
    const loadArticleInfo = async () => {
      const token = user && await user.getIdToken();
      const headers = token ? {authtoken: token} : {};
      const response = await axios.get(`/api/articles/${articleId}`, {headers});
      const newArticleInfo = response.data;
      setArticleInfo(newArticleInfo);
    }
    if(!isLoading) {
      loadArticleInfo();
    }
    
  }, [isLoading, user]);

  const article = articles.find(article => article.name === articleId);

  const addUpvote = async() => {
    const token = user && await user.getIdToken();
    const headers = token ? {authtoken: token} : {};
    const response = await axios.put(`/api/articles/${articleId}/upvote`, null, { headers });
    const updatedArticle = response.data;
    setArticleInfo(updatedArticle);
  };

  if(!article) {
    return <NotFoundPage />
  }

  return (
      <>
        <h1 className="page_title">{article.title}</h1>
        {article.image.map((image, i) => (
          <img className="article_image" src={article.image[i]} alt ="" key={i}></img>
        ))}
          {article.content.map((paragraph, i) => (
          <p className="article_paragraph" key={i}>{paragraph}</p>
          ))}
        <section className="upvotes-container">
        <div className="upvotes-section">
          { user
          ? <button onClick={addUpvote} className="upvote-button">{canUpvote ? 'Upvote' : 'Already upvoted'}</button>
          : <button className="upvote-button">Log in to upvote</button>
          }
          <p className="upvote-title">This article has {articleInfo.upvotes} upvote(s)</p>
        </div>
        </section>
        { user
        ? <AddCommentForm 
          articleName={articleId}
          onArticleUpdated={updatedArticle => setArticleInfo(updatedArticle)}
        /> 
        : <button className="loginToUpvoteButton">Log in to add a comment</button>
        }
        <CommentList comments={articleInfo.comments} />
      </>
  )
};
