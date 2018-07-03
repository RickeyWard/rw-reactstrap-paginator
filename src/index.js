//     ___    _         __                _      __                 __
//    / _ \  (_) ____  / /__ ___   __ __ | | /| / / ___ _  ____ ___/ /
//   / , _/ / / / __/ /  '_// -_) / // / | |/ |/ / / _ `/ / __// _  / 
//  /_/|_| /_/  \__/ /_/\_\ \__/  \_, /  |__/|__/  \_,_/ /_/   \_,_/  
//                               /___/                                
// (c) 2018 | rw-reactstrap-paginator | MIT License  |
// A controlled functional react component using reactstrap for pagination.

import React from 'react';
import PropTypes from 'prop-types';
import {
  Pagination,
  PaginationLink,
  PaginationItem
} from 'reactstrap';
import classnames from 'classnames';

const Paginator = (props)=> {

  const totalPages = Math.ceil(props.itemsTotal / props.itemsPerPage);
  //if you didn't pass in the items, or if the curPage is out of range,
  //just don't draw anything.
  if(props.curPage > totalPages)
    return (null);
  
  const pages = [];
  //odd number pagination just looks so much better, you'll thank me later.
  let tote = props.pagesToDisplay % 2 == 0 ? props.pagesToDisplay + 1 : props.pagesToDisplay;
  const middle = Math.ceil(tote / 2);
  let offset = 0;
  
  //calculate offset (so we know what buttons to draw)
  if(props.curPage > middle)
    offset = props.curPage - middle;
  if(props.curPage + (middle -1) > totalPages)
    offset -= (props.curPage + (middle -1)) - totalPages;
    
  //if we don't have that many pages...
  if(totalPages <= props.pagesToDisplay){
    tote = totalPages;
    offset = 0;
  }

  for(let i = 1; i <= tote; i++)
    pages.push(i + offset);

  return (
    <Pagination size={props.size} className={classnames({"justify-content-center": props.center})}>
      {/* Back Arrow */}
      <PaginationItem disabled={1 === props.curPage}>
        <PaginationLink previous onClick={()=>props.onChange(props.curPage - 1)} />
      </PaginationItem>
      {/* First Page */}
      {offset > 0 && (
      <PaginationItem>
        <PaginationLink onClick={()=>props.onChange(1)}>
        1&#8230;
        </PaginationLink>
      </PaginationItem>)}
      {/* Page buttons */}
      {pages && pages.map(x=>(
      <PaginationItem key={x} active={x === props.curPage}>
        <PaginationLink onClick={()=>{x!==props.curPage && props.onChange(x)}}>
          {x}
        </PaginationLink>
      </PaginationItem>))}
      {/* Last Page */}
      {offset < (totalPages - tote) && (
      <PaginationItem>
        <PaginationLink onClick={()=>props.onChange(totalPages)}>
        &#8230;{totalPages}
        </PaginationLink>
      </PaginationItem>)}
      {/* Forward Arrow */}
      <PaginationItem disabled={props.curPage >= totalPages}>
        <PaginationLink next onClick={()=>props.onChange(props.curPage + 1)} />
      </PaginationItem>
    </Pagination>
  );
}

Paginator.propTypes = {
    curPage:  PropTypes.number.isRequired, //page that is active, starting with 1
    itemsTotal:  PropTypes.number.isRequired, //total number of items that should be paged
    itemsPerPage:  PropTypes.number, //number of items that you each page is showing.
    onChange: PropTypes.func, //function to call when an active button is clicked.
    pagesToDisplay: PropTypes.number, //number of pages to show (excluding first/last) rounded up to an odd number.
    size: PropTypes.string, //bootstrap size string, sm, lg, md
    center: PropTypes.bool, //justify-content-center?
  };

  Paginator.defaultProps = {
    itemsPerPage: 25,
    pagesToDisplay: 5,
    size: "md",
    center: true,
    onChange: (x)=>(console.log(`Unbound "onChange" for pagination, ${x}`))
  };

export default Paginator;