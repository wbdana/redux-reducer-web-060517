export function manageFriends(state, action){
  switch (action.type) {
    case 'ADD_FRIEND':
      return Object.assign({}, {friends: [...state.friends, action.friend]})
    case 'REMOVE_FRIEND':
      const indexToRemove = state.friends.findIndex( (friend) => friend.id === action.id )
      const firstBunch = Object.assign([], state.friends.slice(0, indexToRemove))
      const secondBunch = Object.assign(state.friends.slice(indexToRemove + 1))
      return Object.assign({friends: firstBunch.concat(secondBunch)})
    default:
      return state
  }
}
