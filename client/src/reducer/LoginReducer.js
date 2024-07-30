const DETAILS = {
    USERNAME: 'username',
    PASSWORD: 'password',
    ERROR: 'error',

}

const DETAILS_DEFAULT = {
    [DETAILS.USERNAME]: '',
    [DETAILS.PASSWORD]: '',
    [DETAILS.ERROR]: '',
}

const reducer = (state, action) => {

    switch (action.type) {
        case DETAILS.PASSWORD:
            return {
                ...state,
                [DETAILS.ERROR]: '',
                [action.type]: action.payload,

            }

        case DETAILS.USERNAME:
            return {
                ...state,
                [DETAILS.ERROR]: '',
                [action.type]: action.payload,
            }
        case DETAILS.ERROR:
            return {
                ...state,
                [action.type]: action.payload,
            }

        default: throw new Error("Unhandled state");
    }
}

export {
    DETAILS,
    DETAILS_DEFAULT,
    reducer
}