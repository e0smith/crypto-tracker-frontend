import {connect} from 'react-redux'

const PortfolioCalculator = (props) => {
    const str = props.portfolio.name
    const str2 = str.charAt(0).toUpperCase() + str.slice(1)
    let x = "";
    const calculate = props.cryptos.cryptos.some(item => str2 === (x = item).name) ? "$" + (x.current_price * props.portfolio.quantity) : "Unknown Currency"
    
    
    return(
        calculate
    )
}


const mapStateToProps = (state) => {
    return{
      cryptos: state.cryptos,
      loading: state.loading
    }
  }

export default connect(mapStateToProps)(PortfolioCalculator);