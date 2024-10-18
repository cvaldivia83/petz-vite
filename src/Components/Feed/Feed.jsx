import React from 'react';
import FeedPhotos from './FeedPhotos';
import FeedModal from '../Feed/FeedModal';

const Feed = () => {
  return (
    <div>
      <FeedModal />
      <FeedPhotos />
    </div>
  )
}

export default Feed;