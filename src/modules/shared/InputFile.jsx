import { useRef, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Text } from "./Text";
import { FlexContainer } from "./FlexContainer";
import iconDocument from "../../assets/shared/IconDocument.svg";

const InputContainer = styled.div`
  border-radius: 8px;
  border: 1px dashed var(--primary);
  background: var(--background-white);
  padding: 8px 14px;
  max-width: 500px;
`;

export const InputFile = ({ fileTypes, accept, setFiles }) => {
  const [dragging, setDragging] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const inputRef = useRef(null);

  const handleDragEnter = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    const files = Array.from(e.dataTransfer.files);
    const filesFiltered = files.filter((file) => {
      return accept.includes(file.type);
    });
    setSelectedFiles(filesFiltered);
    setFiles(filesFiltered);
  };

  const handleFileInput = (e) => {
    const files = Array.from(e.target.files);
    setSelectedFiles(files);
    setFiles(files);
  };

  return (
    <FlexContainer style={{ cursor: "pointer" }}>
      <InputContainer
        style={{ cursor: "pointer" }}
        className={`${dragging ? "dragging" : ""}`}
        onDragEnter={handleDragEnter}
        onDragOver={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => inputRef.current && inputRef.current.click()}
      >
        <input
          ref={inputRef}
          type="file"
          id="file-input"
          multiple
          onChange={handleFileInput}
          style={{ display: "none" }}
          accept={accept}
        />
        <FlexContainer
          $direction="row"
          $justifyContent="center"
          $alignItems="center"
        >
          <img src={iconDocument} />
          <Text
            style={{ cursor: "pointer" }}
            as="label"
            $fontWeight="900"
            $marginRight="30px"
          >
            Subir o arrastrar el archivo aquí
          </Text>
          <Text as="label" $fontWeight="900" style={{ cursor: "pointer" }}>
            {fileTypes}
          </Text>
        </FlexContainer>
      </InputContainer>
    </FlexContainer>
  );
};

InputFile.propTypes = {
  fileTypes: PropTypes.string,
  accept: PropTypes.string,
  setFiles: PropTypes.func,
};
