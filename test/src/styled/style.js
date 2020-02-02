import styled from "styled-components";

export const StyledCard = styled.img`
  height: 75px;
  width: 75px;
  opacity: ${props => {
    switch (props.status) {
      case "idle":
        return 0;
      case "checked":
        return 1;
      case "disabled":
        return 0.7;
      default:
        return 0;
    }
  }};
`;
export const StyledCardWrapper = styled.button`
  background-color: ${props => {
    switch (props.status) {
      case "disabled":
        return "#BAD6DC";
      default:
        return "#fff";
    }
  }};
  height: 80px;
  width: 80px;
  border-radius: 8px;
  padding: 2px;
`;

export const StyledResetButton = styled.button`
  background-color: rgb(1, 102, 117);
  border-color: rgb(1, 102, 117);
  color: #fff;
  border-radius: 5px;
  height: 40px;
  width: 100px;
  font-size: 14px;
`;

export const StyledCardsWrapper = styled.div`
  display: inline-grid;
  grid-template-columns: 80px 80px 80px 80px;
  grid-template-rows: 80px 80px 80px 80px;
  grid-column-gap: 15px;
  grid-row-gap: 15px;
`;

export const StyledGameWrapper = styled.div`
  background-color: #017d8f;
  display: inline-grid;
  grid-template-columns: 185px 185px;
  grid-template-rows: 50px 400px 50px;
  padding: 30px;
`;

export const StyledSubtitle = styled.span`
  color: rgba(255, 255, 255, 0.5);
`;

export const StyledNumbers = styled.span`
  color: rgb(255, 255, 255);
  font-size: 28px;
`;
