export default function propertysFilter(state = [], action) {
    switch (action.type) {
        case"GET_TOP_REVIEWS": 
        return { ...state, getTopRev: action.payload };
        case"GET_TOP_STARS": 
        return { ...state, getTopStars: action.payload };
        case"GET_LOW_STARS": 
        return { ...state, getLowStars: action.payload };
        default: return state;



    }
}