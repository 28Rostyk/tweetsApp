import logo from '../../../assets/icon/Logo.svg';
import styles from './TweetsList.module.scss';

const TweetsList = ({
  allTweets,
  handleFollow,
  handleFilterChange,
  filter,
  filteredTweets,
}) => {
  return (
    <>
      <div className={styles.container_select}>
        <select
          className={styles.select}
          value={filter}
          onChange={handleFilterChange}
        >
          <option value="Show All">Show All</option>
          <option value="Follow">Follow</option>
          <option value="Followings">Followings</option>
        </select>
      </div>

      <ul className={styles.list}>
        {filter
          ? filteredTweets.map(item => {
              const formatFollowers = item.followers.toLocaleString('en-US', {
                minimumFractionDigits: 0,
              });
              const followButtonStyle =
                item.followStatus === 'Follow'
                  ? styles.followButton
                  : styles.followingButton;
              return (
                <li key={item.id} className={styles.list_item}>
                  <div className={styles.container_bgImg}>
                    <div className={styles.container_logo}>
                      <img src={logo} alt="logo" />
                    </div>
                    <div className={styles.container_boy}>
                      <span className={styles.wrapperImg}>
                        <img
                          className={styles.boyImg}
                          src={item.avatar}
                          alt="avatar"
                        />
                      </span>
                    </div>
                    <div className={styles.textWrapper}>
                      <p className={styles.text}>{item.tweets} TWEETS</p>
                      <p className={styles.text}>{formatFollowers} FOLLOWERS</p>
                      <button
                        onClick={() =>
                          handleFollow(
                            item.id,
                            item.followStatus,
                            item.followers
                          )
                        }
                        className={`${styles.btn} ${followButtonStyle}`}
                      >
                        {item.followStatus === 'Follow'
                          ? 'Follow'
                          : 'Following'}
                      </button>
                    </div>
                  </div>
                </li>
              );
            })
          : allTweets.map(item => {
              const formatFollowers = item.followers.toLocaleString('en-US', {
                minimumFractionDigits: 0,
              });
              const followButtonStyle =
                item.followStatus === 'Follow'
                  ? styles.followButton
                  : styles.followingButton;
              return (
                <li key={item.id} className={styles.list_item}>
                  <div className={styles.container_bgImg}>
                    <div className={styles.container_logo}>
                      <img src={logo} alt="logo" />
                    </div>
                    <div className={styles.container_boy}>
                      <span className={styles.wrapperImg}>
                        <img
                          className={styles.boyImg}
                          src={item.avatar}
                          alt="avatar"
                        />
                      </span>
                    </div>
                    <div className={styles.textWrapper}>
                      <p className={styles.text}>{item.tweets} TWEETS</p>
                      <p className={styles.text}>{formatFollowers} FOLLOWERS</p>
                      <button
                        onClick={() =>
                          handleFollow(
                            item.id,
                            item.followStatus,
                            item.followers
                          )
                        }
                        className={`${styles.btn} ${followButtonStyle}`}
                      >
                        {item.followStatus === 'Follow'
                          ? 'Follow'
                          : 'Following'}
                      </button>
                    </div>
                  </div>
                </li>
              );
            })}
      </ul>
    </>
  );
};

export default TweetsList;
