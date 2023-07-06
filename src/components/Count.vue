<template>
    <div>count: {{count}}</div>
</template>

<script>
export default {
    computed: {
    count () {
      return this.$store.getters.getCount
    }}
}
</script>