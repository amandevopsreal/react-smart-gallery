//import React, { useState, useEffect } from "react";
import {connect} from 'react-redux';
import React, { Component } from "react";
import CardList from '../components/CardList';
import { P } from '../Player';
import SearchBox from "../components/SearchBox";
import './App.css';
import Scroll from "../components/Scroll";
import ErrorBoundary from "../ErrorBoundary";
import { setSearchField } from "../actions";

const mapStateToProps=state=>{
    return {
        searchField:state.searchField
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        onSearchChange:(event)=>dispatch(setSearchField(event.target.value))
    }
}


class App extends Component {
    constructor() {
        super()
        this.state = {
            Players: [],
            //searchField: '',
        }
    }
    //const [Players, setRobots] = useState([P]);
    //const [searchField, setSearchField] = useState("");

    componentDidMount() {
        
        fetch('https://jsonplaceholder.typicode.com/users').then((response) => { return response.json() }).then(users => { this.setState({ Players: P }) });
    }
    //useEffect = (() => {

    //})
    //onSearchChange = (event) => {

        //this.setState({ searchField: event.target.value });


    //}

    //<SearchBox onSearchChange={this.onSearchChange} />
    //return player.name.toLowerCase().includes(this.state.searchField.toLowerCase())return player.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    render() {
        const {searchField,onSearchChange}=this.props;
        const searchedPlayer = this.state.Players.filter(player => {
            return player.name.toLowerCase().includes(searchField.toLowerCase())
        })
        
        
        if (this.state.Players.length === 0) {
            return <h1>Loading</h1>

        }
        else {
            return (
                <div className="tc">
                    <h1 className="f1">Real Madrid</h1>
                    <SearchBox onSearchChange={onSearchChange} />
                    <Scroll>
                        <ErrorBoundary>
                            <CardList Players={searchedPlayer} />
                        </ErrorBoundary>
                    </Scroll>
                </div>
            );
        }
    }




}

export default connect(mapStateToProps,mapDispatchToProps) (App);