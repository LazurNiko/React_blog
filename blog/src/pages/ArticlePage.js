import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import { articles } from "./article-content";
import { NotFoundPage } from "./NotFoundPage";
import { CommentList } from "../components/CommentsList.js";
import { AddCommentForm } from "../components/AddComment.js";

export const ArticlePage = () => {
  const [ articleInfo, setArticleInfo ] = useState({ upvotes: 0, comments: [] });
  const { articleId } = useParams();
  
  useEffect(() => {
    const loadArticleInfo = async () => {
      const response = await axios.get(`/api/articles/${articleId}`);
      const newArticleInfo = response.data;
      setArticleInfo(newArticleInfo);
    }
    loadArticleInfo();
  }, [articleId]);

  const article = articles.find(article => article.name === articleId);

  const addUpvote = async() => {
    const response = await axios.put(`/api/articles/${articleId}/upvote`);
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
          <button onClick={addUpvote} className="upvote-button">Upvote</button>
          <p className="upvote-title">This article has {articleInfo.upvotes} upvote(s)</p>
        </div>
        </section>
        <AddCommentForm 
          articleName={articleId}
          onArticleUpdated={updatedArticle => setArticleInfo(updatedArticle)}
        />
        <CommentList comments={articleInfo.comments} />
      </>
  )
};
