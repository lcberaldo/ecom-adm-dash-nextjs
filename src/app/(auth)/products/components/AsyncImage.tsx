'use client'

import Spinner from "../../../components/Spinner"
import Image, { StaticImageData } from "next/image"
import { FormEvent, SyntheticEvent, useEffect, useRef, useState } from "react"

type AsyncImageProps = {
  image_url: string | StaticImageData
  name: string
}

export default function AsyncImage({ image_url, name }: AsyncImageProps) {
  const [reveal, setReveal] = useState(false);
  const visibility = reveal ? "visible" : "hidden";
  const loader = reveal ? "none" : "flex";

  const hiddenFileInput = useRef<HTMLInputElement>(null);

  const [file, setFile] = useState<File>();
  const [fileDataURL, setFileDataURL] = useState<any>();

  const changeHandler = (e: SyntheticEvent) => {
    const target = e.target as HTMLInputElement;
    const files = target.files as FileList;
    const file = files[0]

    setFile(file);
  }

  useEffect(() => {
    const fileReader = new FileReader();

    let isCancel = false;
    if (file) {
      fileReader.onload = (e) => {

        if (!isCancel) {
          setFileDataURL(e.target?.result)
        }
      }
      fileReader.readAsDataURL(file);
    }

    return () => {
      isCancel = true;
      if (fileReader && fileReader.readyState === 1) {
        fileReader.abort();
      }
    }

  }, [file]);


  const handleClick = (event: FormEvent) => {
    hiddenFileInput.current?.click();
  };



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


      <input
        type="file"
        onChange={changeHandler}
        ref={hiddenFileInput}
        style={{ display: "none" }}
        name="image_url"
      />


      <button onClick={handleClick} className="w-[340px] h-auto" >
        <Image

          width={340} height={260}
          src={fileDataURL || image_url} alt={name}
          onError={() => setReveal(true)}
          onLoad={() => setReveal(true)}
          style={{ visibility }}
        />
      </button>

    </div>
  )
}
