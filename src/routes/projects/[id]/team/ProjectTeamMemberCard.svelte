<script lang="ts">
  interface Member {
    id: number;
    name: string;
    role: string;
    company: string;
    experience: string;
    specialty: string;
    image: string;
    location: string;
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
    "Finance": "bg-emerald-500",
    "Technical": "bg-indigo-500",
    "EPC": "bg-orange-500",
    "O&M": "bg-lime-500",
    "Environment": "bg-teal-500",
    "Policy": "bg-violet-500"
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
            <div class="relative inline-flex items-start mr-5">
              <div class="absolute top-0 right-0 -mr-2 bg-slate-700 rounded-full shadow">
                <div class="w-8 h-8 flex items-center justify-center {badgeColor} rounded-full">
                  <span class="text-xs font-semibold text-white">{member.expertise.slice(0, 2)}</span>
                </div>
              </div>
              <img class="rounded-full" src={member.image} width="64" height="64" alt={member.name} />
            </div>
            <div class="mt-1 pr-1">
              <div class="inline-flex text-white">
                <h2 class="text-xl leading-snug justify-center font-semibold">{member.name}</h2>
              </div>
              <div class="flex flex-col">
                <span class="text-blue-400 text-sm">{member.role}</span>
                <span class="text-slate-400 text-xs">{member.company}</span>
                <span class="text-slate-500 text-xs mt-1">{member.location}</span>
              </div>
            </div>
          </div>
        </header>
      </div>
      <!-- Bio -->
      <div class="mt-2">
        <div class="text-sm text-slate-300">{member.experience}</div>
        <div class="text-sm text-slate-400 mt-1">Specializes in {member.specialty}</div>
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
        <a class="block flex-1 text-center text-sm text-slate-400 hover:text-white font-medium px-3 py-4 group" href="/contact">
          <div class="flex items-center justify-center">
            <svg class="w-4 h-4 fill-current text-slate-500 group-hover:text-slate-300 shrink-0 mr-2" viewBox="0 0 16 16">
              <path d="M11 0c2.8 0 5 2.2 5 5 0 2.2-1.5 4.1-3.5 4.7.1.2.3.5.4.8.1.4.2 1 .1 1.5-.1 1-.5 1.9-1.3 2.7-1.9 1.9-4.6 2.3-6.9 1.1l3.9-3.9c2.5-2.6 2.5-6.5 0-9C7.2 1.4 5.2.5 3.3.9L7.2 4c.2.1.4.3.5.5L11 0zM5.5 11.5c-.5.5-1.4.5-1.9 0s-.5-1.4 0-1.9l4.7-4.7c.5-.5 1.4-.5 1.9 0s.5 1.4 0 1.9l-4.7 4.7z" />
            </svg>
            <span>Schedule Call</span>
          </div>
        </a>
      </div>
    </div>
  </div>
</div> 