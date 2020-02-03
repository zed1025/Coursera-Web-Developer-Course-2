import React, {Component} from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';


  function RenderDish({dish}) {
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

  function RenderComments({comments}) {
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


  const DishDetail = (props) => {
    const {dish} = props;

    return dish?(
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            <RenderDish dish={props.dish}/>
          </div>
          <div className="col-12 col-md-5 m-1">
            <h4>Comments</h4>
            <RenderComments comments={props.dish.comments}/>
          </div>
        </div>
      </div>
    ):(<div></div>);
  }

export default DishDetail;