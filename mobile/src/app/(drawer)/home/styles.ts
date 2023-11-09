import styled from "styled-components/native";
import { theme } from "../../../../theme";

export const Conteiner = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${theme.color.white1};
`;
export const Header = styled.View`
  height: 180px;
  width: 90%;
  justify-content: center;
  align-items: center;
  background-color: ${theme.color.white1};
`;
export const Body = styled.View`
  height: 463px;
  width: 90%;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space;
  align-content: center;
  border-radius: 10px;
  background-color: ${theme.color.white2};
  margin-bottom: 60px;
  padding: 40px;
  gap: 30px;
`;
export const ButtomBody = styled.TouchableOpacity`
  height: 136px;
  width: 121px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: ${theme.color.white1};
  gap: 20px;
`;
export const TextButton = styled.Text`
  font-size: 15px;
  font-weight: bold;
  text-align: center;
  color: ${theme.color.blue1};
`;
export const Imagebody = styled.Image`
  width: 55px;
  height: 55px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border-radius: 50px;
`;
export const TextHeaderHome = styled.Text`
  font-size: 28px;
  font-weight: bold;
  font-family: ${theme.font.roboto};
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

//Header drawer
export const TextHeader = styled.Text`
  font-size: 28px;
  font-family: ${theme.font.roboto};
  color: ${theme.color.blue1};
  margin-bottom: 10px;
`;
export const ConteinerHeader = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  margin-left: 30px;
`;
export const ImageHeader = styled.Image`
  width: 60px;
  height: 60px;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  margin-right: 0;
  border-radius: 35px;
`;
