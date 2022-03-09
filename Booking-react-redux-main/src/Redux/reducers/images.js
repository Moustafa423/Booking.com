export default function imagesReducer(state = [], action) {
  switch (action.type) {
    case "UPLOAD_IMAGES":
      return { ...state, uploadImages: action.payload };
    default:
      return state;
  }
}
