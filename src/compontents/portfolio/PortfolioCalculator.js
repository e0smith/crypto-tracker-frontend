import {connect} from 'react-redux'

const PortfolioCalculator = (props) => {
    // const {name} = props.portfolio.crypto
    return(
    <div>
        {console.log(props.cryptos.cryptos.some(item => props.portfolio == item.name))}
        {/* {console.log("crypto: ", props.cryptos.cryptos.map(e => e.name))} */}
        {/* {console.log("portfolio: ",props.portfolio)} */}
    </div>
    )
}


const mapStateToProps = (state) => {
    return{
      cryptos: state.cryptos,
      loading: state.loading
    }
  }

export default connect(mapStateToProps)(PortfolioCalculator);