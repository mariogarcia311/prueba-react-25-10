import PropTypes from "prop-types";
import styled from "styled-components";

export const Text = styled(({ as = "p", ...rest }) => {
  const Component = as;
  return <Component {...rest} />;
})`
  font-size: ${(props) => props.$size || "12px"};
  color: ${(props) => props.$color || "var(--description)"};
  margin: ${(props) => props.$margin || "0px"};
  font-weight: ${(props) => props.$fontWeight || "400"};
  ${(props) => props.$type && `color:var(--text-${props.$type});`}
  ${(props) => props.$marginLeft && `margin-left: ${props.$marginLeft};`}
  ${(props) => props.$marginRight && `margin-right: ${props.$marginRight};`}
  ${(props) => props.$marginTop && `margin-top: ${props.$marginTop};`}
  ${(props) => props.$marginBottom && `margin-bottom: ${props.$marginBottom};`}
`;

Text.propTypes = {
  as: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "p", "span", "label"]),
  $size: PropTypes.string,
  $bold: PropTypes.bool,
  $color: PropTypes.string,
  $margin: PropTypes.string,
  $fontWeight: PropTypes.string,
};
