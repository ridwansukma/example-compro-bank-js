<template>
    <div>
        <div>
            <AppHeader />
        </div>
        <div>
            <nuxt />
            <div id="layout-blur" class="hidden backdrop-blur-md absolute top-0 bottom-0 left-0 right-0"></div>
        </div>
        <div>
            <AppFooter />
        </div>
    </div>
</template>

<script>
    import AppHeader from '@/components/AppHeader.vue';
    import AppFooter from '~/components/AppFooter.vue';

    export default {
        components: {
            'AppHeader': AppHeader,
            'AppFooter': AppFooter
        },
        data() {
            return {

            }
        },
        mounted() {}
    }

</script>
