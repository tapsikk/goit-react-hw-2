import Profile from './components/Profile/Profile';
import userData from './userData.json'
import FriendList from './components/FriendList/FriendList';
import friend from './friends.json';
import transactions from './transactionHistory.json';
import TransitionHistory from './components/TransactionHistory/TransactionHistory';

function App() {
  const {username, tag, location, avatar, stats} = userData;
  return (
    <>
      <Profile
        name={username}
        tag={tag}
        location={location}
        image={avatar}
        stats={stats}
      />
      <FriendList friends={friend} />
      <TransitionHistory items={transactions} />
    </>
  );
}

export default App;
