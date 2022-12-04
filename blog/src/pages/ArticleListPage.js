import { articles } from "./article-content";
import { ArticlesList } from "../components/ArticlesList";

export const ArticleListPage = () => (
  <>
  <h1 className="page_title">Seven Wonders of the World</h1>
  <section className="article_list">
    <ArticlesList articles={articles} />
  </section>
  </>
);
