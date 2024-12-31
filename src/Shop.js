import React from 'react'
import { useDispatch } from 'react-redux'
// import { bindActionCreators } from 'redux';
import { actionCreators } from './state/index1';

export default function Shop() {
  const dispatch = useDispatch();
  return (
    <div>
        <h2 className='shoe my-3'>Deposit/Withdraw money</h2>
        <button className='btn btn-danger mx-2'onClick={()=>dispatch(actionCreators.depositeMoney(100))}>+</button>
        Update Balance
        <button className='btn btn-success mx-2' onClick={()=>dispatch(actionCreators.WithdrawMoney(100))}>-</button>
    </div>
  )
}
