const loginReducer = (state, action) => {
    switch (action.type) {
        case 'userId': {
            const notValidUserID = !action.payload.userId || action.payload.userId.trim() === "";
            return {
                ...state,
                userFormValue: {
                    ...state.userFormValue,
                    userId: action.payload.userId
                },
                userFormValidate: {
                    ...state.userFormValidate,
                    userIdErr: notValidUserID,
                    userIdErrorMessage: notValidUserID ? "User ID required!" : ""
                }
            }
        }
        case 'userPassword': {
            const notValidUserPassword = !action.payload.userPassword || action.payload.userPassword.trim() === "";
            return {
                ...state,
                userFormValue: {
                    ...state.userFormValue,
                    userPassword: action.payload.userPassword
                },
                userFormValidate: {
                    ...state.userFormValidate,
                    userPasswordErr: notValidUserPassword,
                    userPasswordErrorMessage: notValidUserPassword ? "User Password required!": ""
                }
            }
        }
        case 'formErrorUserId': {
            return {
                ...state,
                userFormValidate: {
                    ...state.userFormValidate,
                    userIdErr: true,
                    userIdErrorMessage: "User ID required!"
                }
            }
        }
        case 'formErrorUserPassword': {
            return {
                ...state,
                userFormValidate: {
                    ...state.userFormValidate,
                    userPasswordErr: true,
                    userPasswordErrorMessage: "User Password required!"
                }
            }
        }
        default:
            return state
    }
}

const loginFormState = {
    userFormValue: {
        userId: "",
        userPassword: ""
    },
    userFormValidate: {
        userIdErr: undefined,
        userPasswordErr: undefined,
        userIdErrorMessage: "",
        userPasswordErrorMessage: ""
   }
}

export {loginReducer, loginFormState}