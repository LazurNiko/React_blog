import './App.css';
import { NavBar } from './pages/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AboutPage } from './pages/AboutPage';
import { ArticleListPage } from './pages/ArticleListPage';
import { ArticlePage } from './pages/ArticlePage';
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { ParticleBackground } from './components/particleBackground';
import { CreateAccountPage } from './pages/createAccountPage';
import { LoginPage } from './pages/logInPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App" style={{ position: "relative" }}>
      <ParticleBackground />
        <NavBar />
        <div id="page-body">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/articles" element={<ArticleListPage />} />
            <Route path="/articles/:articleId" element={<ArticlePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/create-account" element={<CreateAccountPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
