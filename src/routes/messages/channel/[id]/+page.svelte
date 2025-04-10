<script lang="ts">
  import { page } from '$app/stores';
  import MessagesSidebar from '$lib/components/messages/MessagesSidebar.svelte';
  import MessagesHeader from '$lib/components/messages/MessagesHeader.svelte';
  import MessagesBody from '$lib/components/messages/MessagesBody.svelte';
  import MessagesFooter from '$lib/components/messages/MessagesFooter.svelte';

  let msgSidebarOpen = true;

  function toggleMsgSidebar() {
    msgSidebarOpen = !msgSidebarOpen;
  }

  function closeMsgSidebar() {
    msgSidebarOpen = false;
  }
  
  // Get the channel ID from the URL
  const channelId = $page.params.id;
</script>

<div class="relative flex h-full">
  <MessagesSidebar {msgSidebarOpen} on:closeMsgSidebar={closeMsgSidebar} />
  
  <div class="grow flex flex-col transition-transform duration-300 ease-in-out">
    <MessagesHeader {msgSidebarOpen} on:toggleMsgSidebar={toggleMsgSidebar} />
    <MessagesBody />
    <MessagesFooter />
  </div>
</div> 