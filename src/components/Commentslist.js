const Commentslist =({comments}) => (
    <>
   <h3>Comments</h3>
   {
    comments.map(comments=>(
        <div className="comment" key={comments.postedby+''+comments.text}>
            <h4>
                {comments.postedby}
            </h4>
            <p>{comments.text}</p>

        </div>

    ))
   }
    </>
)
export default Commentslist;