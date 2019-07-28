import styled from 'styled-components/native';

import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background-color: #000;
  align-items: center;
`;

export const CardContainer = styled.ScrollView`
  /* height: 400px; */
  margin-top: 40px;
  width: 90%;
  background: #fff;
  border: 1px solid #fafafa;
  border-radius: 4px;
  padding: 10px;
`;

export const HeaderContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
export const ImagePro = styled.Image`
  width: 100px;
  height: 100px;
  border: 1px solid #fafafa;
`;

export const DescProd = styled.Text`
  font-size: 14px;
  color: #191920;
  width: 180px;
  margin-left: 20px;
`;
export const InfoProd = styled.View`
  justify-content: center;
`;
export const PriceProd = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-left: 20px;
`;
export const DeleteProd = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const ContainerSubTotal = styled.View`
  margin-top: 20px;
  width: 98%;
  padding: 10px;
  background: #ddd;
  flex-direction: row;
  justify-content: space-between;
`;
export const ChangeAmount = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ButtonControllerAmountSub = styled.TouchableOpacity`
  margin-left: 10px;
`;
export const ButtonControllerAmountSum = styled.TouchableOpacity`
  margin-right: 10px;
`;

export const Amount = styled.TextInput.attrs({
  readonly: true,
})`
  background: #fff;
  padding: 5px;
  margin: 0 5px;
  border: 1px solid #ddd;
  border-radius: 4px;
  min-width: 52px;
`;

export const SubTotal = styled.Text`
  font-weight: bold;
  font-size: 20px;
  color: black;
`;

export const ContainerTotal = styled.View`
  margin-top: 60px;
  align-self: center;
`;

export const PriceTotal = styled.Text`
  font-size: 30px;
  color: black;
  font-weight: bold;
  margin-top: 10px;
`;
export const TitleTotal = styled.Text`
  font-size: 18px;
  color: #ddd;
  font-weight: 700;
  text-align: center;
`;

export const ButtonFinishedOrder = styled(RectButton)`
  width: 80%;
  height: 50px;
  background: #7159c1;
  border: 1px solid #fff;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  align-self: center;
  margin-bottom: 40px;
`;

export const ButtonFinishedOrderText = styled.Text`
  color: white;
  font-size: 18px;
`;

export const Item = styled.View`
  margin-top: 10px;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: true,
})`
  /* flex: 1;
  margin-top: 80px; */
`;
