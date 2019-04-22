import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const renderPlayers = players => players.map((e, i) => {
  const { name, position, nationality, dateOfBirth } = e;

  return(
    <tr key={i}>
      <td>{name}</td>
      <td>{position}</td>
      <td>{nationality}</td>
      <td>{moment().diff(dateOfBirth, 'years')}</td>
    </tr>
  )
});

const TableResultFinder = ({ players }) => {
  if(!players.length){
    return(<div></div>);
  } else{
    return(
      <div className="section">
        <table className="table is-fullwidth">
          <thead>
            <tr>
              <th>Player</th>
              <th>Position</th>
              <th>Team</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {
              renderPlayers(players)
            }
          </tbody>
        </table>
      </div>
    )
  }
};

TableResultFinder.propTypes = {
  players: PropTypes.array.isRequired,
  players: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    position: PropTypes.string,
    nationality: PropTypes.string,
    dateOfBirth: PropTypes.string
  }))
};

export default TableResultFinder;