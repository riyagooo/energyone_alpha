<template>
  <div class="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
    <div class="px-5 pt-5">
      <header class="flex justify-between items-start mb-2">
        <!-- Icon -->
        <div class="text-investment-blue text-3xl">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8">
            <path d="M19.5 6a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM21.71 9.5c.48.7.45 1.53.2 2.35-.42 1.38-1.38 2.5-2.53 3.37a16.47 16.47 0 0 1-.5.42V21a1.5 1.5 0 0 1-3 0v-5.34l-.08-.05a9.1 9.1 0 0 0-6.11-.39 13.75 13.75 0 0 0-.48.15L9 13.83a1.5 1.5 0 0 1-1.88-1.96 15.8 15.8 0 0 1 5.9-6.42c3.6-2.46 8.92-1.49 9.69 2.06ZM8 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM12.5 18a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0ZM5 24a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" />
          </svg>
        </div>
        <EditMenu align="right" class="relative inline-flex">
          <li>
            <a class="font-medium text-sm text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-slate-200 flex py-1 px-3" href="#0">Investment Details</a>
          </li>
          <li>
            <a class="font-medium text-sm text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-slate-200 flex py-1 px-3" href="#0">Environmental Impact</a>
          </li>
          <li>
            <a class="font-medium text-sm text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-slate-200 flex py-1 px-3" href="#0">Add to Favorites</a>
          </li>
        </EditMenu>
      </header>
      <h2 class="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-2">Wind Portfolio</h2>
      <div class="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase mb-1">Current Value</div>
      <div class="flex items-start">
        <div class="text-3xl font-bold text-slate-800 dark:text-slate-100 mr-2">$12,350</div>
        <div class="text-sm font-semibold text-white px-1.5 bg-emerald-500 rounded-full">+9.2%</div>
      </div>
    </div>
    <!-- Chart built with Chart.js 3 -->
    <div class="grow max-sm:max-h-[128px] xl:max-h-[128px]">
      <!-- Change the height attribute to adjust the chart height -->
      <LineChart :data="chartData" width="389" height="128" />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import LineChart from '../../charts/LineChart01.vue'
import EditMenu from '../../components/DropdownEditMenu.vue'

// Import utilities
import { tailwindConfig, hexToRGB } from '../../utils/Utils'

export default {
  name: 'DashboardCard02',
  components: {
    LineChart,
    EditMenu,
  },
  setup() {
    const chartData = ref({
      labels: [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
      ],
      datasets: [
        // Blue line - Investment Value
        {
          label: 'Value ($)',
          data: [
            9200, 9400, 9800, 10100, 10300, 10500,
            10900, 11200, 11500, 11800, 12100, 12350,
          ],
          fill: true,
          backgroundColor: `rgba(${hexToRGB(tailwindConfig().theme.colors.blue[500])}, 0.08)`,
          borderColor: tailwindConfig().theme.colors.blue[500],
          borderWidth: 2,
          tension: 0.3,
          pointRadius: 0,
          pointHoverRadius: 3,
          pointBackgroundColor: tailwindConfig().theme.colors.blue[500],
          pointHoverBackgroundColor: tailwindConfig().theme.colors.blue[500],
          pointBorderWidth: 0,
          pointHoverBorderWidth: 0,          
          clip: 20,
        },
        // Gray line - Energy Production (MWh)
        {
          label: 'Production (MWh)',
          data: [
            850, 800, 950, 1050, 1100, 1150,
            1200, 1250, 1100, 950, 900, 850,
          ],
          borderColor: tailwindConfig().theme.colors.slate[400],
          borderWidth: 2,
          tension: 0.3,
          pointRadius: 0,
          pointHoverRadius: 3,
          pointBackgroundColor: tailwindConfig().theme.colors.slate[400],
          pointHoverBackgroundColor: tailwindConfig().theme.colors.slate[400],
          pointBorderWidth: 0,
          pointHoverBorderWidth: 0,               
          clip: 20,
        },
      ],
    })

    return {
      chartData,
    } 
  }
}
</script>