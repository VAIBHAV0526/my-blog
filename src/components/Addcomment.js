import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";

const AddComment = ({ articlename,OnArticleUpdated }) => {
    const [name, setName] = useState("");
    const [comment, setComment] = useState("");
    const addComment = async () => {
       const response= await axios.post(`/api/articles/${articlename}/comments`,{
            postedby:name,
            text:comment,
        })
        const updatedarticle=response.data;
        OnArticleUpdated(updatedarticle);
        setName('');
        setComment('');
    }
    return (
<div id="add-comment-form">
<h3>add comments</h3>
<label>
    name:
    <input
    value={name}
    onChange={event =>setName(event.target.value)}
     type="text" />


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