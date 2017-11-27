<template>
    <div class="Details">
        <router-link :to="{name: 'home'}">Return to Home</router-link>
        <div v-if="car">
            <img :src="car.imgUrl" alt="">
            <h3>{{car.make}} - {{car.model}}</h3>
            <p>{{car.description}}</p>
        </div>
        <div v-else>CANNOT FIND THAT CAR</div>
    </div>
</template>

<script>
    export default {
        name: 'Details',
        data() {
            return {
                id: this.$route.params.carId
            }
        },
        computed: {
            car() {
                return this.$store.state.automotives[this.$route.params.carId]
            }
        }
    }
</script>

<style>
</style>