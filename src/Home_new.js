import React, { useState, useEffect } from "react";
import ImageCard from "./components/ImageCard";
import ImageSearch from "./components/ImageSearch";
import { API } from "aws-amplify";

 function Home() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("images");

  useEffect(() => {
    const getData = async () => { 
        const response = await API.get("photostockapi", "/image/imagelist");
      // console.log(response.data.Items);
      // this.setState({images: response.data.Items});
        setImages(response.data.Items);
        setIsLoading(false);
       console.log(response.data.Items);
      };
      getData();  
  }, [term]);

  return (
    <div className="container mx-auto p-4 md:p-4 lg:p-0">
      <ImageSearch searchText={(text) => setTerm(text)} />
      {!isLoading && images.length === 0 && (
        <h1 className="text-5xl text-center mt-32">No Images found !</h1>
      )}
      {isLoading ? (
        <h1 className="text-6xl text-center mt-32">Image Loading</h1>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" style={{display: 'flex', flexDirection: 'row', marginLeft: 30, marginTop: 20}}>
          {images.map((image) => (
            <ImageCard key={image.id} image={image} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;