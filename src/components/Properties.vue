<template>
    <div class="properties">
        <router-link :to="{name: 'home'}">Return to Home</router-link>
        <div class="properties row">
            <div v-for="property in properties" class="col-sm-4">
                <img :src="property.imgUrl" alt="a property">
                <p>Type: {{property.zoning}} - {{property.type}}</p>
                <router-link :to="{name: 'propertyDetails', params: {propertyId: property.id}}">Description</router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Properties',
        data() {
            return {

            }
        },
        computed: {
            properties() {
                return this.$store.state.properties
            }
        }
    }
</script>

<style>
</style>