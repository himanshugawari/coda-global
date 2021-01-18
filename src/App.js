import './App.css';
import Left from './components/LeftComponent/Left';
import Right from './components/RightComponent/Right';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../src/redux/users';
import { useEffect } from 'react';

function App() {
  const state = useSelector((state) => state);
  const userDispatch = useDispatch();
  useEffect(() => {
    userDispatch(userActions.fetchUsersData());
  }, []);

  return (
    <div className='container'>
      <Left style={{ flex: 1 }} />
      <Right style={{ flex: 3 }} />
    </div>
  );
}

export default App;
