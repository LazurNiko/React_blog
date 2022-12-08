import { useState } from "react"
import axios from 'axios';

export const AddCommentForm = ({ articleName, onArticleUpdated }) => {
  const [name, setName] = useState('');
  const [commentText, setCommentText] = useState('');

  const addComment = async() => {
    const response = await axios.post(`/api/articles/${articleName}/comments`, {
      postedBy: name,
      text: commentText,
    });

    const updatedArticle = response.data;
    onArticleUpdated(updatedArticle);
    setName('');
    setCommentText('');
  }

  return (
    <div id="add-comment-form" className="comments-section">
      <h3 className="comments">You can add comment below</h3>
      <label>
        <input 
          value={name}
          onChange={e => setName(e.target.value)}
          type="text"
          placeholder="Enter your name here..."
          ></input>
      </label>
      <label>
        <textarea
          val={commentText} 
          onChange={e => setCommentText(e.target.value)}
          rows="4" 
          cols="50"
          placeholder="Your comment here..."
        />
      </label>
      <button onClick={addComment}>Add comment</button>
    </div>
  )
}
