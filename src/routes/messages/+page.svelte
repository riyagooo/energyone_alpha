<script lang="ts">
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
</script>

<div class="relative flex h-full">
  <!-- Messages sidebar -->
  <MessagesSidebar {msgSidebarOpen} on:closeMsgSidebar={closeMsgSidebar} />

  <!-- Messages body -->
  <div class="grow flex flex-col transition-transform duration-300 ease-in-out">
    <MessagesHeader {msgSidebarOpen} on:toggleMsgSidebar={toggleMsgSidebar} />
    <MessagesBody />
    <MessagesFooter />
  </div>
</div>

<style>
  /* Mobile adjustments */
  @media (max-width: 640px) {
    .py-16 {
      padding-top: 2rem;
      padding-bottom: 2rem;
    }
  }
</style>