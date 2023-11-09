import { styled } from "styled-components/native";
import { theme } from "./../../../theme";

export const Conteiner = styled.View`
  width: 100%;
  background-color: ${theme.color.white2};
  border: 1px ${theme.color.blue1};
  border-radius: 10px;
  margin-top: 15px;
  padding: 10px;
`;
export const ViewText = styled.View`
  width: 90%;
  flex-direction: row;
`;
export const TextBold = styled.Text`
  font-size: 16px;
  font-weight: bold;
  font-family: ${theme.font.roboto};
`;
export const Text1 = styled.Text`
  font-size: 16px;
  font-family: ${theme.font.roboto};
`;
