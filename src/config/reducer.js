const initialState = {
    users : [
        {
            id: 1,
            name: 'Aymen Jeddad',
            email: 'aymanejeddad@gmail.com'
        },
        {
            id: 2,
            name: 'Malake Jeroundi',
            email: 'malakejeroundi@gmail.com'
        }
    ]
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_USER":
        return { ...state, users: [...state.users, action.payload] };
      case "Update_User":
        const user = state.users.find((u) => u.id === parseInt(action.payload));
        if (user) {
          user.name = action.payload.name;
          user.email = action.payload.email;
        }
        return state;
      case "Delete_User":
        return {
          ...state,
          users: [...state.users.filter((u) => u.id !== parseInt(action.payload))],
        };
      default:
        return state;
    }
  };
  
export default reducer;