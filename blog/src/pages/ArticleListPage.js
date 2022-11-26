import { articles } from "./article-content";
import { ArticlesList } from "../components/ArticlesList";

export const ArticleListPage = () => (
  <>
  <h1>Articles</h1>
    <ArticlesList articles={articles} />
  </>
);
