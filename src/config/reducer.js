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
      case "Add_User":
        return { ...state, users: [...state.users, action.payload] };
        case "Update_User":
            const updatedUsers = state.users.map((user) => {
              if (user.id === parseInt(action.payload.id)) {
                return {
                  ...user,
                  name: action.payload.name,
                  email: action.payload.email,
                };
              }
              return user;
            });
            return { ...state, users: updatedUsers };
          
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