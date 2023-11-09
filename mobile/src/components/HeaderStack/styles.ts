import { styled } from "styled-components/native";
import { theme } from "../../../theme";

export const Conteiner = styled.View`
  height: 50px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  gap: 70px;
`;
export const TextHeader = styled.Text`
  font-size: 24px;
  color: ${theme.color.blue1};
`;
export const ConteinerText = styled.TouchableOpacity`
  height: 50px;
  width: 50px;
`;
