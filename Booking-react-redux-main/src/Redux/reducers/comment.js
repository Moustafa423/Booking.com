export default function commentReducer(state = [], action) {
    switch (action.type) {
        case "GET_COMMENT_BY_ID":
            return { ...state,getCommentById: action.payload };
        case "GET_COMMENT_BY_POST_ID":
            return { ...state,getCommentByPostId:action.payload };
        case "POST_COMMENT":
            return { ...state,postComment:action.payload };
        case "PUT_COMMENT_BY_ID":
            return { ...state,putCommentById:action.payload };
        case "DELETE_COMMENT_BY_ID":
            return { ...state,deleteCommentById:action.payload };
        case "GET_REPLY_BY_ID":
            return { ...state,getReplyById:action.payload };
        case "POST_REPLY_BY_COMMENT_ID":
            return { ...state,postReplyByCommentId:action.payload };
        default:
            return state;
    }
}
