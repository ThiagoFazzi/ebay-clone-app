import React from 'react'
import { connect } from 'react-redux'
import { loadAdvertisements } from '../actions/advertisements'

class AdvertisementsListContainer extends React.Component {
  
    componentDidMount(){
        this.props.loadAdvertisements()
    }

    render(){
        if(!this.props.advertisements) return <p>Loading...</p>
        return(
            <div>
                <h1>Advertisements List Container</h1>
                <ul>
                    {this.props.advertisements.advertisements.map(adv => <li key={adv.id}>{adv.title}</li>)}
                </ul>
            </div>
        )
    }

}

const mapStateToProps = (state) => ({
    advertisements: state.advertisements
})

export default connect(mapStateToProps, { loadAdvertisements })(AdvertisementsListContainer)