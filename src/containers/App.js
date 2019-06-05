import React, { Component } from 'react';
import {dogs} from '../dogs';
import DogProfile from '../components/DogProfile';
import Search from '../components/Search';
import Scroll from '../components/Scroll';
import './App.css';


class  App extends Component {
    constructor(){
        super()
        this.state = {
            dogs: dogs,
            searchField:"",
            dogImg: []
        }
    }

    onSearchChange = e => {
        this.setState({searchField: e.target.value});
    }
    componentDidMount(){
        fetch(`https://dog.ceo/api/breeds/image/random/11`)
        .then(res => res.json())
        .then(data => {
            this.setState({ dogImg: data.message })
        });
        
    }

    render(){
        const {searchField, dogs, dogImg} = this.state;
        const filterDogs = dogs.filter(dog =>{
            return dog.location.toLowerCase().includes(searchField.toLowerCase());
        });
        return (
            <div className="tc">
                <h1 className="f1">Dog Mate Finder</h1>
                <Search searchChange ={this.onSearchChange}/>
                <Scroll>
                <DogProfile dogs ={filterDogs} dogPicture={dogImg}/>
                </Scroll>
            </div>
        )
    }
    
}

export default App;