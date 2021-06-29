import {connect} from 'react-redux'

const PortfolioCalculator = (props) => {
    let x = "";
    const calculate = props.cryptos.cryptos.some(item => props.portfolio.name.toLowerCase() === (x = item).name.toLowerCase()) ? "$" + (x.current_price * props.portfolio.quantity) : "Unknown Currency"
    
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