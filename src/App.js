import React, {Fragment, Component} from 'react';
import Person from './Person.js'
import './App.css';
import ImgOne from './img/pop1.jpg'
import ImgTwo from './img/pop2.jpg'
import ImgThree from './img/pop3.jpg'
import ImgFour from './img/pop4.jpg'
import ImgFive from './img/pop5.jpg'

class App extends Component {
  state = {
    persons: {
      name: "Scarlett", age: 34, hobbies: ["Cooking", "Gym"], image: ImgOne
      // name: "Jim", age: 55, hobbies: ["Cars", "Sport"],
      // name: "Nelly", age: 40, hobbies: ["Art", "Reading"],
      // name: "Madonna", age: 61, hobbies: ["Music", "Dance"]

    }
  }
  switchPictureHandlere = () =>{
    this.setState ({
      persons: {
        ...this.state.persons,
        image: ImgFive
      }
    })
  }


  render() {
    return (
      <Fragment>
      <div className="carddisplay">
        <Person image={this.state.persons.image} name = {this.state.persons.name} age = {this.state.persons.age} hobbies = {this.state.persons.hobbies}/>
        <Person image={this.state.persons.image} name = {this.state.persons.name} age = {this.state.persons.age} hobbies = {this.state.persons.hobbies}/>
        <Person image={this.state.persons.image} name = {this.state.persons.name} age = {this.state.persons.age} hobbies = {this.state.persons.hobbies}/>
        {/* <Person img={ImgTwo} name = {this.state.persons[1].name} age = {this.state.persons[1].age} hobbies = {this.state.persons[1].hobbies}/><Person img={ImgThree} name = {this.state.persons[2].name} age = {this.state.persons[2].age} hobbies = {this.state.persons[2].hobbies}/>
        <Person img={ImgFour} name = {this.state.persons[3].name} age = {this.state.persons[3].age} hobbies = {this.state.persons[3].hobbies}/> */}
      </div>
      <div>
        <a href="#" className="myButton" onClick={this.switchPictureHandlere}>Who is this?</a>
      </div>
      </Fragment>
    );
  }
}


export default App;
