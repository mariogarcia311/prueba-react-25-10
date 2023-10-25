import PropTypes from "prop-types";
import styled from "styled-components";

export const FlexContainer = styled.div`
  /* height: 100%;
  width: 100%; */
  display: flex;
  flex-direction: ${(props) => props.$direction || "column"};
  justify-content: ${(props) => props.$justifyContent || "left"};
  align-items: ${(props) => props.$alignItems || "start"};
`;

FlexContainer.propTypes = {
  $direction: PropTypes.string,
  $justifyContent: PropTypes.string,
  $alignItems: PropTypes.string,
};