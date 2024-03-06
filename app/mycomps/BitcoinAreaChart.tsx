import React, { useEffect, useRef, useState } from 'react';
import Chart, { ChartOptions } from 'chart.js/auto';
import { startOfDay, subDays } from 'date-fns';
import 'chartjs-adapter-date-fns';

interface BitcoinAreaChartProps {}

const BitcoinAreaChart: React.FC<BitcoinAreaChartProps> = () => {
  const [data, setData] = useState<[string, number][]>([]);
  const [chartInstance, setChartInstance] = useState<Chart | null>(null);
  const chartRef = useRef<HTMLCanvasElement>(null);
  const isMounted = useRef(true);

  useEffect(() => {
    const fetchBitcoinPriceData = async () => {
      try {
        const toDate = new Date(); // Today's date
        const fromDate = subDays(toDate, 2); // Date three days ago

        const response = await fetch(
          `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range?vs_currency=usd&from=${fromDate.getTime() / 1000}&to=${toDate.getTime() / 1000}`
        );

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await response.json();

        if (isMounted.current) {
          setData(data.prices.map((item: any) => [new Date(item[0]).toISOString(), item[1]]));
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setData([]);
      }
    };

    fetchBitcoinPriceData();

    return () => {
      isMounted.current = false;
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, []);

  useEffect(() => {
    if (chartInstance) {
      chartInstance.destroy(); // Destroy the existing chart instance
    }

    if (chartRef.current && data.length > 0) {
      const ctx = chartRef.current.getContext('2d');

      if (ctx) {
        const chart = new Chart(ctx, {
          type: 'line',
          data: {
            labels: data.map((item) => item[0]),
            datasets: [
              {
                label: 'Bitcoin Price',
                data: data.map((item) => item[1]),
                fill: true,
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              x: {
                type: 'time',
                time: {
                  unit: 'day',
                },
              },
              y: {
                title: {
                  display: true,
                  text: 'Price (USD)',
                },
              },
            },
          } as ChartOptions,
        });

        setChartInstance(chart);
      }
    }
  }, [data]);

  useEffect(() => {
    if (chartInstance && chartRef.current && data.length > 0) {
      chartInstance.update();
    }
  }, [data, chartInstance]);

  return <canvas style={{ maxWidth: '100%' }} ref={chartRef} />;
};

export default BitcoinAreaChart;
