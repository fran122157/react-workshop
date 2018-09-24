import React from 'react';
import PropTypes from 'prop-types';
import { Image, Panel, Well } from 'react-bootstrap';

const Profile = ({
  name, username, avatarUrl, date,
}) => (
  <Well>
    <div className="text-center">
      <Image src={avatarUrl} responsive style={{ margin: 'auto' }} />
    </div>
    <br />
    <Panel>
      <Panel.Heading>{`Name: ${name}`}</Panel.Heading>
      <Panel.Body>
        <p>{`Username: ${username}`}</p>
        <p>{`Fecha de nacimiento: ${date}`}</p>
      </Panel.Body>
    </Panel>
  </Well>
);

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  avatarUrl: PropTypes.string.isRequired,
};

export default Profile;
