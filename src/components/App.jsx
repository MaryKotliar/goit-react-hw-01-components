import { Profile } from 'components/Profile/Profile';
import user from '../data/user.json';
import { GlobalStyle } from './GlobalStyle';

import { Statistics } from './Statistics/Statistics';
import data from '../data/data.json';

import { Friends } from './Friends/Friends';
import friends from '../data/friends.json';

import { TransactionHistory } from './Transactions/Transactions';
import transactions from '../data/transactions.json';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Friends friends={friends} />
      <TransactionHistory transactions={transactions} />
      <GlobalStyle />{' '}
    </>
  );
};
