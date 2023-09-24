import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { BiImageAdd } from "react-icons/bi";
import { TbHandMiddleFinger, TbHandClick } from "react-icons/tb";
export default function Index({
  icon = <BiImageAdd size="1.7em" />,
  onDropFile,
  style = {},
  className = "",
  dropText = "Vel kon Drop the files here ...",
  text = "Drag 'n' drop some files here, or click to select files",
}) {
  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
    // console.log(acceptedFiles);

    onDropFile(acceptedFiles);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div
      {...getRootProps()}
      style={style}
      className={`customDropZone p8 radius-2 ${className} ${isDragActive ? 'dragActive' : ''}`}
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <div className="flex column alignCenter">
          <TbHandClick size="1.7em" />
          <p className="mt2 fs-150">{dropText}</p>
        </div>
      ) : (
        <div className="flex column alignCenter">
          {icon}
          <p className="mt2 fs-150">{text}</p>
        </div>
      )}
    </div>
  );
}
