<template>
    <div class="PropertyDetails">
        <router-link :to="{name: 'home'}">Return to Home</router-link>
        <div v-if="property">
            <img :src="property.imgUrl" alt="">
            <h3>{{property.zoning}} - {{property.type}}</h3>
            <p>{{property.description}}</p>
        </div>
        <div v-else>CANNOT FIND THAT PROPERTY</div>
    </div>
</template>

<script>
    export default {
        name: 'PropertyDetails',
        data() {
            return {
                id: this.$route.params.propertyId
            }
        },
        computed: {
            property() {
                return this.$store.state.properties[this.$route.params.propertyId]
            }
        }
    }
</script>

<style>
</style>