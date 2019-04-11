import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from './components/Header';
import FinderPlayerForm from './components/FinderPlayerForm';
import TableResultFinder from './components/TableResultFinder';
import { SELECT_OPTIONS, COMPONENT_TITLE } from './../constants';
import { fetchFootballPlayers } from './actions';
import { getFootballPlayers } from './selector';

const initialValues = {
    playerName: '', // ex: Leonel Messi
    position: '', // ex: Central Midfield
    age: '' // ex: 18
};

class FootballPlayerFinder extends Component {
    constructor() {
        super();

        document.title = ':: Football Player Finder ::';
    }

    handleOnSubmit = (values, actions) => {
        this.props.dispatchFetchPlayers(values)
        actions.setSubmitting(false);
    }

    render() {
        const { players } = this.props;

        return (
            <div><Header title={ COMPONENT_TITLE }/> 
                <FinderPlayerForm onSubmit={ this.handleOnSubmit } initialValues={ initialValues } selectOptions={ SELECT_OPTIONS }/> 
                <TableResultFinder players={ players }/> 
            </div>
        )
    }
};

FootballPlayerFinder.propTypes = {
    dispatchFetchPlayers: PropTypes.func.isRequired,
    players: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
    players: getFootballPlayers(state)
});

const mapDispatchToProps = dispatch => ({
    dispatchFetchPlayers: value => dispatch(fetchFootballPlayers(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(FootballPlayerFinder);