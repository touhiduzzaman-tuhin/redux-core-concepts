import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../../redux/user/userActions';

const UserContainer = (props) => {
    const {fetchUser, userData} = props;
    // console.log(props);
    useEffect( () => {
        fetchUser()
    }, [])

    return userData.loading ? (
        <h1>Loading...</h1>
    ) : userData.error ? (
        <h1>{userData.error}</h1>
    ) : (
        <div>
            <h1>User List</h1>
            <div>
                {
                    userData && userData.users && userData.users.map(usr => <p>{usr.name}</p>)
                }
            </div>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        userData: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUser : () => dispatch(fetchUser())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);