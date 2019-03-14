const eventFetchedReducer = (state = null, action = {}) => {
  switch (action.type) {
    case 'EVENT_FETCHED':
    return action.event
    default:
    return state
  }
}

export default eventFetchedReducer
