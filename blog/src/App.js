import './App.css';
import { ReactBrowserRoute, Routes, Route, BrowserRouter } from 'react-router-dom';
import { AboutPage } from './pages/AboutPage';
import { ArticleListPage } from './pages/ArticleListPage';
import { ArticlePage } from './pages/ArticlePage';
import { HomePage } from './pages/HomePage'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>My blog</h1>
        <div id="page-body">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/articles" element={<ArticleListPage />} />
            <Route path="/article/:articleId" element={<ArticlePage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
