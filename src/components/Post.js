import '../styles/Post.css';
import Comment from './Comment';
import { useState } from 'react';

function Post({ date, title, content, comments }) {
  const [showComments, setShowComments] = useState(false);

  const toggleComments = () => {
    setShowComments(prev => !prev);
  };

  return (
    <li className="post">
      <h2>{title}</h2>

      <p className="post-date"><strong>Date:</strong> {date}</p>
      <p className="post-content">{content}</p>

      <p 
        className="toggle-comments"
        onClick={toggleComments}
        style={{ cursor: 'pointer', color: '#0077cc', marginTop: '0.5rem' }}
      >
        {showComments ? 'Cacher les commentaires' : 'Afficher les commentaires'}
      </p>

      {showComments && (
        <div className="post-comments">
          {comments.length > 0 ? (
            <>
              <h4>Commentaires :</h4>
              <ul>
                {comments.map(comment => (
                  <li key={comment.id}>
                    <Comment 
                      date={comment.Date} 
                      author={comment.Auteur} 
                      comment={comment.Contenu} 
                    />
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <p className="no-comments">Aucun commentaire pour ce post.</p>
          )}
        </div>
      )}
    </li>
  );
}

export default Post;
