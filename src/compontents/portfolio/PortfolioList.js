// import React from 'react';
// import {connect} from 'react-redux';
// import PortfolioShow from './PortfolioShow'
// const PortfolioList = (props) => {
//     return (
//       <div
//         style={{
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//           height: '20vh'
//         }}
//       >
//         <div className="cards">
//             {props.portfolios.portfolio.map((portfolio) => (<PortfolioShow props={portfolio} />))}
//         </div>
//       </div>
//     );
//   };

// const mapStateToProps = (state) => {
//     return{
//       portfolios: state.portfolio
//     }
// }
// export default connect(mapStateToProps)(PortfolioList);