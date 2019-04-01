import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

class Bread extends React.Component{
    render() {
  return (
    <div>
      <Breadcrumb>
        <BreadcrumbItem><a href="/home" style={{color: '#6c757d'}}>Home</a></BreadcrumbItem>
        <BreadcrumbItem active style={{color: '#6c757d'}}>Details</BreadcrumbItem>
      </Breadcrumb>
    </div>
  )
};
}
export default Bread;