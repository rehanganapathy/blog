import React, { useState, useEffect } from 'react';
import './StockTicker.css'; // Your existing CSS file

// --- Configuration ---
const YOUR_FMP_API_KEY = 'R2VoDIDrY47rWanz3hGfJBm89VkoL2rL'; // ❗️ Paste your new FMP API key here

// A large, diverse list of assets that FMP can fetch in a single call
const STOCKS_AND_INDICES = [
    // US Indices (ETFs)
    'SPY', 'QQQ', 'DIA', 'IWM',

    // Major Tech Stocks
    'AAPL', 'MSFT', 'GOOGL', 'AMZN', 'NVDA', 'META', 'TSLA',

    // Other Major US Stocks
    'JPM', 'JNJ', 'V', 'WMT', 'PG',

    // World Indices (ETFs)
    'EWJ', // Japan
    'INDA', // India
    'FXI', // China
    'EWZ', // Brazil
    'EWG', // Germany

    // Commodities & FOREX
    'GLD', // Gold
    'USO', // Oil
    'EURUSD', // Euro/USD
    'GBPUSD', // Pound/USD
];

// FMP's free plan allows 250 requests/day. A 5-minute refresh is safe.
const REFRESH_INTERVAL_MS = 5 * 60 * 1000; // 5 minutes

const StockTicker = () => {
    const [marketData, setMarketData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMarketData = async () => {
            setError(null);
            if (YOUR_FMP_API_KEY === 'YOUR_FMP_API_KEY_HERE') {
                setError("Please add your free FMP API key to the code.");
                setLoading(false);
                return;
            }

            // Create one comma-separated string for the bulk API call
            const symbolsString = STOCKS_AND_INDICES.join(',');
            const apiUrl = `https://financialmodelingprep.com/api/v3/quote/${symbolsString}?apikey=${YOUR_FMP_API_KEY}`;

            try {
                const response = await fetch(apiUrl);
                if (!response.ok) {
                    throw new Error('Network response was not ok. Check your API key.');
                }

                const data = await response.json();
                if (!Array.isArray(data) || data.length === 0) {
                    throw new Error('API returned empty or invalid data. This can happen with a bad API key.');
                }

                setMarketData(data);

            } catch (err) {
                console.error("Error fetching data:", err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchMarketData();
        const interval = setInterval(fetchMarketData, REFRESH_INTERVAL_MS);

        return () => clearInterval(interval);
    }, []);

    const tickerItems = marketData.length > 0 ? [...marketData, ...marketData] : [];

    return (
        <div className="ticker-container">
            {loading ? (
                <div className="ticker-message">Loading Market Data...</div>
            ) : error ? (
                <div className="ticker-message" style={{ color: '#f87171' }}>Error: {error}</div>
            ) : (
                <div className="ticker-content" style={{ animationDuration: '20s' }}>
                    {tickerItems.map((stock) => (
                        <div key={`${stock.symbol}-${Math.random()}`} className="ticker-item" title={stock.name}>
                            <span className="symbol">{stock.symbol}</span>
                            <span className="price">${stock.price?.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                            <span className={stock.change >= 0 ? 'change-positive' : 'change-negative'}>
                                {stock.change >= 0 ? '▲' : '▼'} {Math.abs(stock.change)?.toFixed(2)} ({stock.changesPercentage?.toFixed(2)}%)
                            </span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default StockTicker;