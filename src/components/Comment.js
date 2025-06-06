import '../styles/Comment.css';

function Comment({ date, author, comment }) {
  return (
    <div className="comment">
      <p className="comment-meta">
        <strong>{author}</strong> | <em>{date}</em>
      </p>
      <p className="comment-content">{comment}</p>
    </div>
  );
}

export default Comment;
