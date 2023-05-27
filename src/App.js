import { useCallback, useEffect, useState } from "react";
import "./App.css";
import Photos from "./components/Photos";
import axios from "axios";

function App() {
  const [photos, setPhotos] = useState([]);

  const fetchPostHandler = useCallback(async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/photos"
      );
      console.log(response);

      const transformedPost = response.data.map((postData) => {
        return {
          id: postData.id,
          albumIdData: postData.albumId,
          thumbnailUrlData: postData.thumbnailUrl,
          titleData: postData.title,
        };
      });
      setPhotos(transformedPost);
    } catch (error) {
      console.log(error);
    }
  },[]);

  useEffect(() => {
    fetchPostHandler();
  }, [fetchPostHandler]);

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={fetchPostHandler}>Get Post</button>
        <Photos post={photos} />
      </header>
    </div>
  );
}

export default App;
