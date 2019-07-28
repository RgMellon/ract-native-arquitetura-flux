import React from 'react';

import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { TouchableOpacity } from 'react-native-gesture-handler';
import { Container, Logo, Badge, AmountOnCart, WrapperCart } from './styles';

function Header({ navigation, cart }) {
  return (
    <Container>
      <TouchableOpacity onPress={() => navigation.navigate('Main')}>
        <Logo />
      </TouchableOpacity>
      <WrapperCart onPress={() => navigation.navigate('Cart')}>
        <Badge>
          <AmountOnCart> {0 || cart} </AmountOnCart>
        </Badge>
        <Icon name="shopping-basket" color="#FFF" size={26} />
      </WrapperCart>
    </Container>
  );
}

const mapStateToProps = state => ({
  cart: state.cart.length,
});
export default connect(mapStateToProps)(Header);
