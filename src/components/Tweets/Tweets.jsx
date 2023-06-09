import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState, useCallback } from 'react';
import {
  fetchAllTweets,
  fetchUpdateTweets,
} from 'redux/tweets/tweetsOperation';
import { getAllTweets } from 'redux/tweets/tweetsSelector';
import { useNavigate } from 'react-router-dom';

import TweetsList from './TweetsList/TweetsList';

import goBack from '../../assets/icon/arrow-back.svg';

import styles from './Tweets.module.scss';

const Tweets = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const allTweets = useSelector(getAllTweets);

  const navigate = useNavigate();
  const limit = 3;

  const [filter, setFilter] = useState('');

  const filteredTweets = allTweets.filter(item => {
    if (filter === 'Show All') {
      return true;
    } else if (filter === 'Follow') {
      return item.followStatus === 'Follow';
    } else if (filter === 'Followings') {
      return item.followStatus === 'Following';
    }
    return false;
  });

  const handleFilterChange = event => {
    setFilter(event.target.value);
  };

  const fetchTweets = useCallback(() => {
    if (filter) {
      dispatch(fetchAllTweets(page));
    }
    dispatch(fetchAllTweets({ page, limit }));
  }, [dispatch, page, filter]);

  useEffect(() => {
    fetchTweets();
  }, [fetchTweets, allTweets, filter]);

  const handleLoadMore = useCallback(() => {
    setPage(prevPage => prevPage + 1);
  }, []);

  useEffect(() => {
    if (page > 1) {
      fetchTweets();
    }
  }, [fetchTweets, page]);

  const handleClick = () => {
    navigate(-1);
  };

  const handleFollow = (itemId, followStatus, followers) => {
    if (followStatus === 'Follow') {
      const newFollowStatus = 'Following';
      const newFollowers = followers + 1;
      dispatch(
        fetchUpdateTweets({
          id: itemId,
          newData: { followStatus: newFollowStatus, followers: newFollowers },
        })
      );
    } else {
      const newFollowStatus = 'Follow';
      const newFollowers = followers - 1;
      dispatch(
        fetchUpdateTweets({
          id: itemId,
          newData: { followStatus: newFollowStatus, followers: newFollowers },
        })
      );
    }
  };

  return (
    <section className={styles.tweets}>
      <button className={styles.goBack} onClick={handleClick}>
        <img src={goBack} alt="icon go back" />
        Go back
      </button>

      <TweetsList
        allTweets={allTweets}
        handleFollow={handleFollow}
        filteredTweets={filteredTweets}
        filter={filter}
        handleFilterChange={handleFilterChange}
      />
      {allTweets.length !== 12 && allTweets.length !== 0 && (
        <div className={styles.container_btn}>
          <button onClick={handleLoadMore} className={styles.loadMore}>
            Load More
          </button>
        </div>
      )}
    </section>
  );
};

export default Tweets;
