import { useState } from "react";
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

export const InputFile = ({ fileTypes }) => {
  const [dragging, setDragging] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);

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
    setSelectedFiles(files);
  };

  const handleFileInput = (e) => {
    const files = Array.from(e.target.files);
    setSelectedFiles(files);
  };

  return (
    <FlexContainer>
      <InputContainer
        className={`file-upload-container ${dragging ? "dragging" : ""}`}
        onDragEnter={handleDragEnter}
        onDragOver={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <input
          type="file"
          id="file-input"
          multiple
          onChange={handleFileInput}
          style={{ display: "none" }}
        />
        <FlexContainer
          $direction="row"
          $justifyContent="center"
          $alignItems="center"
        >
          <img src={iconDocument} />
          <Text as="label" $fontWeight="900" $marginRight="30px">
            Subir o arrastrar el archivo aquí
          </Text>
          <Text as="label" $fontWeight="900">
            {fileTypes}
          </Text>
        </FlexContainer>
      </InputContainer>
    </FlexContainer>
  );
};

InputFile.propTypes = {
  fileTypes: PropTypes.string,
};
