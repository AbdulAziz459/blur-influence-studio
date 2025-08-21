import { useEffect, useRef } from 'react';
import Header from '@/components/Header';
import { ROSTER, calculateTotals } from '@/data/roster';

const Dashboard = () => {
  const chartRefs = useRef<{ [key: string]: HTMLCanvasElement | null }>({});
  const totals = calculateTotals();

  useEffect(() => {
    const loadChartJs = async () => {
      // Dynamically import Chart.js to avoid SSR issues
      const { Chart, registerables } = await import('chart.js');
      Chart.register(...registerables);

      // KPI Aggregate Bar Chart
      if (chartRefs.current.barChart) {
        new Chart(chartRefs.current.barChart, {
          type: 'bar',
          data: {
            labels: ROSTER.map(c => c.name),
            datasets: [{
              label: 'Total Followers',
              data: ROSTER.map(c => 
                (c.socials.instagram?.count || 0) + 
                (c.socials.tiktok?.count || 0) + 
                (c.socials.facebook?.count || 0)
              ),
              backgroundColor: ROSTER.map(c => c.color + '80'),
              borderColor: ROSTER.map(c => c.color),
              borderWidth: 1
            }]
          },
          options: {
            responsive: true,
            plugins: {
              legend: { display: false }
            },
            scales: {
              y: { 
                beginAtZero: true,
                grid: { color: '#3f3f46' },
                ticks: { color: '#a1a1aa' }
              },
              x: { 
                grid: { display: false },
                ticks: { color: '#a1a1aa' }
              }
            }
          }
        });
      }

      // Individual character demographics (sample data)
      ROSTER.forEach((character, index) => {
        // Gender pie chart
        const genderCanvas = chartRefs.current[`gender-${index}`];
        if (genderCanvas) {
          new Chart(genderCanvas, {
            type: 'doughnut',
            data: {
              labels: ['Female', 'Male', 'Other'],
              datasets: [{
                data: [65, 30, 5], // Sample data
                backgroundColor: [character.color + '80', character.color + '40', character.color + '20'],
                borderWidth: 0
              }]
            },
            options: {
              responsive: true,
              plugins: {
                legend: { position: 'bottom', labels: { color: '#a1a1aa', font: { size: 12 } } }
              }
            }
          });
        }

        // Age bar chart
        const ageCanvas = chartRefs.current[`age-${index}`];
        if (ageCanvas) {
          new Chart(ageCanvas, {
            type: 'bar',
            data: {
              labels: ['18-24', '25-34', '35-44', '45+'],
              datasets: [{
                data: [40, 35, 20, 5], // Sample data
                backgroundColor: character.color + '60',
                borderColor: character.color,
                borderWidth: 1
              }]
            },
            options: {
              responsive: true,
              plugins: { legend: { display: false } },
              scales: {
                y: { 
                  display: false,
                  beginAtZero: true 
                },
                x: { 
                  grid: { display: false },
                  ticks: { color: '#71717a', font: { size: 10 } }
                }
              }
            }
          });
        }
      });
    };

    loadChartJs();
  }, []);

  const formatNumber = (num: number) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(0)}K`;
    return num.toLocaleString();
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="container mx-auto px-6 py-12">
        <div className="mb-12">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
            Analytics <span className="text-sky-400">Dashboard</span>
          </h1>
          <p className="text-xl text-zinc-300">
            Real-time insights into our AI influencer performance and audience demographics.
          </p>
        </div>

        {/* KPI Tiles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="blur-card p-6">
            <div className="text-sm text-zinc-400 mb-2">Total Followers</div>
            <div className="text-3xl font-extrabold text-sky-400">{formatNumber(totals.total)}</div>
          </div>
          <div className="blur-card p-6">
            <div className="text-sm text-zinc-400 mb-2">Instagram</div>
            <div className="text-3xl font-extrabold text-pink-400">{formatNumber(totals.ig)}</div>
          </div>
          <div className="blur-card p-6">
            <div className="text-sm text-zinc-400 mb-2">TikTok</div>
            <div className="text-3xl font-extrabold text-red-400">{formatNumber(totals.tt)}</div>
          </div>
          <div className="blur-card p-6">
            <div className="text-sm text-zinc-400 mb-2">Facebook</div>
            <div className="text-3xl font-extrabold text-blue-400">{formatNumber(totals.fb)}</div>
          </div>
        </div>

        {/* Aggregate Chart */}
        <div className="blur-card p-6 mb-12">
          <h3 className="text-xl font-semibold mb-6">Follower Distribution</h3>
          <div className="h-80">
            <canvas 
              ref={el => chartRefs.current.barChart = el}
              className="w-full h-full"
            ></canvas>
          </div>
        </div>

        {/* Character Demographics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {ROSTER.map((character, index) => (
            <div key={character.name} className="blur-card p-6">
              <div className="flex items-center gap-4 mb-6">
                <div 
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: character.color }}
                ></div>
                <h3 className="text-xl font-semibold">{character.name}</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm text-zinc-400 mb-3">Gender Distribution</h4>
                  <div className="h-32">
                    <canvas 
                      ref={el => chartRefs.current[`gender-${index}`] = el}
                      className="w-full h-full"
                    ></canvas>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm text-zinc-400 mb-3">Age Groups (%)</h4>
                  <div className="h-32">
                    <canvas 
                      ref={el => chartRefs.current[`age-${index}`] = el}
                      className="w-full h-full"
                    ></canvas>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-zinc-700/50">
                <div className="text-sm text-zinc-400">Top Locations</div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {['United States', 'Canada', 'United Kingdom'].map(location => (
                    <span key={location} className="pill text-xs">
                      {location}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;