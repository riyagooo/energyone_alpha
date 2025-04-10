<script lang="ts">
  interface Member {
    id: number;
    name: string;
    image: string;
    link: string;
    location: string;
    content: string;
    expertise: string;
  }
  
  export let member: Member;
  
  // Map expertise to badge colors
  const expertiseColors: Record<string, string> = {
    "Solar": "bg-amber-500",
    "Wind": "bg-blue-500",
    "Hydro": "bg-cyan-500",
    "Geothermal": "bg-red-500",
    "Storage": "bg-purple-500",
    "Hydrogen": "bg-sky-500",
    "ESG": "bg-green-500",
    "Finance": "bg-emerald-500",
    "Policy": "bg-indigo-500",
    "Microgrids": "bg-orange-500",
    "Community": "bg-lime-500",
    "Agriculture": "bg-teal-500"
  };
  
  // Get the badge color based on expertise
  $: badgeColor = expertiseColors[member.expertise] || "bg-blue-500";
</script>

<div class="bg-slate-800 shadow-lg rounded-md border border-slate-700 h-full">
  <div class="flex flex-col h-full">
    <!-- Card top -->
    <div class="grow p-5">
      <div class="flex justify-between items-start">
        <!-- Image + name -->
        <header>
          <div class="flex mb-2">
            <a class="relative inline-flex items-start mr-5" href={member.link}>
              <div class="absolute top-0 right-0 -mr-2 bg-slate-700 rounded-full shadow">
                <div class="w-8 h-8 flex items-center justify-center {badgeColor} rounded-full">
                  <span class="text-xs font-semibold text-white">{member.expertise.slice(0, 2)}</span>
                </div>
              </div>
              <img class="rounded-full" src={member.image} width="64" height="64" alt={member.name} />
            </a>
            <div class="mt-1 pr-1">
              <a class="inline-flex text-white hover:text-blue-400" href={member.link}>
                <h2 class="text-xl leading-snug justify-center font-semibold">{member.name}</h2>
              </a>
              <div class="flex items-center">
                <span class="text-sm font-medium text-slate-400 -mt-0.5 mr-1">-&gt;</span> 
                <span>{member.location}</span>
              </div>
            </div>
          </div>
        </header>
        <!-- Menu button -->
        <div class="relative inline-flex shrink-0">
          <button class="text-slate-400 hover:text-white">
            <svg class="w-4 h-4 fill-current" viewBox="0 0 16 16">
              <path d="M8 9c.8 0 1.5-.7 1.5-1.5S8.8 6 8 6s-1.5.7-1.5 1.5S7.2 9 8 9zm0 4c.8 0 1.5-.7 1.5-1.5S8.8 10 8 10s-1.5.7-1.5 1.5.7 1.5 1.5 1.5zm0-8c.8 0 1.5-.7 1.5-1.5S8.8 3 8 3 6.5 3.7 6.5 4.5 7.2 5 8 5z" />
            </svg>
          </button>
        </div>
      </div>
      <!-- Bio -->
      <div class="mt-2">
        <div class="text-sm text-slate-300">{member.content}</div>
      </div>
    </div>
    <!-- Card footer -->
    <div class="border-t border-slate-700">
      <div class="flex divide-x divide-slate-700">
        <a class="block flex-1 text-center text-sm text-blue-400 hover:text-blue-300 font-medium px-3 py-4" href="/messages">
          <div class="flex items-center justify-center">
            <svg class="w-4 h-4 fill-current shrink-0 mr-2" viewBox="0 0 16 16">
              <path d="M8 0C3.6 0 0 3.1 0 7s3.6 7 8 7h.6l5.4 2v-4.4c1.2-1.2 2-2.8 2-4.6 0-3.9-3.6-7-8-7zm4 10.8v2.3L8.9 12H8c-3.3 0-6-2.2-6-5s2.7-5 6-5 6 2.2 6 5c0 2.2-2 3.8-2 3.8z" />
            </svg>
            <span>Message</span>
          </div>
        </a>
        <a class="block flex-1 text-center text-sm text-slate-400 hover:text-white font-medium px-3 py-4 group" href="/communities/profile/{member.id}">
          <div class="flex items-center justify-center">
            <svg class="w-4 h-4 fill-current text-slate-500 group-hover:text-slate-300 shrink-0 mr-2" viewBox="0 0 16 16">
              <path d="M6.974 14c-.3 0-.7-.2-.9-.5l-2.2-3.7-2.1 2.8c-.3.4-1 .5-1.4.2-.4-.3-.5-1-.2-1.4l3-4c.2-.3.5-.4.9-.4.3 0 .6.2.8.5l2 3.3 3.3-8.1c0-.4.4-.7.8-.7s.8.2.9.6l4 8c.2.5 0 1.1-.4 1.3-.5.2-1.1 0-1.3-.4l-3-6-3.2 7.9c-.2.4-.6.6-1 .6z" />
            </svg>
            <span>View Profile</span>
          </div>
        </a>
      </div>
    </div>
  </div>
</div> 