import { O as current_component, B as attr, y as pop, w as push, M as ensure_array_like, A as attr_class, G as escape_html, K as bind_props, J as stringify } from "./index.js";
import { f as fallback } from "./equality.js";
function onDestroy(fn) {
  var context = (
    /** @type {Component} */
    current_component
  );
  (context.d ??= []).push(fn);
}
function ChannelMenu($$payload, $$props) {
  push();
  let dropdownOpen = false;
  const clickHandler = (event) => {
    event.target;
    return;
  };
  const keyHandler = (event) => {
    return;
  };
  onDestroy(() => {
    document.removeEventListener("click", clickHandler);
    document.removeEventListener("keydown", keyHandler);
  });
  $$payload.out += `<div class="relative"><button class="grow flex items-center truncate" aria-haspopup="true"${attr("aria-expanded", dropdownOpen)}><img class="w-8 h-8 rounded-full mr-2" src="/images/user-avatar-32.png" width="32" height="32" alt="Group 01"> <div class="truncate"><span class="font-semibold text-white"><span class="text-blue-400">#</span> general</span></div> <svg class="w-3 h-3 shrink-0 ml-1 fill-current text-slate-400" viewBox="0 0 12 12"><path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z"></path></svg></button> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div>`;
  pop();
}
function DirectMessages($$payload, $$props) {
  push();
  let msgSidebarOpen = $$props["msgSidebarOpen"];
  const directMessages = [
    {
      id: 1,
      name: "Sarah Johnson",
      avatar: "/images/avatars/sarah.jpg",
      status: "online"
    },
    {
      id: 2,
      name: "Alex Chen",
      avatar: "/images/avatars/alex.jpg",
      status: "busy"
    },
    {
      id: 3,
      name: "Miguel Rodriguez",
      avatar: "/images/avatars/miguel.jpg",
      status: "offline"
    },
    {
      id: 4,
      name: "Priya Patel",
      avatar: "/images/avatars/priya.jpg",
      status: "online"
    },
    {
      id: 5,
      name: "John Wilson",
      avatar: "/images/avatars/john.jpg",
      status: "offline"
    }
  ];
  const each_array = ensure_array_like(directMessages);
  $$payload.out += `<div class="mt-6"><div class="text-xs font-semibold text-slate-400 uppercase mb-3">Direct Messages</div> <ul class="mb-6 space-y-0.5"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let user = each_array[$$index];
    $$payload.out += `<li><a${attr("href", `/messages/dm/${user.id}`)} class="flex items-center px-2.5 py-2 rounded transition duration-150 hover:bg-slate-800"><div class="relative mr-2"><img class="w-8 h-8 rounded-full"${attr("src", `https://ui-avatars.com/api/?name=${user.name}&background=1e293b&color=94a3b8`)}${attr("alt", user.name)}> <div${attr_class(`absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full border-2 border-slate-900 ${user.status === "online" ? "bg-blue-500" : user.status === "busy" ? "bg-rose-500" : "bg-slate-600"}`)}></div></div> <div class="truncate"><span class="text-sm font-medium text-slate-300">${escape_html(user.name)}</span></div></a></li>`;
  }
  $$payload.out += `<!--]--></ul></div>`;
  bind_props($$props, { msgSidebarOpen });
  pop();
}
function Channels($$payload, $$props) {
  push();
  let msgSidebarOpen = $$props["msgSidebarOpen"];
  const channels = [
    { id: 1, name: "general", unread: true },
    { id: 2, name: "projects", unread: false },
    {
      id: 3,
      name: "investment-opportunities",
      unread: false
    },
    { id: 4, name: "marketing", unread: true },
    { id: 5, name: "announcements", unread: false }
  ];
  const each_array = ensure_array_like(channels);
  $$payload.out += `<div><div class="text-xs font-semibold text-slate-400 uppercase mb-3">Channels</div> <ul class="mb-6 space-y-0.5"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let channel = each_array[$$index];
    $$payload.out += `<li><a${attr("href", `/messages/channel/${channel.id}`)} class="flex items-center px-2.5 py-2 rounded transition duration-150 hover:bg-slate-800"><div class="flex items-center"><span class="text-blue-400 mr-2">#</span> <span${attr_class(`text-sm font-medium ${channel.unread ? "text-white font-semibold" : "text-slate-300"}`)}>${escape_html(channel.name)}</span></div> `;
    if (channel.unread) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<div class="ml-auto w-2 h-2 rounded-full bg-blue-500"></div>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--></a></li>`;
  }
  $$payload.out += `<!--]--></ul> <div class="text-center mt-4"><button class="px-4 py-2 text-xs font-medium text-slate-300 border border-slate-700 rounded-md hover:bg-slate-800 w-full">+ Add New Channel</button></div></div>`;
  bind_props($$props, { msgSidebarOpen });
  pop();
}
function MessagesSidebar($$payload, $$props) {
  push();
  let msgSidebarOpen = $$props["msgSidebarOpen"];
  $$payload.out += `<div id="messages-sidebar"${attr_class("absolute z-20 top-0 bottom-0 w-full md:w-auto md:static md:top-auto md:bottom-auto -mr-px md:translate-x-0 transition-transform duration-200 ease-in-out", void 0, {
    "translate-x-0": msgSidebarOpen,
    "-translate-x-full": !msgSidebarOpen
  })}><div class="sticky top-16 bg-slate-900 overflow-x-hidden overflow-y-auto no-scrollbar shrink-0 border-r border-slate-700 md:w-72 xl:w-80 h-[calc(100dvh-64px)]"><div><div class="sticky top-0 z-10"><div class="flex items-center bg-slate-900 border-b border-slate-700 px-5 h-16"><div class="w-full flex items-center justify-between">`;
  ChannelMenu($$payload);
  $$payload.out += `<!----> <button class="p-1.5 shrink-0 rounded bg-slate-800 border border-slate-700 hover:border-slate-600 shadow-sm ml-2"><svg class="w-4 h-4 fill-current text-slate-500" viewBox="0 0 16 16"><path d="M11.7.3c-.4-.4-1-.4-1.4 0l-10 10c-.2.2-.3.4-.3.7v4c0 .6.4 1 1 1h4c.3 0 .5-.1.7-.3l10-10c.4-.4.4-1 0-1.4l-4-4zM4.6 14H2v-2.6l6-6L10.6 8l-6 6zM12 6.6L9.4 4 11 2.4 13.6 5 12 6.6z"></path></svg></button></div></div></div> <div class="px-5 py-4"><form class="relative"><label for="msg-search" class="sr-only">Search</label> <input id="msg-search" class="form-input w-full pl-9 bg-slate-800 border-slate-700 text-slate-200" type="search" placeholder="Search…"> <button class="absolute inset-0 right-auto group" type="submit" aria-label="Search"><svg class="w-4 h-4 shrink-0 fill-current text-slate-500 group-hover:text-slate-400 ml-3 mr-2" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z"></path><path d="M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z"></path></svg></button></form> `;
  DirectMessages($$payload, { msgSidebarOpen });
  $$payload.out += `<!----> `;
  Channels($$payload, { msgSidebarOpen });
  $$payload.out += `<!----></div></div></div></div>`;
  bind_props($$props, { msgSidebarOpen });
  pop();
}
function MessagesHeader($$payload, $$props) {
  push();
  let msgSidebarOpen = fallback($$props["msgSidebarOpen"], true);
  $$payload.out += `<div class="bg-slate-800 border-b border-slate-700 h-16 flex items-center px-4 md:px-6 justify-between z-20"><div class="flex items-center"><button type="button" class="md:hidden text-slate-400 hover:text-white mr-3"><span class="sr-only">Open sidebar</span> <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z"></path></svg></button> <h2 class="text-xl font-bold"><span class="text-blue-400">#</span> <span class="text-white">general</span></h2></div> <div class="flex items-center space-x-3"><button class="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-slate-700"><svg class="w-5 h-5 fill-current" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg></button> <button class="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-slate-700"><svg class="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v1h8v-1zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-1a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 18v1h-3zM4.75 14.094A5.973 5.973 0 004 17v1H1v-1a3 3 0 013.75-2.906z"></path></svg></button> <button class="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-slate-700"><svg class="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path></svg></button></div></div>`;
  bind_props($$props, { msgSidebarOpen });
  pop();
}
function MessagesBody($$payload, $$props) {
  push();
  const messages = [
    {
      id: 1,
      user: {
        name: "Alex Chen",
        avatar: "/images/avatars/alex.jpg"
      },
      timestamp: "2:32 PM",
      date: "Today",
      content: "Has anyone looked at the ROI projections for the Tuscaloosa solar farm?",
      attachments: []
    },
    {
      id: 2,
      user: {
        name: "Sarah Johnson",
        avatar: "/images/avatars/sarah.jpg"
      },
      timestamp: "2:35 PM",
      date: "Today",
      content: "I just reviewed them. The P50 production case looks promising, but I have concerns about the grid interconnection timeline.",
      attachments: []
    },
    {
      id: 3,
      user: {
        name: "Miguel Rodriguez",
        avatar: "/images/avatars/miguel.jpg"
      },
      timestamp: "2:40 PM",
      date: "Today",
      content: "The transmission capacity study came back positive. We should be able to connect by Q3 next year.",
      attachments: []
    },
    {
      id: 4,
      user: {
        name: "Alex Chen",
        avatar: "/images/avatars/alex.jpg"
      },
      timestamp: "2:45 PM",
      date: "Today",
      content: "Great news! What about the tax equity investor? Are they still on board?",
      attachments: []
    },
    {
      id: 5,
      user: {
        name: "Priya Patel",
        avatar: "/images/avatars/priya.jpg"
      },
      timestamp: "2:50 PM",
      date: "Today",
      content: "Yes, they confirmed yesterday. I've uploaded the term sheet to the shared folder.",
      attachments: [
        {
          name: "TaxEquity_TermSheet.pdf",
          size: "2.4 MB"
        }
      ]
    }
  ];
  const each_array = ensure_array_like(messages);
  $$payload.out += `<div class="grow overflow-hidden"><div class="h-full overflow-y-auto px-4 py-6 md:px-6 space-y-6"><div class="text-center py-8"><div class="inline-flex items-center justify-center w-12 h-12 bg-slate-700 rounded-full mb-4"><svg class="w-6 h-6 fill-current text-slate-400" viewBox="0 0 20 20"><path d="M10 0C4.5 0 0 4.5 0 10c0 5.5 4.5 10 10 10s10-4.5 10-10C20 4.5 15.5 0 10 0zM8 15L3 10l2-2 3 3 7-7 2 2-9 9z"></path></svg></div> <h2 class="text-2xl font-bold text-slate-200 mb-2">Welcome to #general</h2> <p class="text-sm text-slate-400">This is the beginning of the channel - a place for project discussions, updates, and collaboration.</p></div> <div class="relative text-center"><div class="absolute inset-0 flex items-center"><div class="w-full border-t border-slate-700"></div></div> <div class="relative flex justify-center"><span class="px-2 bg-slate-900 text-xs font-medium text-slate-500">Today</span></div></div> <!--[-->`;
  for (let i = 0, $$length = each_array.length; i < $$length; i++) {
    let message = each_array[i];
    $$payload.out += `<div class="flex items-start group"><img class="w-8 h-8 rounded-full mr-4"${attr("src", `https://ui-avatars.com/api/?name=${stringify(message.user.name)}&background=1e293b&color=94a3b8`)}${attr("alt", message.user.name)}> <div class="grow"><div class="flex items-center mb-1"><h3 class="font-bold text-slate-200 text-sm">${escape_html(message.user.name)}</h3> <span class="text-xs text-slate-500 ml-2">${escape_html(message.timestamp)}</span></div> <div class="text-sm text-slate-300 space-y-2"><p>${escape_html(message.content)}</p> `;
    if (message.attachments.length > 0) {
      $$payload.out += "<!--[-->";
      const each_array_1 = ensure_array_like(message.attachments);
      $$payload.out += `<div class="flex flex-wrap gap-2 mt-2"><!--[-->`;
      for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
        let attachment = each_array_1[$$index];
        $$payload.out += `<div class="bg-slate-800 border border-slate-700 rounded-md px-3 py-2 flex items-center"><svg class="w-4 h-4 text-slate-400 mr-2" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clip-rule="evenodd"></path></svg> <span class="text-xs text-slate-300">${escape_html(attachment.name)} <span class="text-slate-500">(${escape_html(attachment.size)})</span></span></div>`;
      }
      $$payload.out += `<!--]--></div>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--></div></div> <div class="flex opacity-0 group-hover:opacity-100 transition-opacity"><button class="p-1 text-slate-500 hover:text-slate-300 rounded-full"><svg class="w-4 h-4 fill-current" viewBox="0 0 16 16"><path d="M10 9.172l4-4L16 7l-6 6-6-6 2-1.828 4 4z"></path></svg></button> <button class="p-1 text-slate-500 hover:text-slate-300 rounded-full"><svg class="w-4 h-4 fill-current" viewBox="0 0 16 16"><path d="M3 1v14l6-5 6 5V1H3z"></path></svg></button></div></div>`;
  }
  $$payload.out += `<!--]--></div></div>`;
  pop();
}
function MessagesFooter($$payload) {
  let messageText = "";
  $$payload.out += `<div class="border-t border-slate-700 px-4 md:px-6 py-4 bg-slate-800"><div class="flex gap-3"><button class="shrink-0 rounded-full p-2 text-slate-400 hover:text-white hover:bg-slate-700"><svg class="w-5 h-5 fill-current" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clip-rule="evenodd"></path></svg></button> <div class="grow"><textarea placeholder="Message #general" class="w-full bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-400 resize-none overflow-hidden text-white placeholder-slate-400 text-sm" rows="1">`;
  const $$body = escape_html(messageText);
  if ($$body) {
    $$payload.out += `${$$body}`;
  }
  $$payload.out += `</textarea></div> <div class="flex shrink-0 items-center gap-2"><button class="rounded-full p-2 text-slate-400 hover:text-white hover:bg-slate-700"><svg class="w-5 h-5 fill-current" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-7.536 5.879a1 1 0 001.415 0 3 3 0 014.242 0 1 1 0 001.415-1.415 5 5 0 00-7.072 0 1 1 0 000 1.415z" clip-rule="evenodd"></path></svg></button> <button class="flex items-center justify-center rounded-full p-2 bg-gradient-to-t from-blue-600 to-blue-400 hover:to-blue-500 text-white disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none"${attr("disabled", !messageText.trim(), true)}><svg class="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path></svg></button></div></div></div>`;
}
export {
  MessagesSidebar as M,
  MessagesHeader as a,
  MessagesBody as b,
  MessagesFooter as c
};
