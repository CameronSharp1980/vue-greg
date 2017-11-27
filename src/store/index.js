import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

var store = new Vuex.Store({
    state: {
        automotives: {
            'lk34kl4lk234blk23b4bjk': {
                id: 'lk34kl4lk234blk23b4bjk',
                make: 'For',
                model: 'Mustard',
                color: 'grey poupon',
                description: 'Do you have this car? Its grey poupon get it!!!',
                imgUrl: 'http://loremflickr.com/200/200/car'
            },
            'lk34kwsefdceev234blk23b4bjk': {
                id: 'lk34kwsefdceev234blk23b4bjk',
                make: 'Cevy',
                model: 'Oregon',
                color: 'Tree',
                description: "Smells of coffee and beard oil",
                imgUrl: 'http://loremflickr.com/200/200/car'
            },
            'lk34kl4lk235sef541b4125bjk': {
                id: 'lk34kl4lk235sef541b4125bjk',
                make: 'Doge',
                model: 'Bark',
                color: 'Much Happy',
                description: "Such speed, fastness, wow!",
                imgUrl: 'http://loremflickr.com/200/200/car'
            }

        },
        properties: {
            'hjklh43h5kjhjkl45': {
                id: 'hjklh43h5kjhjkl45',
                zoning: 'Industrial',
                type: 'Warehouse',
                squareFootage: 10000,
                description: 'Its a warehouse! get you one!!!',
                imgUrl: 'http://loremflickr.com/200/200/buiding'
            },
            'hjklh43h5kjh546jkl45': {
                id: 'hjklh43h5kjh546jkl45',
                zoning: 'Commercial',
                type: 'Store front',
                squareFootage: 1500,
                description: "Its a Store front! get you one!!!",
                imgUrl: 'http://loremflickr.com/200/200/buiding'
            },
            'hjklh43345hfhdh5kjh546jkl45': {
                id: 'hjklh43345hfhdh5kjh546jkl45',
                zoning: 'Residential',
                type: 'Rambler',
                squareFootage: 1700,
                description: "Its a Rambler! get you one!!!",
                imgUrl: 'http://loremflickr.com/200/200/buiding'
            }

        }
    },
    mutations: {},
    actions: {}
})

export default store