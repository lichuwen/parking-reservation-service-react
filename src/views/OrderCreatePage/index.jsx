import React from 'react'
import { Row, Col } from 'antd';
import ParkingLotInfo from '../../components/OrderCreatePage/ParkingLotInfo'
import BookInfoForm from '../../components/OrderCreatePage/BookInfoForm'
import './index.css'

class OrderCreatePage extends React.Component {

  render() {
    return (
      <div className="content">
          <div className="item"><ParkingLotInfo /></div>
          <div className="item"><BookInfoForm /></div>
      </div>
    );
  }
}

export default OrderCreatePage;