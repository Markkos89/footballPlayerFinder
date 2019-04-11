import { FETCH_FOOTBAL_PLAYERS } from './../constants';

export const footballPlayers = (state = {}, action) => {
  switch(action.type) {
    case FETCH_FOOTBAL_PLAYERS: {
      return action.payload.players;
    }

    default:
      return state;
  }
};