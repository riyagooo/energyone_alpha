<script lang="ts">
  import { onMount } from 'svelte';
  import SearchForm from './SearchForm.svelte';
  import CommunityMemberCard from './CommunityMemberCard.svelte';
  import PaginationNumeric from './PaginationNumeric.svelte';
  
  // Sample community members data
  let members = [
    {
      id: 1,
      name: "Sophia Reynolds",
      image: "https://ui-avatars.com/api/?name=Sophia+Reynolds&background=1e293b&color=94a3b8",
      link: "/communities/profile/1",
      location: "🇺🇸",
      content: "Solar Investment Specialist | 10+ years experience in PV project financing | Clean energy advocate",
      expertise: "Solar"
    },
    {
      id: 2,
      name: "Marcus Chen",
      image: "https://ui-avatars.com/api/?name=Marcus+Chen&background=1e293b&color=94a3b8",
      link: "/communities/profile/2",
      location: "🇨🇦",
      content: "Wind Energy Developer | LEED Certified | Specializing in offshore wind projects across North America",
      expertise: "Wind"
    },
    {
      id: 3,
      name: "Aisha Patel",
      image: "https://ui-avatars.com/api/?name=Aisha+Patel&background=1e293b&color=94a3b8",
      link: "/communities/profile/3",
      location: "🇮🇳",
      content: "ESG Investment Analyst | Renewable energy market specialist | Focusing on emerging markets",
      expertise: "ESG"
    },
    {
      id: 4,
      name: "Miguel Rodriguez",
      image: "https://ui-avatars.com/api/?name=Miguel+Rodriguez&background=1e293b&color=94a3b8",
      link: "/communities/profile/4",
      location: "🇪🇸",
      content: "Energy Storage Expert | Battery technology consultant | Grid-scale solutions architect",
      expertise: "Storage"
    },
    {
      id: 5,
      name: "Emma Thompson",
      image: "https://ui-avatars.com/api/?name=Emma+Thompson&background=1e293b&color=94a3b8",
      link: "/communities/profile/5",
      location: "🇬🇧",
      content: "Community Solar Developer | Focus on shared renewable programs | Local energy independence advocate",
      expertise: "Community"
    },
    {
      id: 6,
      name: "Jamal Williams",
      image: "https://ui-avatars.com/api/?name=Jamal+Williams&background=1e293b&color=94a3b8",
      link: "/communities/profile/6",
      location: "🇺🇸",
      content: "Green Finance Specialist | Climate-focused investment strategies | Carbon credit markets expert",
      expertise: "Finance"
    },
    {
      id: 7,
      name: "Lena Schmidt",
      image: "https://ui-avatars.com/api/?name=Lena+Schmidt&background=1e293b&color=94a3b8",
      link: "/communities/profile/7",
      location: "🇩🇪",
      content: "Renewable Energy Policy Advisor | Former regulatory commissioner | Grid integration specialist",
      expertise: "Policy"
    },
    {
      id: 8,
      name: "Takashi Yamamoto",
      image: "https://ui-avatars.com/api/?name=Takashi+Yamamoto&background=1e293b&color=94a3b8",
      link: "/communities/profile/8",
      location: "🇯🇵",
      content: "Hydrogen & Fuel Cell Engineer | Clean transportation solutions | Advanced energy systems architect",
      expertise: "Hydrogen"
    },
    {
      id: 9,
      name: "Sarah Johnson",
      image: "https://ui-avatars.com/api/?name=Sarah+Johnson&background=1e293b&color=94a3b8",
      link: "/communities/profile/9",
      location: "🇦🇺",
      content: "Sustainable Agriculture Investor | Agrivoltaics specialist | Land use optimization expert",
      expertise: "Agriculture"
    },
    {
      id: 10,
      name: "Daniel Okafor",
      image: "https://ui-avatars.com/api/?name=Daniel+Okafor&background=1e293b&color=94a3b8",
      link: "/communities/profile/10",
      location: "🇳🇬",
      content: "Microgrid Developer | Rural electrification expert | Focused on emerging market energy access",
      expertise: "Microgrids"
    },
    {
      id: 11,
      name: "Elena Petrov",
      image: "https://ui-avatars.com/api/?name=Elena+Petrov&background=1e293b&color=94a3b8",
      link: "/communities/profile/11",
      location: "🇷🇺",
      content: "Geothermal Energy Specialist | Thermal system design | Deep earth resource development",
      expertise: "Geothermal"
    },
    {
      id: 12,
      name: "Carlos Mendoza",
      image: "https://ui-avatars.com/api/?name=Carlos+Mendoza&background=1e293b&color=94a3b8",
      link: "/communities/profile/12",
      location: "🇲🇽",
      content: "Hydroelectric Project Manager | Water resource management | Environmental impact assessment",
      expertise: "Hydro"
    }
  ];
</script>

<div class="bg-slate-900 text-white">
  <main class="grow">
    <div class="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-7xl mx-auto">

      <!-- Page header -->
      <div class="sm:flex sm:justify-between sm:items-center mb-8">

        <!-- Left: Title -->
        <div class="mb-4 sm:mb-0">
          <h1 class="text-2xl md:text-3xl text-white font-bold">Renewable Energy Community ✨</h1>
          <p class="text-slate-400 mt-1">Connect with experts and investors in the clean energy ecosystem</p>
        </div>

        <!-- Right: Actions  -->
        <div class="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
          <!-- Search form -->
          <SearchForm />
          <!-- Add member button -->
          <button class="btn bg-gradient-to-t from-blue-600 to-blue-400 hover:to-blue-500 text-white px-3 py-2 rounded-md">
            <svg class="w-4 h-4 fill-current opacity-50 shrink-0" viewBox="0 0 16 16">
              <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
            </svg>
            <span class="hidden xs:block ml-2">Add Member</span>
          </button>
        </div>            

      </div>

      <!-- Cards -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {#each members as member}
          <CommunityMemberCard {member} />
        {/each}
      </div>
      
      <!-- Pagination -->
      <div class="mt-8">
        <PaginationNumeric />
      </div>           

    </div>
  </main>
</div> 