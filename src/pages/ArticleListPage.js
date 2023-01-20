import articles from "./article-content";
import {Link, Links} from 'react-router-dom';
import ArticleList from "../components/ArticleList";
const ArticlePageList = () => {
    return (
      <>
      <h1>Article</h1>
      <ArticleList articles={articles}/>
</>
    );
  }
  export default ArticlePageList;