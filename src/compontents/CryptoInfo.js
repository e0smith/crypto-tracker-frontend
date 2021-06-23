import  React, { Compontent} from 'react';

class CryptoContainer extends Compontent {

    render() {
        const info = this.props.cryptos.map(crypto => (
            <CryptoCard
            key={crypto.id}
            id={crypto.id}
            name={crypto.name}
            current_price={crypto.current_price}
            market_cap={crypto.market_cap}
            total_volume={crypto.total_volume}
            high_24h={crypto.high_24h}
            low_24h={crypto.low_24h}
            price_change_percentage_24h={crypto.price_change_percentage_24h}
            price_change_percentage_7d={crypto.price_change_percentage_7d}
            price_change_percentage_14d={crypto.price_change_percentage_14d}
            price_change_percentage_60d={crypto.price_change_percentage_60d}
            price_change_percentage_1y={crypto.price_change_percentage_1y}
            market_cap_change_24h={crypto.market_cap_change_24h}
            market_cap_change_percentage_24h={crypto.market_cap_change_percentage_24h}
            total_supply={crypto.total_supply}
            circulating_supply={crypto.circulating_supply} 
            />)
        )

        return (
            <div id="crypto-container">
                {info}
            </div>
        )
    }
}

export default CryptoContainer;