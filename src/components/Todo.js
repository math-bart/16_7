import React from 'react';
import style from './Todo.css';

const Item = props => 
<li id={props.id} ><i className={"fa fa-check-square-o"} onClick={() => props.remove(props.id)} aria-hidden="true"></i>{props.name}</li>;

export default Item;