import styled from "styled-components";
import Logo from "./Logo";
import { ChangeTheme } from "./ChangeTheme";

const NavbarContainer = styled.div`
  background-color: #1d252d;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 63px;
  padding: 10px 20px;
  margin-bottom: 47px;
  div {
    display: flex;
    align-items: center;
  }
`;

export const NavBar = () => {
  return (
    <div>
      <NavbarContainer>
        <div>
          <Logo width="100px"></Logo>
          <div>
            <ChangeTheme />
          </div>
        </div>
      </NavbarContainer>
    </div>
  );
};
