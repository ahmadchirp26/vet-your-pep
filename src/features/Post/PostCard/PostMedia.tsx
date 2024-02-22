import Image from "next/image";
import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

type Props = {
  images: Array<string>;
};

const minimumDisplayableImages = 3;
const PostMediaLightbox = ({ images }: Props) => {
  const [open, setOpen] = useState(false);
  const remainingImages = images.slice(minimumDisplayableImages);
  if (!remainingImages[0]) {
    return null;
  }
  return (
    <div className="relative bg-opacity-50">
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={images.map((src) => ({ src }))}
      />
      <div className="relative w-full" style={{ width: "400px" }}>
        <Image
          src={remainingImages[0]}
          alt="post_image"
          layout="fill"
          className="rounded-xl"
        />
        <div
          className="bg-black opacity-80 flex justify-center items-center rounded-xl absolute inset-0 cursor-pointer z-50"
          onClick={() => setOpen(true)}
        >
          <span className="text-white text-2xl">+{remainingImages.length}</span>
        </div>
      </div>
    </div>
  );
};

const PostMedia = (props: Props) => {
  const images = props.images.slice(0, minimumDisplayableImages);
  return (
    <div
      className={`grid ${images.length >= 2 ? "grid-cols-2" : "grid-cols-1"} gap-2`}
    >
      {images.map((image, index) => (
        <div
          key={index}
          className="relative w-full"
          style={{ height: "500px" }}
        >
          <Image
            src={image}
            alt="post_image"
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
          />
        </div>
      ))}
      <PostMediaLightbox images={props.images} />
    </div>
  );
};

export default PostMedia;
