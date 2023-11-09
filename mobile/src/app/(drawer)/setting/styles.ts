import styled from "styled-components/native";
import { theme } from "../../../../theme";

export const Conteiner = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${theme.color.white1};
`;
export const Header = styled.View`
  height: 100px;
  width: 90%;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  margin-top: 20px;
  border-radius: 10px;
  background-color: ${theme.color.white2};
`;
export const Body = styled.View`
  height: 500px;
  width: 90%;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space;
  align-content: center;
  border-radius: 10px;
  background-color: ${theme.color.white2};
  margin-bottom: 20px;
  padding: 40px;
  gap: 30px;
`;
export const TextHeader = styled.Text`
  font-size: 22px;
  font-weight: bold;
  font-family: ${theme.font.roboto};
  color: ${theme.color.blue2};
`;
