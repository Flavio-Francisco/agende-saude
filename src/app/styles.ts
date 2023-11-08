import { styled } from "styled-components/native";
import { theme } from "./../../theme";

export const Conteiner = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export const ConteinerImage = styled.View`
  justify-content: center;
  align-items: center;
`;
export const ConteinerLogin = styled.View`
  width: 100%;
  justify-content: center;
  text-align: center;
`;
export const ImageLogin = styled.Image`
  width: 246px;
  height: 138px;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;
export const TextG = styled.Text`
  font-size: 48px;
  font-family: ${theme.font.roboto};
  color: ${theme.color.blue1};
  margin-bottom: 20px;
`;
export const TextP = styled.Text`
  font-size: 30px;
  font-weight: bold;
  font-family: ${theme.font.roboto};
  color: ${theme.color.blue1};
  margin-bottom: 40px;
`;
export const TextLabel = styled.Text`
  font-size: 16px;
  margin-left: 15px;
  font-family: ${theme.font.roboto};
  color: ${theme.color.black1};
`;
export const Label = styled.TextInput`
  color: ${theme.color.blue1};
  width: 90%;
  height: 58px;
  font-size: 16px;
  border-bottom-width: 1px;
  border-color: ${theme.color.white3};
  margin: 10px;
  margin-left: 15px;
`;
export const ButtomLogin = styled.TouchableOpacity`
  width: 90%;
  padding: 14px;
  justify-content: center;
  align-items: center;
  margin-top: 45px;
  border-radius: 7px;
  background-color: ${theme.color.blue2};
`;
export const TextButton = styled.Text`
  font-size: 16px;
  color: ${theme.color.white1};
  text-align: center;
  justify-content: center;
`;
export const TextRight = styled.Text`
  font-size: 16px;
  color: ${theme.color.blue1};
  text-align: right;
  margin-right: 10px;
`;
export const TextFooter = styled.Text`
  font-size: 16px;
  color: ${theme.color.blue1};
  text-align: center;
  justify-content: center;
  margin-top: 30px;
`;
export const ConteinerText = styled.TouchableOpacity`
  width: 90%;
  justify-content: end;
  align-items: end;
`;
export const Footer = styled.TouchableOpacity`
  width: 90%;
  justify-content: center;
  align-items: center;
`;
