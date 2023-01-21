import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import useUser from "../components/hooks/useUser";

const AddComment = ({ articlename,OnArticleUpdated }) => {
    const {user}=useUser();
    const [name, setname] = useState("");
    const [comment, setComment] = useState("");
    const addComment = async () => {
        const token= user && await user.getIdToken();
        const headers =token ? {authtoken:token} : {};
       const response= await axios.post(`/api/articles/${articlename}/comments`,{
            postedby:name,
            text:comment,
        },{
            headers,
        })
        const updatedarticle=response.data;
        OnArticleUpdated(updatedarticle);
         setname('');
        setComment('');
    }
    return (
<div id="add-comment-form">
<h3>add comments</h3>
{user && <p>you are posting as {user.email}</p>}
<label>
comment:
<textarea 
value={comment}
onChange={event =>setComment(event.target.value)}
rows="4" cols="50" name="comment" form="add-comment-form"/>
</label>
<button onClick={addComment}>add comment</button>

    </div>

    );


}
export default AddComment;