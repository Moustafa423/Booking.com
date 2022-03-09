import { combineReducers } from "redux";
import apartmentReducer from "./reducers/apartment";
import hotelReducer from "./reducers/hotel";
import campGroundReducer from "./reducers/campground";
import userReducer from "./reducers/user";
import imagesReducer from "./reducers/images";
import propertysFilter from "./reducers/PopsFilter";
import commentReducer from "./reducers/comment";
import postReducer from "./reducers/post";
 import { langReducer } from "./reducers/lang";
const rootReducer = combineReducers({
  hotel: hotelReducer,
  apartment: apartmentReducer,
  campGround: campGroundReducer,
  user: userReducer,
  images: imagesReducer,
  reviewSorting: propertysFilter,
  comment: commentReducer,
  post: postReducer,
  lang: langReducer,
});

export default rootReducer;
