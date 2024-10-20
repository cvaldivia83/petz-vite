import React from 'react';
import FeedPhotos from './FeedPhotos';
import FeedModal from '../Feed/FeedModal';

const Feed = () => {
  const [modalPost, setModalPost] = React.useState(null);

  return (
    <div>
      { modalPost && <FeedModal post={modalPost} setModalPost={setModalPost} /> }
      <FeedPhotos setModalPost={setModalPost} />
    </div>
  )
}

export default Feed;