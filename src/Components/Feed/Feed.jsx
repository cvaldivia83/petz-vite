import React from 'react';
import FeedPhotos from './FeedPhotos';
import FeedModal from '../Feed/FeedModal';
import PropTypes from 'prop-types';

const Feed = ({user}) => {
  const [modalPost, setModalPost] = React.useState(null);
  const [total, setTotal] = React.useState(3);

  // React.useEffect(() => {
  //   setTotal(3);
  // }, [user])

  React.useEffect(() => {

    function infiniteScroll(event) {
      let wait = false;
      const scroll = window.scrollY;
      const height = document.body.offsetHeight - window.innerHeight;
      if (scroll > height * 0.75 && !wait) {
        setTotal((prevTotal) => prevTotal += 3)
        wait = true;

        setTimeout(() => {
          wait = false;
        }, 500)
      }

    }

    window.addEventListener('wheel', infiniteScroll);
    window.addEventListener('scroll', infiniteScroll);

    return () => {
      window.removeEventListener('wheel', infiniteScroll);
      window.removeEventListener('scroll', infiniteScroll);
    }
  }, [])

  return (
    <div>
      { modalPost && <FeedModal post={modalPost} setModalPost={setModalPost} /> }

      <FeedPhotos user={user} total={total} setModalPost={setModalPost} />
    </div>
  )
}

Feed.propTypes = {
  user: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.number.isRequired])
}

export default Feed;