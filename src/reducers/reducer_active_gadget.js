export default function(state = null, action) {
  switch(action.type) {
    case 'GADGET_SELECTED':
      return action.payload;
  }
  return state;
}
