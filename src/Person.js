import React from 'react';

const Person = (props) => {
    return (

        <body>
            <div className="cardClass">

                <img className="img1" src={props.image}/>

                    <div className="border">
                    <div className="stuff">
                         <p className="name"> Name: {props.name} </p>
                         <p className="age"> Age: {props.age} </p>
                        <p classname="hobbies1"> Hobbie One: {props.hobbies[0]} </p>
                         <p classname="hobbies2"> Hobbie Two: {props.hobbies[1]} </p>
                    </div>
                    </div>
        
            </div>
        </body>
    )
}

export default Person;