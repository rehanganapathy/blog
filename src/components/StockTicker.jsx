import React, { useState, useEffect } from 'react';

const StockTicker = () => {
    const [stocks, setStocks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(0);

    // S&P 500 stock symbols (partial list - you can add all 500)
    const sp500Symbols = [
        'AAPL', 'MSFT', 'GOOGL', 'AMZN', 'NVDA', 'META', 'TSLA', 'BERKB',
        'LLY', 'AVGO', 'JPM', 'UNH', 'XOM', 'V', 'PG', 'JNJ', 'MA', 'HD',
        'NFLX', 'BAC', 'ABBV', 'PFE', 'KO', 'ADBE', 'WMT', 'DIS', 'CRM',
        'TMO', 'CSCO', 'ABT', 'ACN', 'CVX', 'VZ', 'CMCSA', 'DHR', 'PEP',
        'COST', 'INTC', 'NKE', 'TXN', 'PM', 'NEE', 'AMD', 'UPS', 'AMGN',
        'RTX', 'QCOM', 'HON', 'LOW', 'SPGI', 'INTU', 'CAT', 'IBM', 'AMAT',
        'GS', 'BKNG', 'MCD', 'LMT', 'DE', 'NOW', 'AXP', 'ISRG', 'SYK',
        'T', 'PLD', 'MDT', 'BLK', 'GILD', 'VRTX', 'TMUS', 'ADI', 'C',
        'BA', 'LRCX', 'MU', 'SBUX', 'MDLZ', 'CVS', 'ELV', 'SCHW', 'REGN',
        'AMT', 'BMY', 'FI', 'PYPL', 'SO', 'CB', 'DUK', 'BSX', 'MMC',
        'CCI', 'ZTS', 'WM', 'ITW', 'EOG', 'NOC', 'APH', 'CL', 'CME',
        'ICE', 'FCX', 'PNC', 'USB', 'ETN', 'MO', 'SLB', 'AON', 'TGT',
        'EQIX', 'NSC', 'HCA', 'MSI', 'EMR', 'MCO', 'FDX', 'GE', 'PSA',
        'TJX', 'MMM', 'SHW', 'ECL', 'AJG', 'MCK', 'GM', 'PCAR', 'ADP',
        'ORLY', 'DXCM', 'COF', 'MAR', 'WELL', 'CTAS', 'AFL', 'TT', 'AZO',
        'ADSK', 'NXPI', 'KLAC', 'ROP', 'ROST', 'PAYX', 'SRE', 'PRU', 'O',
        'MSCI', 'GD', 'HLT', 'CPRT', 'KMB', 'CMG', 'CARR', 'HSY', 'YUM',
        'FAST', 'OTIS', 'EA', 'BDX', 'VRSK', 'A', 'CTSH', 'EW', 'KR',
        'IDXX', 'DD', 'XEL', 'LULU', 'EXC', 'FITB', 'IEX', 'WBA', 'GLW',
        'CSGP', 'GEHC', 'PPG', 'VICI', 'ACGL', 'KHC', 'FANG', 'WEC', 'ED',
        'MPWR', 'VMC', 'ANSS', 'ON', 'KEYS', 'DLTR', 'CDW', 'AWK', 'WTW',
        'FTV', 'BIIB', 'HPQ', 'ROK', 'STZ', 'ES', 'EIX', 'CHD', 'GRMN',
        'EFX', 'DOV', 'MTD', 'MLM', 'URI', 'EBAY', 'DFS', 'AEE', 'NTRS',
        'ETR', 'PPL', 'HUBB', 'TROW', 'CHTR', 'WY', 'APTV', 'DVA', 'RMD',
        'TSCO', 'CTVA', 'WST', 'ARE', 'GDDY', 'FSLR', 'AME', 'INVH', 'FE',
        'DAL', 'CBRE', 'LH', 'WAB', 'CAH', 'VRSN', 'BRO', 'TYL', 'GPN',
        'NTAP', 'TTWO', 'SIVB', 'RCL', 'CBOE', 'FRC', 'K', 'UAL', 'SBNY',
        'EQR', 'AVB', 'TER', 'TRMB', 'MAA', 'RF', 'POOL', 'LUV', 'JBHT',
        'WAT', 'CLX', 'IFF', 'DTE', 'CNP', 'CMS', 'HOLX', 'SYF', 'LVS',
        'PKI', 'ALGN', 'AES', 'EXPD', 'HSIC', 'SWKS', 'PEAK', 'TFX', 'GWW',
        'EPAM', 'JKHY', 'J', 'LDOS', 'ATO', 'CZR', 'ULTA', 'PFG', 'LNT',
        'MOH', 'ZBRA', 'TECH', 'PAYC', 'INCY', 'AKAM', 'BBY', 'MRNA', 'STE',
        'DGX', 'CE', 'DRE', 'FFIV', 'HST', 'FMC', 'ENPH', 'TPG', 'MKTX',
        'WDC', 'TAP', 'CCL', 'NVR', 'ILMN', 'VTRS', 'CFG', 'TDG', 'FOXA',
        'BF.B', 'MTCH', 'DISH', 'COO', 'CAG', 'CTLT', 'HII', 'WHR', 'STT',
        'MHK', 'KIM', 'SEDG', 'VTR', 'NWSA', 'ZION', 'ALB', 'NLOK', 'REG',
        'BXP', 'PTC', 'IP', 'RL', 'MOS', 'ALLE', 'LKQ', 'NI', 'EVRG', 'AIZ',
        'HWM', 'GL', 'AOS', 'WYNN', 'BWA', 'IVZ', 'XRAY', 'UDR', 'PARA',
        'NCLH', 'HAS', 'PBCT', 'PENN', 'PVH', 'VNO', 'AAL', 'GPS', 'SEE',
        'UA', 'HBI', 'DISH', 'DVN', 'COP', 'MRO', 'HAL', 'BKR', 'KMI', 'OKE',
        'WMB', 'TRGP', 'EPD', 'ET', 'MPLX', 'PSX', 'VLO', 'MPC', 'HES',
        'FANG', 'APA', 'CNX', 'AR', 'SM', 'MGY', 'CTRA', 'OVV', 'MTDR'
    ];

    // Display 20 stocks at a time in rotation
    const stocksPerPage = 20;
    const totalPages = Math.ceil(sp500Symbols.length / stocksPerPage);

    useEffect(() => {
        const fetchStockData = async () => {
            try {
                // Get current page of stocks to display
                const startIndex = currentPage * stocksPerPage;
                const endIndex = Math.min(startIndex + stocksPerPage, sp500Symbols.length);
                const currentStocks = sp500Symbols.slice(startIndex, endIndex);

                // Using Financial Modeling Prep API (free tier available)
                const API_KEY = import.meta.env.VITE_FMP_API_KEY || 'demo';

                // Try to use bulk endpoint first (more efficient)
                try {
                    const symbolsString = currentStocks.join(',');
                    const response = await fetch(
                        `https://financialmodelingprep.com/api/v3/quote/${symbolsString}?apikey=${API_KEY}`
                    );
                    const data = await response.json();

                    if (data && Array.isArray(data) && data.length > 0) {
                        const formattedStocks = data.map(stock => ({
                            symbol: stock.symbol,
                            price: stock.price,
                            change: stock.change,
                            changePercent: stock.changesPercentage
                        }));
                        setStocks(formattedStocks);
                        setLoading(false);
                        return;
                    }
                } catch (bulkError) {
                    console.log('Bulk fetch failed, trying individual requests...');
                }

                // Fallback to individual requests if bulk fails
                const promises = currentStocks.map(async (symbol) => {
                    try {
                        const response = await fetch(
                            `https://financialmodelingprep.com/api/v3/quote/${symbol}?apikey=${API_KEY}`
                        );
                        const data = await response.json();

                        if (data && data[0]) {
                            const stock = data[0];
                            return {
                                symbol: stock.symbol,
                                price: stock.price,
                                change: stock.change,
                                changePercent: stock.changesPercentage
                            };
                        }
                        return null;
                    } catch (error) {
                        console.error(`Error fetching ${symbol}:`, error);
                        return null;
                    }
                });

                const stockData = await Promise.all(promises);
                const validStocks = stockData.filter(stock => stock !== null);

                if (validStocks.length > 0) {
                    setStocks(validStocks);
                } else {
                    // Fallback to mock data if API fails completely
                    const mockStockData = currentStocks.slice(0, 10).map((symbol, index) => ({
                        symbol,
                        price: 100 + Math.random() * 500,
                        change: (Math.random() - 0.5) * 10,
                        changePercent: (Math.random() - 0.5) * 5
                    }));
                    setStocks(mockStockData);
                }

                setLoading(false);
            } catch (error) {
                console.error('Error fetching stock data:', error);
                // Generate some mock data for the current page
                const startIndex = currentPage * stocksPerPage;
                const currentStocks = sp500Symbols.slice(startIndex, startIndex + stocksPerPage);
                const mockStockData = currentStocks.slice(0, 10).map((symbol, index) => ({
                    symbol,
                    price: 100 + Math.random() * 500,
                    change: (Math.random() - 0.5) * 10,
                    changePercent: (Math.random() - 0.5) * 5
                }));
                setStocks(mockStockData);
                setLoading(false);
            }
        };

        fetchStockData();

        // Update data every 30 seconds
        const dataInterval = setInterval(fetchStockData, 30000);

        return () => {
            clearInterval(dataInterval);
        };
    }, [currentPage]);

    // Rotate to next page every 15 seconds
    useEffect(() => {
        const rotationInterval = setInterval(() => {
            setCurrentPage((prev) => (prev + 1) % totalPages);
        }, 15000);

        return () => clearInterval(rotationInterval);
    }, [totalPages]);

    if (loading) {
        return (
            <div className="bg-neutral-800 text-white py-3 overflow-hidden">
                <div className="animate-pulse flex items-center justify-center">
                    <span className="text-sm">Loading S&P 500 data...</span>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-neutral-800 text-white py-3 overflow-hidden relative">
            <div className="ticker-container">
                <div className="ticker-content">
                    {/* Duplicate the stocks array to create seamless loop */}
                    {[...stocks, ...stocks].map((stock, index) => (
                        <div key={`${stock.symbol}-${index}`} className="ticker-item">
                            <span className="font-medium">{stock.symbol}</span>
                            <span className="mx-2">${stock.price.toFixed(2)}</span>
                            <span className={`text-sm ${stock.change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                                {stock.change >= 0 ? '+' : ''}{stock.change.toFixed(2)} ({stock.changePercent >= 0 ? '+' : ''}{stock.changePercent.toFixed(2)}%)
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StockTicker;
