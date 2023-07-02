export const addUserAction = (user) => {
    return {type : 'Add_User' , payload:user }
}

export const updateUserAction = (newuser) => {
    return {type : 'Update_User' , payload:newuser}
}

export const deleteUserAction = (id) => {
    return {type : 'Delete_User' , payload:id}
}