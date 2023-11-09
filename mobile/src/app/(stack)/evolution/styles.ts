import { styled } from "styled-components/native";
import { theme } from "../../../../theme";

export const Conteiner = styled.ScrollView`
  flex: 1;

  background-color: ${theme.color.white2};
`;
export const Header = styled.View`
  align-items: center;
  background-color: ${theme.color.white2};
  margin-top: 15px;
`;

export const ImageEvolition = styled.Image`
  width: 236px;
  height: 204px;
  border-radius: 15px;
  margin-top: 15px;
`;
export const Body = styled.View`
  align-items: center;
  background-color: ${theme.color.white2};
  margin-top: 15px;
`;
export const TextEvolution = styled.Text`
  width: 320px;
  font-size: 16px;
  font-family: ${theme.font.roboto};
`;
