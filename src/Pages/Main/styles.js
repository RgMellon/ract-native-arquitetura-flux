import styled from 'styled-components/native';

import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background: #000;
  padding: 10px;
  justify-content: center;
  /* align-items: center; */
`;

export const Card = styled.View`
  height: 450px;
  width: 260px;
  background: #fff;
  border-radius: 4px;
  border: 1px solid #fafafa;
  padding: 10px;
  margin-right: 20px;
`;

export const ContainerCard = styled.View`
  /* margin-top: 100px; */
`;

export const ImageProd = styled.Image`
  width: 240px;
  height: 240px;
  align-self: center;
`;

export const DescProd = styled.Text`
  align-self: center;
  /* text-align: center; */
  color: #191920;
  font-size: 16px;
  margin-top: 10px;
  padding: 0px;
  line-height: 22px;
`;

export const PriceProd = styled.Text`
  font-weight: bold;
  font-size: 19px;
  color: #000;

  margin-top: 13px;
`;

export const ButtonAddCart = styled(RectButton)`
  height: 50px;
  background: #7159c1;
  width: 95%;
  border: 1px solid #fafafa;
  border-radius: 4px;
  margin-top: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  align-self: center;
  justify-content: space-around;
  padding: 10px;
  overflow: hidden;
  margin-top: auto;
`;

export const TextButton = styled.Text`
  font-size: 16px;
  color: white;
`;

export const AmountInCart = styled.View`
  background: rgba(52, 52, 52, 0.5);
  opacity: 0.7;
  height: 50px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  opacity: 0.7;
  justify-content: space-around;
  width: 30%;
  margin-left: -28px;
  border-radius: 4px;
`;

export const Amount = styled.Text`
  color: white;
  font-size: 16px;
`;

export const List = styled.FlatList.attrs({
  horizontal: true,
  showsVerticalScrollIndicator: true,
})`
  flex: 1;
  margin-top: 80px;
`;
