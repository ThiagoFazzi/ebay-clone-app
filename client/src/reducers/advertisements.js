import { ADVERTISEMENTS_FETCHED } from "../actions/advertisements";

export default (state = null, action) => {
  switch (action.type) {
    case ADVERTISEMENTS_FETCHED:
        return action.advertisements

    default:
        return state
  }
}