<template>
    <Count />
    <button @click="Count">click here</button>
</template>


<script>
import Count from './Count.vue'

export default {
    components: {
        Count
    },
    computed: {
    count () {
      return this.$store.state.count
}
    },
    methods: {
        Count() {
            this.$store.commit("increment")
        }
    }
}
</script>
