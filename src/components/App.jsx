import user from '../path/user.json';
import stats from '../path/data.json';
import friends from '../path/friends.json';
import transactions from '../path/transactions.json';

import Section from './Section/Section';
import Profile from './Profile/Profile';
import StatisticsList from './Statisticslist/Statisticslist';
import FriendsList from './FriendsList/Friendslist';
import TransactionsHistory from './TransactionHistory/TransactionHistory';

import css from './App.module.css';

export const App = () => {
  return (
    <>
      <Section title="Profile" section={css.profile}>
        <Profile user={user} />
      </Section>
      <Section title="Upload stats" section={css.statistics}>
        <StatisticsList stats={stats} />
      </Section>
      <Section title="Friend list" section={css['friend-list']}>
        <FriendsList friends={friends} />
      </Section>
      <Section
        title="History of transactions"
        section={css['history-of-transactions']}
      >
        <TransactionsHistory items={transactions} />
      </Section>
    </>
  );
};
