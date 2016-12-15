import $ from 'jquery';
const SAQ = {};

SAQ.getNumberOfResults = () => {
  return $('.product-card').length;
};

export default SAQ;
