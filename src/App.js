import './App.css';
import HomePage from '/Users/vaibhav/Desktop/blog-project/my-blog/src/pages/HomePage.js'
import AboutPage from './pages/AboutPage';
import ArticlePageList from './pages/ArticleListPage';
import NotFoundPage from './pages/NotfoundPage';
import ArticlePage from './pages/ArticlePage';
import {
  BrowserRouter ,
  Routes,
  Route,
} from  'react-router-dom';
import Navbar from './Navbar';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Navbar/>
      <div id="page-body">
        welcome to my awesome blog!
        <Routes>
        <Route path='/' element={<HomePage />} />
       <Route path = '/about' element={<AboutPage/>}/>
        <Route path='/articles'element={<ArticlePageList/>}/>
           <Route path='/articles/:articleId'element={<ArticlePage/>}/>
           <Route path='*' element={<NotFoundPage/>}/>
</Routes>

      </div>
 
     
    </div>
    </BrowserRouter>
  );
}

export default App;
