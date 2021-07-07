import React from 'react';
import {connect} from 'react-redux'
import {deletePortfolio} from '../../actions/portfolio.js'

const DeletePortfolio = (props) => {
    
    const handleDelete = (portfolio) => {
        props.deletePortfolio(portfolio.id)
        window.location.reload()
    }

    let portfolio = props.portfolio

 return (
     <div className="dlt-btn">
         <button onClick={() => handleDelete(portfolio)}>Delete</button>
     </div>
 )

}
export default connect(null,{deletePortfolio})(DeletePortfolio)