export function selectGadget(gadget) {
  return {
    type: 'GADGET_SELECTED',
    payload: gadget
  };
}
