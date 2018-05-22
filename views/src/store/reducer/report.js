export default function(state = {}, action) {
    let {type} = action;
    switch (type) {
        case `REPORT/FETCH_ERROR_REPORT_DATA`:
            return Object.assign({}, state, {params: action.params});
        case `REPORT/FETCH_ERROR_REPORT_DATA_SUCCESS`:
            return Object.assign({}, state, {data: action.data});
        case `REPORT/FETCH_ERROR_REPORT_DATA_ERROR`:
            return Object.assign({}, state, {error: action.error});
        default:
            return state;
    }
}
