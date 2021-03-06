import React from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';

//functional component(first way to make then)
function RenderMenuItem( { dish, onClick } ){
  return (
    <Card>
      {/* use backquoted in the line below */}
      <Link to={`/menu/${dish.id}`}>
        <CardImg width="100%" object src={dish.image} alt={dish.name}/>
        <CardImgOverlay body className="ml-5">
          <CardTitle heading>{dish.name}</CardTitle>
        </CardImgOverlay>
      </Link>
    </Card>
  );
}

//functional component - another way to make them
const Menu = (props) => {
  const menu = props.dishes.map((dish) => {
    return (
      <div key={dish.id} className="col-12 col-md-5 m-1">
        <RenderMenuItem dish={dish} />
      </div>
    );
  });

  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
          <BreadcrumbItem active>Menu</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>Menu</h3>
          <hr />
        </div>
      </div>
      <div className="row">
          {menu}
      </div>
    </div>
  );
}

export default Menu;