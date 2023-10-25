import styled from "styled-components";
import PropTypes from "prop-types";

const StyledDiv = styled.div`
  width: 83px;
  height: 24px;
  flex-shrink: 0;
  border-radius: 12px;
  border: 1px solid var(#c1c6c8);
  background: var(--background-white);
  display: flex;
  align-items: center;
  gap: 5px;
  padding-left: 5px;
  justify-content: left;
  font-size: 10px;
  font-weight: 900;
`;

const CircleStatus = styled.div`
  width: 8px;
  height: 8px;
  flex-shrink: 0;
  border-radius: 4px;
  background-color: ${(props) => props.$color || "blue"};
`;

export const CustomStatus = ({ text }) => {
  const colors = {
    Pendiente: "#FDDA25",
    Progreso: "#00B5E2",
    Pagado: "#73CF67",
    Rechazada: "#c41818",
  };

  return (
    <StyledDiv>
      <CircleStatus $color={colors[text.trim()]} />
      {text.trim()}
    </StyledDiv>
  );
};

CustomStatus.propTypes = {
  text: PropTypes.string,
};
