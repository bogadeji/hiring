<template>
    <div class="name">
        <p>{{ userDetails.name }}</p>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        computed: {
            ...mapGetters ([
                'userDetails'
            ])
        }
    }
</script>