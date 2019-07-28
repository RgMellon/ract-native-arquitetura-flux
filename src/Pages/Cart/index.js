import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as ActionsCart from '../../store/modules/cart/actions';

import formatPrice from '../../util/formatPrice';

import {
  Container,
  CardContainer,
  HeaderContainer,
  ImagePro,
  DescProd,
  InfoProd,
  PriceProd,
  DeleteProd,
  ContainerSubTotal,
  ChangeAmount,
  ButtonControllerAmountSub,
  ButtonControllerAmountSum,
  Amount,
  SubTotal,
  ContainerTotal,
  PriceTotal,
  TitleTotal,
  ButtonFinishedOrder,
  ButtonFinishedOrderText,
  Item,
  List,
} from './styles';

class Cart extends Component {
  state = {};

  handleIncrement = (id, amount) => {
    const { updateAmountRequest } = this.props;
    const newAmount = amount + 1;
    updateAmountRequest(id, newAmount);
  };

  handleDecrement = (id, amount) => {
    const { updateAmountRequest } = this.props;
    const newAmount = amount - 1;
    updateAmountRequest(id, newAmount);
  };

  handleDelete = id => {
    const { removeItem } = this.props;
    removeItem(id);
  };

  render() {
    const { itemsCart, total } = this.props;

    return (
      <Container>
        <CardContainer>
          <List
            keyExtractor={item => String(item.id)}
            data={itemsCart}
            renderItem={({ item }) => (
              <Item>
                <HeaderContainer>
                  <ImagePro
                    source={{
                      uri: item.image,
                    }}
                  />
                  <InfoProd>
                    <DescProd> {item.title} </DescProd>
                    <PriceProd> {item.formatedPrice} </PriceProd>
                  </InfoProd>
                  <DeleteProd onPress={() => this.handleDelete(item.id)}>
                    <Icon name="delete-forever" size={25} color="#7159c1" />
                  </DeleteProd>
                </HeaderContainer>

                <ContainerSubTotal>
                  <ChangeAmount>
                    <ButtonControllerAmountSub
                      onPress={() => this.handleDecrement(item.id, item.amount)}
                    >
                      <Icon
                        name="remove-circle-outline"
                        size={20}
                        color="#7159c1"
                      />
                    </ButtonControllerAmountSub>
                    <Amount value={String(item.amount)} />
                    <ButtonControllerAmountSum
                      onPress={() => this.handleIncrement(item.id, item.amount)}
                    >
                      <Icon
                        name="add-circle-outline"
                        size={18}
                        color="#7159c1"
                      />
                    </ButtonControllerAmountSum>
                  </ChangeAmount>
                  <SubTotal> {item.subTotal} </SubTotal>
                </ContainerSubTotal>
              </Item>
            )}
          />

          <ContainerTotal>
            <TitleTotal> TOTAL </TitleTotal>
            <PriceTotal> {total} </PriceTotal>
          </ContainerTotal>

          <ButtonFinishedOrder>
            <ButtonFinishedOrderText> FINALIZAR</ButtonFinishedOrderText>
          </ButtonFinishedOrder>
        </CardContainer>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(ActionsCart, dispatch);

const mapStateToProps = state => ({
  itemsCart: state.cart.map(item => ({
    ...item,
    subTotal: formatPrice(item.amount * item.price),
  })),

  total: formatPrice(
    state.cart.reduce((total, item) => {
      return total + item.price * item.amount;
    }, 0)
  ),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
