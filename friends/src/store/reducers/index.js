import { FRIEND_FETCHING, FRIEND_SUCCESS, FRIEND_FAILURE } from '../actions';

const initialState = {
    fetchingFriends: false,
    friendsFetched: false,
    friendsSaved: false,
    savingFriends: false,
    updatingFriend: false,
    friendUpdated: false,
    deletingFriend: false,
    friendDeleted: false,
    friends: [],
    error: null
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FRIEND_FETCHING:
            return {
                ...state,
                fetchingFriends: true
            }

        case FRIEND_SUCCESS:
            return{
                ...state,
                fetchingFriends: false,
                friends: action.payload,
                error: null
            }

        case FRIEND_FAILURE:
            return {
                ...state,
                fetchingFriends: false,
                error: action.payload
            }

        default:
            return state;
    }
}

export default reducer;