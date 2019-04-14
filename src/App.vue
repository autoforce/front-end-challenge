<template>
    <div>
        <Header></Header>
        <Home></Home>
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from './components/header/Header.vue';
    import Home from './components/home/Home.vue';
    import Footer from './components/footer/Footer.vue';
    export default {
        components: {
            'Header' : Header,
            'Home' : Home,
            'Footer' : Footer
        },
    }
</script>

<style scoped lang="scss">
    @import "App";
</style>