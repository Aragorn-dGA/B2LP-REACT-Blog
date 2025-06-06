import React from 'react';
import { posts } from '../datas/posts';
import Post from './Post';

function Feed() {
  return (
    <div>
      {/* <h1>Feed</h1> */}
      <ul>
        {posts.map(post => (
          <Post
            key={post.id}
            date={post.Date}
            title={post.Titre}
            content={post.Contenu}
            comments={post.Commentaires}
          />
        ))}
      </ul>
    </div>
  );
}

export default Feed;

