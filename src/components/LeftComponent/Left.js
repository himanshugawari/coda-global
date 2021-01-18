import React from 'react';
import logo from '../../logo.svg';
import { useDispatch, useSelector } from 'react-redux';

const Left = () => {
  const state = useSelector((state) => state);
  return (
    <div>
      <img src={logo} className='App-logo' alt='logo' height='200' />
      {state.slectedUsers.map((user) => {
        return (
          <div>
            <img src={user['Profile Image']} alt='avatar' height='30' />
            <p>{user.Name}</p>
            <p>{user.Price}</p>
            {/* <p>{}</p>
            <p>{}</p> */}
          </div>
        );
      })}
    </div>
  );
};

export default Left;
