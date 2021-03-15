import React from 'react';
import { connect } from 'react-redux';
import { buyCake } from '../../redux/cake/cakeAction';

const CakeComponent = (props) => {
    console.log(props);
    const {noOfCakes, buyCake} = props;
    return (
        <div>
            <h1>Number of Cake -- {noOfCakes}</h1>
            <button onClick={buyCake}>Buy Cake</button>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        noOfCakes: state.cake.noOfCakes
    }
}

// const mapDispatchToProps = {
//     buyCake : buyCake
// }
const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CakeComponent);