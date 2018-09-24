import React from 'react';
import { Col } from 'react-bootstrap';
import Profile from './Profile';

const Profiles = ({ users }) => users.map(user => (
  <Col xs={6} key={user.login.username}>
    <Profile
      key={user.name.first}
      name={user.name.first}
      username={user.email}
      avatarUrl={user.picture.large}
      date={user.registered.date}
    />
  </Col>
));

export default Profiles;
