import styled from "styled-components";
import PropTypes from "prop-types";

export const InputText = styled.input`
  width: 466px;
  height: 30px;
  padding: 5px;
  margin: ${(props) => props.$margin || "0px"};
  ${(props) => props.$marginLeft && `margin-left: ${props.$marginLeft};`}
  ${(props) => props.$marginRight && `margin-right: ${props.$marginRight};`}
  ${(props) => props.$marginTop && `margin-top: ${props.$marginTop};`}
  ${(props) => props.$marginBottom && `margin-bottom: ${props.$marginBottom};`}
  border-radius: 8px;
  border-color: var(--primary);
  @media (max-width: 768px) {
    display: flex;
    width: 80%;
  }
`;

// // Definir los estilos del checkbox
// const CheckboxContainer = styled.div`
//   display: inline-block;
//   vertical-align: middle;
// `;

// const Icon = styled.svg`
//   fill: none;
//   stroke: white;
//   stroke-width: 2px;
// `;

// const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
//   border: 0;
//   clip: rect(0 0 0 0);
//   clip-path: inset(50%);
//   height: 1px;
//   width: 1px;
//   margin: -1px;
//   overflow: hidden;
//   padding: 0;
//   position: absolute;
//   white-space: nowrap;
// `;

// const StyledCheckbox = styled.div`
//   display: inline-block;
//   width: 16px;
//   height: 16px;
//   background: ${(props) =>
//     props.checked ? "var(--primary)" : "var(--background-white)"};
//   border: 1px solid var(--primary);
//   border-radius: 3px;
//   transition: all 150ms;
//   cursor: pointer;

//   ${Icon} {
//     visibility: ${(props) => (props.checked ? "visible" : "hidden")};
//   }
// `;

// // Componente de checkbox
// export const Checkbox = ({ className, checked, ...props }) => (
//   <CheckboxContainer className={className}>
//     <HiddenCheckbox checked={checked} {...props} />
//     <StyledCheckbox checked={checked}>
//       <Icon viewBox="0 0 24 24">
//         <polyline points="20 6 9 17 4 12" />
//       </Icon>
//     </StyledCheckbox>
//   </CheckboxContainer>
// );

const CheckboxContainer = styled.div`
  position: relative;
`;

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;
// Hide checkbox visually but remain accessible to screen readers.
// Source: https://polished.js.org/docs/#hidevisually
const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  padding: 0;
  position: absolute;
  top: -4px;
  left: -5px;
  width: 20px;
  height: 20px;
  z-index: 5000;
  border: 1px solid var(--primary);
  opacity: 0;
`;

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  background: ${(props) =>
    props.checked ? "var(--primary)" : "var(--background-white)"};
  border: 1px solid var(--primary);
  border-radius: 3px;
  transition: all 150ms;

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px pink;
  }

  ${Icon} {
    visibility: ${(props) => (props.checked ? "visible" : "hidden")};
  }
`;

export const Checkbox = ({ className, checked, ...props }) => (
  <div style={{ position: "relative" }}>
    <CheckboxContainer className={className}>
      <HiddenCheckbox checked={checked} {...props} />
      <StyledCheckbox checked={checked}>
        <Icon viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </Icon>
      </StyledCheckbox>
    </CheckboxContainer>
  </div>
);

Checkbox.propTypes = {
  className: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
};
