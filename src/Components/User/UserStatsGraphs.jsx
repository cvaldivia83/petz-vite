import React from 'react';
import styles from './UserStatsGraphs.module.css';
import { VictoryChart, VictoryBar } from 'victory';

const UserStatsGraphs = ({ data }) => {
  const [graph, setGraph] = React.useState([]);
  const [postsCount, setPostsCount] = React.useState(0);
  const [commentsCount, setCommentsCount] = React.useState(0);

  React.useEffect(() => {

    const graphData = [{ x: 'posts', y: data.posts_count}, { x: 'comments', y: data.comments_count }]

    console.log(graphData)
    setPostsCount(data.posts_count);
    setCommentsCount(data.comments_count);
    setGraph(graphData);
  }, [data])

  return (
    <section className={`${styles.graph} animeLeft `}>

      <div className={`${styles.total} ${styles.graphItem}`}>
        <p>Posts: { postsCount } </p>
        <p>Comments: { commentsCount } </p>
      </div>

      <div className={styles.graphItem}>
        <VictoryChart>
          <VictoryBar alignment='start' data={graph}></VictoryBar>
        </VictoryChart>
      </div>
    </section>
  )
}

export default UserStatsGraphs;