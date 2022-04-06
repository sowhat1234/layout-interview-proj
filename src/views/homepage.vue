<template>
  <section>
    <illustrationIntro />
    <icons />
    <stayProductive />
    <boxes />
    <get-early />
    <div class="big-quets full">
      <img src="@/assets/imgs/bg-quotes.png" alt="" />
    </div>
  </section>
</template>

<script>
  import appHeader from "../components/app-header.vue";
  import illustrationIntro from "../components/illustration-intro.vue";
  import icons from "@/components/icons.vue";
  import stayProductive from "@/components/stay-productive.vue";
  import boxes from "@/components/boxes.vue";
  import GetEarly from "../components/get-early.vue";
  export default {
    name: "homepage",
    components: {
      appHeader,
      illustrationIntro,
      icons,
      stayProductive,
      boxes,
      GetEarly,
    },
  };
</script>

<style></style>
