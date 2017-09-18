<template>
    <b-navbar toggleable="md" class="navbar navbar-expand-lg navbar-light fixed-top" style="background-color: #3097D1;">
        <b-container>
            <b-navbar-brand href="#" style="color:white;">Group3</b-navbar-brand>
            <b-nav-toggle target="nav_collapse"></b-nav-toggle>
            <b-collapse is-nav id="nav_collapse">
                <b-nav is-nav-bar class="ml-auto">
                    <b-nav-item class="navLink" href="#">Login</b-nav-item>
                    <b-nav-item class="navLink" href="#">Sign up</b-nav-item>
                    <b-button size="md" class="my-2 my-md-0" type="button" style="border: 1px solid #7DC780;background-color:#7DC780;color:#FFFFFF;">Post Ad</b-button>
                </b-nav>
            </b-collapse>
        </b-container>
    </b-navbar>
</template>
<script>
    export default {}

</script>

<style>
    .navLink > a {
        color:white!important;
    }

</style>