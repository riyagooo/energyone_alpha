<template>
  <div class="relative bg-investment-blue/10 dark:bg-investment-blue p-4 sm:p-6 rounded-sm overflow-hidden mb-8">

    <!-- Background illustration -->
    <div class="absolute right-0 top-0 -mt-4 mr-16 pointer-events-none hidden xl:block" aria-hidden="true">
      <svg width="319" height="198" xmlns:xlink="http://www.w3.org/1999/xlink">
        <defs>
          <path id="welcome-a" d="M64 0l64 128-64-20-64 20z" />
          <path id="welcome-e" d="M40 0l40 80-40-12.5L0 80z" />
          <path id="welcome-g" d="M40 0l40 80-40-12.5L0 80z" />
          <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="welcome-b">
            <stop stop-color="#93C5FD" offset="0%" />
            <stop stop-color="#3B82F6" offset="100%" />
          </linearGradient>
          <linearGradient x1="50%" y1="24.537%" x2="50%" y2="100%" id="welcome-c">
            <stop stop-color="#1E40AF" offset="0%" />
            <stop stop-color="#3B82F6" stop-opacity="0" offset="100%" />
          </linearGradient>
        </defs>
        <g fill="none" fill-rule="evenodd">
          <g transform="rotate(64 36.592 105.604)">
            <mask id="welcome-d" fill="#fff">
              <use xlink:href="#welcome-a" />
            </mask>
            <use fill="url(#welcome-b)" xlink:href="#welcome-a" />
            <path fill="url(#welcome-c)" mask="url(#welcome-d)" d="M64-24h80v152H64z" />
          </g>
          <g transform="rotate(-51 91.324 -105.372)">
            <mask id="welcome-f" fill="#fff">
              <use xlink:href="#welcome-e" />
            </mask>
            <use fill="url(#welcome-b)" xlink:href="#welcome-e" />
            <path fill="url(#welcome-c)" mask="url(#welcome-f)" d="M40.333-15.147h50v95h-50z" />
          </g>
          <g transform="rotate(44 61.546 392.623)">
            <mask id="welcome-h" fill="#fff">
              <use xlink:href="#welcome-g" />
            </mask>
            <use fill="url(#welcome-b)" xlink:href="#welcome-g" />
            <path fill="url(#welcome-c)" mask="url(#welcome-h)" d="M40.333-15.147h50v95h-50z" />
          </g>
        </g>
      </svg>
    </div>

    <!-- Content -->
    <div class="relative">
      <h1 class="text-2xl md:text-3xl text-slate-800 dark:text-slate-100 font-bold mb-1">Welcome to Your Energy Portfolio 👋</h1>
      <p class="dark:text-blue-200">Your investments are making a difference today:</p>
      <div class="mt-3 flex flex-wrap gap-2">
        <div class="bg-white/80 dark:bg-slate-800/80 px-3 py-1 rounded-full text-sm font-medium text-investment-blue">
          CO₂ Reduction: 12.4 tons
        </div>
        <div class="bg-white/80 dark:bg-slate-800/80 px-3 py-1 rounded-full text-sm font-medium text-renewable-green">
          Portfolio Value: $34,250
        </div>
        <div class="bg-white/80 dark:bg-slate-800/80 px-3 py-1 rounded-full text-sm font-medium text-mosaic-accent">
          YTD Return: +8.5%
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'WelcomeBanner',
}
</script>