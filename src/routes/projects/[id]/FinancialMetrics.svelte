<script>
  export let project;

  function formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(amount);
  }

  function formatPercent(value) {
    return new Intl.NumberFormat('en-US', {
      style: 'percent',
      maximumFractionDigits: 1
    }).format(value / 100);
  }

  function formatYears(value) {
    return `${value} years`;
  }
</script>

<div class="bg-white rounded-lg shadow-sm p-6 mb-6">
  <h2 class="text-lg font-semibold text-slate-900 mb-4">Financial Metrics</h2>

  <!-- Investment Structure -->
  <div class="mb-6">
    <h3 class="text-base font-medium text-slate-900 mb-3">Investment Structure</h3>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div class="p-4 bg-slate-50 rounded-lg">
        <div class="text-sm text-slate-500">Total Investment</div>
        <div class="text-xl font-semibold text-slate-900">{formatCurrency(project.investment)}</div>
      </div>
      <div class="p-4 bg-slate-50 rounded-lg">
        <div class="text-sm text-slate-500">Equity</div>
        <div class="text-xl font-semibold text-slate-900">{formatCurrency(project.investment * 0.3)}</div>
        <div class="text-sm text-slate-500">30%</div>
      </div>
      <div class="p-4 bg-slate-50 rounded-lg">
        <div class="text-sm text-slate-500">Debt</div>
        <div class="text-xl font-semibold text-slate-900">{formatCurrency(project.investment * 0.7)}</div>
        <div class="text-sm text-slate-500">70%</div>
      </div>
    </div>
  </div>

  <!-- Key Metrics -->
  <div class="mb-6">
    <h3 class="text-base font-medium text-slate-900 mb-3">Key Metrics</h3>
    <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
      <div class="p-4 bg-slate-50 rounded-lg">
        <div class="text-sm text-slate-500">Levered IRR</div>
        <div class="text-xl font-semibold text-slate-900">{formatPercent(project.irr)}</div>
      </div>
      <div class="p-4 bg-slate-50 rounded-lg">
        <div class="text-sm text-slate-500">Unlevered IRR</div>
        <div class="text-xl font-semibold text-slate-900">{formatPercent(project.irr * 0.8)}</div>
      </div>
      <div class="p-4 bg-slate-50 rounded-lg">
        <div class="text-sm text-slate-500">NPV</div>
        <div class="text-xl font-semibold text-slate-900">{formatCurrency(project.investment * 1.2)}</div>
      </div>
      <div class="p-4 bg-slate-50 rounded-lg">
        <div class="text-sm text-slate-500">Payback Period</div>
        <div class="text-xl font-semibold text-slate-900">{formatYears(8)}</div>
      </div>
    </div>
  </div>

  <!-- Debt Metrics -->
  <div>
    <h3 class="text-base font-medium text-slate-900 mb-3">Debt Metrics</h3>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div class="p-4 bg-slate-50 rounded-lg">
        <div class="text-sm text-slate-500">DSCR</div>
        <div class="text-xl font-semibold text-slate-900">1.45x</div>
      </div>
      <div class="p-4 bg-slate-50 rounded-lg">
        <div class="text-sm text-slate-500">LLCR</div>
        <div class="text-xl font-semibold text-slate-900">1.65x</div>
      </div>
      <div class="p-4 bg-slate-50 rounded-lg">
        <div class="text-sm text-slate-500">WACC</div>
        <div class="text-xl font-semibold text-slate-900">{formatPercent(7.5)}</div>
      </div>
    </div>
  </div>
</div> 