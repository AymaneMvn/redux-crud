export const addUserAction = (user) => {
    return {type : 'Add_User' , payload:user }
}

export const updateUserAction = (newUser) => {
    return { type: "Update_User", payload: newUser };
  };

export const deleteUserAction = (id) => {
    return {type : 'Delete_User' , payload:id}
}