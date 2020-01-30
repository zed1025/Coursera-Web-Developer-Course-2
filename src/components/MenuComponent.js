import React, {Component} from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';
import DishDetail from './DishdetailComponent';


class Menu extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedDish: null
    }
  }
  onDishSelect(dish) {
    this.setState({selectedDish: dish});
  }

  renderDish(dish) {
    if (dish != null) return <DishDetail dish={dish} />;
    else return <div />;
  }


  //any class component in React should implement the render() method
  render() {
    const menu = this.props.dishes.map((dish) => {
      return (
        //when rendering list of items always use a "key"
        <div key={dish.id} className="col-12 col-md-5 m-1">
          <Card onClick={() => this.onDishSelect(dish)}>
            <CardImg width="100%" object src={dish.image} alt={dish.name}/>
            <CardImgOverlay body className="ml-5">
              <CardTitle heading>{dish.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row">
            {menu}
        </div>
        {this.renderDish(this.state.selectedDish)}
      </div>
    );
  }
}

//always export the component from the file
export default Menu;