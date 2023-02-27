import React from 'react'
import classes from './Navbar.module.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { IconButton } from '@mui/material';

import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';

import { useSelector } from 'react-redux';



function Nabvar(props) {
const items=  useSelector(state=>state.cart.totalQty)
  return (
    <div onClick={props.cartHandler} className={classes.nav}>
      <h1>Ecommerce</h1>
      <div className={classes.cart}>
      <div className={classes.cartIcon}>
      <IconButton  aria-label="cart">
  <StyledBadge badgeContent={items} color="secondary">
    <ShoppingCartIcon />
  </StyledBadge>
</IconButton>
      </div>
    </div></div>
  )
}

export default Nabvar







const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

