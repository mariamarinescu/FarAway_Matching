export  default  function (state  = {}, action) {
    switch (action.type) {
        case  "CREATE_SESSION":
            return { ...state, token:  action.token, msg: action.msg, user: action.user}
        default:
            return  state;
    }
}