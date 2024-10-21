import React from 'react';
import FeedPhotos from './FeedPhotos';
import FeedModal from '../Feed/FeedModal';

const Feed = ({user}) => {
  const [modalPost, setModalPost] = React.useState(null);

  return (
    <div>
      { modalPost && <FeedModal post={modalPost} setModalPost={setModalPost} /> }
      
      <FeedPhotos user={user} setModalPost={setModalPost} />
    </div>
  )
}

export default Feed;