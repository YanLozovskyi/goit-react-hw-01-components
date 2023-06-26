import user from '../path/user.json';
import stats from '../path/data.json';
import friends from '../path/friends.json';
import transactions from '../path/transactions.json';

import Section from './Section/Section';
import Profile from './Profile/Profile';
import StatisticsList from './Statisticslist/StatisticsList';
import FriendsList from './FriendsList/FriendsList';
import TransactionsHistory from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <>
      <Section>
        <Profile user={user} />
      </Section>
      <Section title="Upload stats">
        <StatisticsList stats={stats} />
      </Section>
      <Section>
        <FriendsList friends={friends} />
      </Section>
      <Section>
        <TransactionsHistory items={transactions} />
      </Section>
    </>
  );
};
