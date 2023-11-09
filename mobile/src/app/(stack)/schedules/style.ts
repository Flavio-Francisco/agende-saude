import { styled } from "styled-components/native";
import { theme } from "./../../../../theme";

export const Conteiner = styled.View`
  justify-content: center;
  align-items: center;
  background-color: ${theme.color.white2};
`;
export const ConteinerHeader = styled.View`
  height: 50px;
  width: 90%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 1px ${theme.color.blue1};
  border-radius: 10px;
`;
export const Body = styled.View`
  width: 90%;
  height: 90%;
`;
export const Search = styled.TextInput`
  height: 50px;
  width: 85%;
  padding: 10px;
`;
export const SearchButtom = styled.TouchableOpacity`
  height: 50px;
  width: 15%;
  padding: 10px;
`;
