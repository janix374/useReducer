//in this case hobbiesReducer state is hobbies
const hobbiesReducer = (state, actions) => {
    switch(actions.type){
        case 'REMOVE_HOBBIES':
            return state.filter(hobbie => hobbie !== actions.payload)
        case 'ADD_HOBBIES':
            return state.concat(actions.payload)
        case 'RESET':
            return actions.payload
        default:
            return state
    }
}

export { hobbiesReducer as default }