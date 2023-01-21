import {useParams}  from 'react-router-dom';
import { useEffect, useState } from 'react';
import Commentslist from '../components/Commentslist';
import AddComment from '../components/Addcomment';
import axios from 'axios';
import useUser from '../components/hooks/useUser';
import articles  from './article-content';
import NotFoundPage from './NotfoundPage';
const ArticlePage = () => {
  const params = useParams();
  const articleId= params.articleId;
  const {user,isLoading}=useUser();
const [articleinfo, setarticleinfo] = useState({ upvotes:0, Comments: [] ,canupvote:false});  // load data
const {canupvote}= articleinfo;
useEffect(
  ()=>{

const loadarticleinfo = async() =>{
  const token= user && await user.getIdToken();
  const headers =token ? {authtoken:token} : {};
  console.log(articleId);
  const response = await axios.get(`/api/articles/${articleId}`,
  {
    headers,
  });
  const newarticleinfo=response.data;
  console.log(newarticleinfo);
  setarticleinfo(newarticleinfo);}
if(isLoading){
loadarticleinfo();
}

}, [isLoading,user]);

const upvote= async()=>{
  const token= user && await user.getIdToken();
  const headers =token ? {authtoken:token} : {};
  const response= await axios.put(`/api/articles/${articleId}/upvote`,null,{headers});
  setarticleinfo(response.data);
}
    const article  = articles.find(article =>article.name===articleId);
    if(!article){ return <NotFoundPage/>}
    return (
    
<>
        <h1>{article.title}</h1>
     
       <div className='upvotes-section'>
     {user ?
        <button onClick={upvote}>{canupvote  ? 'upvote':'all ready upvoted'}  </button>
        
     :
        <button>login to upvote      </button>
       }
        {<p>this article has {articleinfo.upvotes} upvotes</p> }</div>
        {article.content.map((paragraph=>(<p>{paragraph}</p>)))}
      {user ?<AddComment articlename={article.name} 
       OnArticleUpdated= {updatedAerticle =>{setarticleinfo(updatedAerticle)}}/>
       :<button>login to add comments</button>}
        <Commentslist comments={articleinfo.Comments}/>
     </>
    );
  }
  export default ArticlePage;