import styled from 'styled-components/native';
import logo from '../../assets/images/logo.png';

export const Container = styled.View`
  height: 70px;
  background: #191920;
  padding: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.Image.attrs({
  source: logo,
  resizeMode: 'cover',
})`
  width: 190px;
  height: 24px;
  /* background: red; */
`;

export const Badge = styled.View`
  width: 18px;
  height: 18px;
  border-radius: 40px;
  background-color: #7159c1;
  align-items: center;
  justify-content: center;

  right: 23;
  top: 15;
  position: absolute;
  /* margin-left: 40px; */
`;

export const AmountOnCart = styled.Text`
  font-size: 9px;
  color: white;
`;

export const WrapperCart = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
`;
