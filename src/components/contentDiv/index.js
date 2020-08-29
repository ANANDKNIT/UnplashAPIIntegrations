import React, {useEffect, useState} from "react";
import useStyles from "./style";
import Modal from "../modal";
import {fetchImages} from "../../api/unplashApi";
import Spinner from "../spinner";

const limit = process.env.LIMIT || 10;

const ContentDiv = () => {
  const classes = useStyles();
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [spinner, setSpinner] = useState(false);
  const getImages = async () => {
    setSpinner(true);
    const response = await fetchImages(currentPage, limit);
    console.log(response);
    setImages([...images, ...response]);
    setSpinner(false);
  };

  useEffect(() => {
    setSpinner(true);
    getImages();
  }, []);

  const handleSelectImage = (item) => {
    setSelectedImage(item);
    setModalOpen(true);
  };
  return (
    <>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <div className={classes.imagesWrapper}>
          {images.map((item) => {
            return (
              <img
                src={item.urls.thumb}
                alt={item.alt_description}
                key={item.id}
                className={classes.image}
                onClick={() => handleSelectImage(item)}
              />
            );
          })}
        </div>
        {images.length ? (
          <div className={classes.loadButtonWrapper}>
            <button
              className={classes.loadButton}
              onClick={() => {
                setCurrentPage(currentPage + 1);
                getImages();
              }}
            >
              Load More
            </button>
          </div>
        ) : null}
        {spinner ? <Spinner /> : null}
      </main>
      <Modal
        open={modalOpen}
        data={selectedImage}
        clicked={() => {
          setModalOpen(!modalOpen);
        }}
      />
    </>
  );
};

export default ContentDiv;
