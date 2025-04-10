<script>
  import { page } from '$app/stores';
</script>

<div class="min-h-screen min-h-[calc(var(--vh,1vh)*100)] w-full bg-slate-900 flex flex-col">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16">
    <!-- Hero Section -->
    <div class="text-center mb-16">
      <h1 class="text-4xl font-bold text-blue-400 sm:text-5xl">Contact Us</h1>
      <p class="mt-4 text-xl text-slate-300">
        Get in touch with our team to discuss investment opportunities or learn more about EnergyOne.
      </p>
    </div>

    <!-- Main Content -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <!-- Contact Form Section -->
      <div class="bg-slate-800 rounded-lg shadow-lg p-8">
        <h2 class="text-2xl font-bold text-blue-400 mb-6">Contact EnergyOne Team</h2>
        <form class="space-y-6">
          <div>
            <label for="name" class="block text-sm font-medium text-slate-300">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              class="mt-1 block w-full rounded-md bg-slate-700 border-slate-600 text-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          <div>
            <label for="email" class="block text-sm font-medium text-slate-300">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              class="mt-1 block w-full rounded-md bg-slate-700 border-slate-600 text-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          <div>
            <label for="subject" class="block text-sm font-medium text-slate-300">Subject</label>
            <select
              id="subject"
              name="subject"
              class="mt-1 block w-full rounded-md bg-slate-700 border-slate-600 text-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="investment">Investment Inquiry</option>
              <option value="technical">Technical Questions</option>
              <option value="partnership">Partnership Opportunities</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label for="message" class="block text-sm font-medium text-slate-300">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              class="mt-1 block w-full rounded-md bg-slate-700 border-slate-600 text-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            ></textarea>
          </div>

          <div>
            <button
              type="submit"
              class="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-t from-blue-600 to-blue-400 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>

      <!-- About Us Section -->
      <div class="space-y-8">
        <!-- Company Overview -->
        <div class="bg-slate-800 rounded-lg shadow-lg p-8">
          <h2 class="text-2xl font-bold text-blue-400 mb-4">About EnergyOne</h2>
          <p class="text-slate-300">
            EnergyOne is revolutionizing renewable energy investment through an innovative platform that combines cutting-edge AI technology with deep market expertise. We specialize in connecting global investors with high-potential sustainable infrastructure projects in emerging markets, offering comprehensive risk assessment and intelligent investment solutions to drive the transition to clean energy.
          </p>
        </div>

        <!-- Team Section -->
        <div class="bg-slate-800 rounded-lg shadow-lg p-8">
          <h2 class="text-2xl font-bold text-blue-400 mb-6">Our Team</h2>
          <div class="space-y-4">
            <div class="border-b border-slate-700 pb-4">
              <h3 class="text-lg font-medium text-slate-300">Miriam Triassi</h3>
              <p class="text-sm text-slate-400">CEO</p>
            </div>

            <div class="border-b border-slate-700 pb-4">
              <h3 class="text-lg font-medium text-slate-300">Corentin Donatien</h3>
              <p class="text-sm text-slate-400">CFO</p>
            </div>

            <div class="border-b border-slate-700 pb-4">
              <h3 class="text-lg font-medium text-slate-300">Riya Yingran Guo</h3>
              <p class="text-sm text-slate-400">CTO</p>
            </div>

            <div class="border-b border-slate-700 pb-4">
              <h3 class="text-lg font-medium text-slate-300">Maria Jimena Jurado</h3>
              <p class="text-sm text-slate-400">CMO</p>
            </div>

            <div class="border-b border-slate-700 pb-4">
              <h3 class="text-lg font-medium text-slate-300">Samuel Dumesh</h3>
              <p class="text-sm text-slate-400">CRO</p>
            </div>

            <div>
              <h3 class="text-lg font-medium text-slate-300">Cleo Winkler</h3>
              <p class="text-sm text-slate-400">Chief AI Officer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  /* Mobile adjustments */
  @media (max-width: 640px) {
    .py-16 {
      padding-top: 2rem;
      padding-bottom: 2rem;
    }
    
    h1 {
      font-size: 1.875rem;
      line-height: 2.25rem;
    }
    
    h2 {
      font-size: 1.25rem;
      line-height: 1.75rem;
    }
    
    .text-xl {
      font-size: 1.125rem;
      line-height: 1.75rem;
    }
  }
</style> 