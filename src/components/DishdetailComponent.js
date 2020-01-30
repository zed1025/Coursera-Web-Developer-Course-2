import React, {Component} from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';


class DishDetail extends Component {

  constructor(props) {
    super(props);
  }

  renderDish(dish) {
    if(dish != null) {
      return (
        <Card >
          <CardImg width="100%" object src={dish.image} alt={dish.name}/>
          <CardBody>
            <CardTitle heading>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    } else {
      return (
        <div></div>
      );
    }
  }

  // takes comments array as parameter and and lays out each comment is the order given in the assignment photo
  renderComments(comments) {
    const options = { year: "numeric", month: "short", day: "numeric" };
    if(comments != null) {
      return comments.map(comment => (
        <ul key={comment.id} className="list-unstyled">
          <li className="mb-2">{comment.comment}</li>
          <li>
            -- {comment.author}{" "}
            {new Date(comment.date).toLocaleDateString("en-US", options)}
          </li>
        </ul>
      ));
    } else { return ( <div/>); }
  }


  render() {
    const {dish} = this.props;

    return (
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            {this.renderDish(this.props.dish)}
          </div>
          <div className="col-12 col-md-5 m-1">
            <h4>Comments</h4>
            {this.renderComments(dish.comments)}
          </div>
        </div>
        
    );
  }
}

export default DishDetail;