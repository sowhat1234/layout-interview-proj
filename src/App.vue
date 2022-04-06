<template>
  <app-header />
  <RouterView />
  <app-footer />
</template>

<script>
  import appHeader from "./components/app-header.vue";
  import appFooter from "@/components/app-footer.vue";

  export default {
    components: {
      appHeader,
      appFooter,
    },
  };
</script>

<style></style>
