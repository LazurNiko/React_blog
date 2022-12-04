import { useParams } from "react-router-dom";
import { articles } from "./article-content";
import { NotFoundPage } from "./NotFoundPage";

export const ArticlePage = () => {
  const { articleId } = useParams();
  const article = articles.find(article => article.name === articleId);

  if(!article) {
    return <NotFoundPage />
  }

  return (
      <section>
      <h1 className="page_title">{article.title}</h1>
        {article.image.map((image, i) => (
          <img className="article_image" src={article.image[i]} alt =""></img>
        ))}
          {article.content.map((paragraph, i) => (
          <p className="article_paragraph" key={i}>{paragraph}</p>
          ))}
      </section>
  )
};
