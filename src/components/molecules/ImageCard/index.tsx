import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React from "react";

interface ImageCardProps {
  image?: string | StaticImport;
}
const ImageCard = ({ image }: ImageCardProps) => {
  return (
    <div className="relative w-1/4 bg-white m-2 p-2 border border-gray-400 rounded-20">
      <figure className="item-thumbnail">
        <Image src={image!} alt="" className="rounded-20 w-full" />
      </figure>
    </div>
  );
};

export default ImageCard;
