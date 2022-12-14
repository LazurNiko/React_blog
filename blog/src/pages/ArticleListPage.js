import { articles } from "./article-content";
import { ArticlesList } from "../components/ArticlesList";
import React from 'react';

export const ArticleListPage = () => (
  <>
  <h1 className="page_title">Wonders of the World</h1>
  <section className="article_list">
    <ArticlesList articles={articles} />
  </section>
  </>
);
