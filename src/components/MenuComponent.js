import React, {Component} from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';


class Menu extends Component {

  constructor(props) {
    super(props);
  }
  
  // renderDish(dish) {
  //   if (dish != null) return <DishDetail dish={dish} />;
  //   else return <div />;
  // }

  render() {
    const menu = this.props.dishes.map((dish) => {
      return (
        <div className="col-12 col-md-5 m-1">
          <Card key={dish.id} onClick={() => this.props.onClick(dish.id)}>
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
      </div>
    );
  }
}


export default Menu;