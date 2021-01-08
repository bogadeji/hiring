<template>
    <div class="socials">
        <a href="https://instagram.com/aquilaveionofficial" target="_blank" v-if="this.instagram"><i class="fab fa-instagram"></i></a>
        <a href="https://twitter.com/aquilaveion" target="_blank" v-if="twitter"><i class="fab fa-twitter-square"></i></a>
        <a href="https://www.snapchat.com/add/aquilaveionsnaps" v-if="snapchat"><i class="fab fa-snapchat-square"></i></a>
        <a href="mailto://aquilaveion@aquil.com" target="_blank" v-if="email"><i class="fas fa-envelope-square"></i></a>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        data() {
            return {
                instagram: null,
                twitter: null,
                email: null,
                snapchat: null
            }
        },
        computed: {
            ...mapGetters ([
                'userDetails'
            ]),
            socialHandles() {
                return null ?? this.userDetails.social_media
            }
        }, 
        watch: {
            socialHandles: function(val) {
                this.twitter = null?? val.twitter
                this.instagram = null?? val.instagram
                this.snapchat = null ?? val.snapchat
                this.email = null ?? val.email
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>