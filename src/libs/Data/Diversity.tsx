import { Doughnut } from 'react-chartjs-2'

const options = {
  layout: {
    responsive: true,
    maintainAspectRation: true,
  },
}

const eth = {
  labels: ['White', 'Native Indian', 'Black', 'Latin', 'East Asian', 'South East Asian'],
  datasets: [
    {
      label: 'Ethnicity',
      data: [5, 1, 2, 1, 1, 1],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
}

const gen = {
  labels: ['Identifies As Female', 'Identifies As Male'],
  datasets: [
    {
      label: 'Gender',
      data: [8, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
}

const Teamstats = () => (
  <div className="flex-wrap pt-10 sm:grid sm:grid-cols-2 sm:top-0 sm:gap-10 ">
    <div className="w-2/6">
      <Doughnut data={gen} options={options} />
    </div>
    <div className="w-2/6">
      <Doughnut data={eth} options={options} />
    </div>
  </div>
)

export default Teamstats
