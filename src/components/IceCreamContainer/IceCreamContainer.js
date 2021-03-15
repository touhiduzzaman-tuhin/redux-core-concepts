import React from 'react';
import { connect } from 'react-redux';
import { buyIceCream } from '../../redux/iceCreame/iceCreameAction';

const IceCreamContainer = (props) => {
    const {noOfIceCream, buyIceCream} = props;
    return (
        <div>
            <h1>Total Ice Cream -- {noOfIceCream}</h1>
            <button onClick={buyIceCream}>Buy Ice cream</button>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        noOfIceCream : state.iceCream.noOfIceCream
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyIceCream : () => dispatch(buyIceCream())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);