'use client'

import Spinner from "../../../components/Spinner"
import Image, { StaticImageData } from "next/image"
import { useState } from "react"

type AsyncImageProps = {
  image_url: string | StaticImageData
  name: string
}

export default function AsyncImage({ image_url, name }: AsyncImageProps) {
  const [reveal, setReveal] = useState(false);
  const visibility = reveal ? "visible" : "hidden";
  const loader = reveal ? "none" : "flex";

  return (
    <div>
      <span
        style={{
          display: loader,
        }}
        className="md:w-[340px] md:h-[260px] justify-center items-center w-full h-[346px]"
      >
        <Spinner />
      </span>

      <Image
        width={340} height={260}
        src={image_url} alt={name}
        onError={() => setReveal(true)}
        onLoad={() => setReveal(true)}
        style={{ visibility }}
      />
    </div>
  )
}
