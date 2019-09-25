// a change action creator
// accepts an amount variable so we can change it easily
export const p1 = () => {
  return {
    type: "player1",
  };
};

export const p2 = () => {
  return {
    type: "player2",
  };
};

// a reset action creator
// doesn't need any additional data, so no parameters
export const reset = () => {
  return {
    type: "reset",
  };
};

export const submit = () => {
 return {
   type: "submit",
// we can use the action creator to tidy up the data
// make sure it's definitely a number before it
// gets to the reducer
   
 };
};