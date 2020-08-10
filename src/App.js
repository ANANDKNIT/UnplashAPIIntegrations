import React, {useEffect, useState} from "react";
import "./App.css";
import SearchUI from "./components/search";
import ModalUI from "./components/modal";

// page size
const per_page = 9;

const App = () => {

  const [imagesData, setImagesData] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  // fetch data from unplash API
  const handleFetchData = () => {
    fetch(
      `https://api.unsplash.com/photos?page=${currentPage}&per_page=${per_page}&client_id=_Ag-aMGpca0__bTy3sXiWNS9EIg87pJeelgF76yRy08`
    )
      .then((response) => response.json())
      .then((data) => {
        const updateData = [...imagesData, ...data];
        setImagesData(updateData);
      });
  };

  // search Image
  const searchImage = (query) =>{
    fetch(
      `https://api.unsplash.com/search/photos?query=${query}page=${currentPage}&per_page=${per_page}&client_id=_Ag-aMGpca0__bTy3sXiWNS9EIg87pJeelgF76yRy08`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setImagesData(data.results);
      });
  }
  useEffect(() => {
    handleFetchData();
  }, []);

  const handleSearch = (value) => {
    searchImage(value);
  };
  const handleSelectImage = (item) => {
    setSelectedImage(item);
  };

  return (
    <div className="App">
      <header className="App-header">
        <SearchUI handleSearch={handleSearch} />
      </header>
      <div className="image-wrapper">
        {imagesData.map((item) => {
          return (
            <img
              src={item.urls.small}
              key={item.id}
              className="image"
              onClick={() => handleSelectImage(item)}
            />
          );
        })}
      </div>
      {selectedImage && (
        <ModalUI
          show={true}
          clicked={() => {
            setSelectedImage(null);
          }}
        >
          <div className="show-image-wrapper">
            <img src={selectedImage.urls.regular} className="show-image" />
          </div>
          <div className="download-wrapper">
            <button className="download-button">
              <a href={selectedImage.urls.regular} download>
                Download
              </a>
            </button>
          </div>
        </ModalUI>
      )}
      <div className="download-wrapper">
        <button
          className="download-button"
          onClick={() => {
            setCurrentPage(currentPage + 1);
            handleFetchData();
          }}
        >
          Load More
        </button>
      </div>
    </div>
  );
};

export default App;
