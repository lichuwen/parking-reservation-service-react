import React from 'react'
import Map from '../../components/Map/index'
import './index.scss'
import SearchShow from '../../components/SearchShow'
import TopNavigation from '../../components/TopNavigation'
import { setDestination } from '../../actions'

class Index extends React.Component {

    render() {
        return <div className="index-page">
            <TopNavigation BMap={this.props.BMap} 
                    lng={this.props.lng}
                    lat={this.props.lat}
                    setDestination={this.props.setDestination}
                    />
            <SearchShow customerAddress={this.props.customerAddress}
                        destination={this.props.destination} 
                        />
            <Map initBMap={this.props.initBMap} 
                    BMap={this.props.BMap} 
                    setCustomerLng={this.props.setCustomerLng} 
                    setCustomerLat={this.props.setCustomerLat}
                    setHiddenSearch={this.props.setHiddenSearch}
                    setCustomerAddress={this.props.setCustomerAddress} 
                    />
        </div>
    }
}

export default Index