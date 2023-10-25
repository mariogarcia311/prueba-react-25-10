import PropTypes from "prop-types";
import styled from "styled-components";
import { Text } from "./Text";

const ToggleContainer = styled.label`
  display: flex;
  align-items: center;
  user-select: none;
  cursor: pointer;
`;

const ToggleInput = styled.input.attrs({ type: "checkbox" })`
  display: none;
`;

const ToggleSlider = styled.span`
  position: relative;
  width: 38px;
  height: 18px;
  border-radius: 18px;
  background-color: #ccc;
  transition: background-color 0.3s;

  &::before {
    content: "";
    position: absolute;
    width: 19px;
    height: 18px;
    border-radius: 50%;
    background-color: #fff;
    transition: transform 0.3s;
  }

  ${ToggleInput}:checked + & {
    background-color: var(--primary);

    &::before {
      transform: translateX(19px);
    }
  }
`;

export const Toggle = ({ label, checked, onChange }) => {
  return (
    <div>
      <Text as={"span"} $color="white" $margin="0px 15px 0px 47px">
        {label}
      </Text>
      <label>
        <ToggleContainer>
          <ToggleInput checked={checked} onChange={onChange} />
          <ToggleSlider />
        </ToggleContainer>
      </label>
    </div>
  );
};

Toggle.propTypes = {
  label: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
};
