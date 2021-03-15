import React, { useState } from 'react';
import { connect } from 'react-redux';
import { buyCake } from '../../redux/cake/cakeAction';

const NewCakeContainer = (props) => {
    const [number, setNumber] = useState(1);
    const {noOfCakes, buyCake} = props;
    return (
        <div>
            <h1>Total Number Of Cake -- {noOfCakes}</h1>
            <input type="text" name="numberOfCake" id="" value={number} onChange={event => setNumber(event.target.value)}/>
            <button onClick={() => buyCake(number)}>Add {number} Cake</button>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        noOfCakes : state.cake.noOfCakes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyCake : (number) => dispatch(buyCake(number))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);