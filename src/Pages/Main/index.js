/* eslint-disable react/sort-comp */
import React, { Component } from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ActionsCart from '../../store/modules/cart/actions';

import api from '../../services/api';
import formatPrice from '../../util/formatPrice';

import {
  Container,
  Card,
  ImageProd,
  DescProd,
  PriceProd,
  ButtonAddCart,
  TextButton,
  AmountInCart,
  Amount,
  List,
} from './styles';

class Main extends Component {
  state = {
    items: [],
  };

  handleAddCart = item => {
    const { addToCartRequest } = this.props;
    addToCartRequest(item.id);
  };

  async componentDidMount() {
    const response = await api.get('/products');

    const data = response.data.map(product => ({
      ...product,
      formatedPrice: formatPrice(product.price),
    }));

    this.setState({ items: data });
  }

  render() {
    const { items } = this.state;
    return (
      <>
        <Container>
          <List
            data={items}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => (
              <Card>
                <ImageProd
                  source={{
                    uri: item.image,
                  }}
                />
                <DescProd> {item.title}</DescProd>
                <PriceProd> {item.formatedPrice} </PriceProd>
                <ButtonAddCart onPress={() => this.handleAddCart(item)}>
                  <AmountInCart>
                    <Icon name="add-shopping-cart" size={20} color="#fff" />
                    <Amount> 3 </Amount>
                  </AmountInCart>
                  <TextButton> ADICIONAR </TextButton>
                </ButtonAddCart>
              </Card>
            )}
          />
        </Container>
      </>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(ActionsCart, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(Main);
