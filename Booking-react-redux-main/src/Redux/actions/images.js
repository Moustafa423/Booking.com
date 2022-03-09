import { axiosInstance } from "../network";
export const uploadImages = (image) => (dispatch) => {
  return axiosInstance.post("upload/image/multiple", image).then((result) => {
    dispatch({ type: "UPLOAD_IMAGES", payload: result.data });
  });
};

// function App() {
//   const [selectedFile, setSelectedFile] = useState();
//   const image = useSelector((state) => state.images);
//   const dispatch = useDispatch();
//   useEffect(() => {
//     console.log(image);
//   }, [image]);
//   const onFileChange = (event) => {
//     // Update the state
//     setSelectedFile(event.target.files[0]);
//     console.log(selectedFile);
//   };

//   // On file upload (click the upload button)
//   const onFileUpload = () => {
//     // Create an object of formData
//     const formData = new FormData();

//     // Update the formData object
//     formData.append("multiple_images", selectedFile, selectedFile.name);

//     // Details of the uploaded file
//     console.log(selectedFile);

//     // Request made to the backend api
//     // Send formData object
//     dispatch(uploadImages(formData));
//   };
//   const fileData = () => {
//     if (selectedFile) {
//       return (
//         <div>
//           <h2>File Details:</h2>

//           <p>File Name: {selectedFile.name}</p>

//           <p>File Type: {selectedFile.type}</p>

//           <p>Last Modified: {selectedFile.lastModifiedDate.toDateString()}</p>
//         </div>
//       );
//     } else {
//       return (
//         <div>
//           <br />
//           <h4>Choose before Pressing the Upload button</h4>
//         </div>
//       );
//     }
//   };

//   return (
//     <div>
//       <h1>GeeksforGeeks</h1>
//       <h3>File Upload using React!</h3>
//       <div>
//         <input type="file" onChange={onFileChange} />
//         <button onClick={onFileUpload}>Upload!</button>
//       </div>
//       {fileData()}
//     </div>
//   );
// }

// export default App;
