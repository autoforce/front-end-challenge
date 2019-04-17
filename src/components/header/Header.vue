<template>
    <header class="header position-absolute w-100">
        <b-navbar class="p-0" toggleable="md" type="" variant="">
            <b-container>

                <b-navbar-brand href="#">
                    <img src="../../assets/logo.png" alt="Grand Motors" >
                </b-navbar-brand>

                <b-navbar-toggle target="nav_collapse" class="border-0"></b-navbar-toggle>

                <b-collapse is-nav  id="nav_collapse" class="justify-content-between text-uppercase">

                    <b-navbar-nav class="align-items-center">
                        <b-nav-item-dropdown text="Nossos Veículos" class="rounded-0 modelos">
                            <b-dropdown-item href="#">
                                Etios Hatch 2017
                                <img class="modelo" alt="Etios Hatch 2017"
                                     src="../../assets/modelos/etios-hatch_17.png" >
                            </b-dropdown-item>
                            <b-dropdown-item href="#">
                                Etios Sedã 2017
                                <img class="modelo" alt="Etios Sedã 2017"
                                     src="../../assets/modelos/etios-seda_17.png" >
                            </b-dropdown-item>
                            <b-dropdown-item href="#">
                                Etios Cross 2017
                                <img class="modelo" alt="Etios Cross 2017"
                                     src="../../assets/modelos/etios-cross_17.png" >
                            </b-dropdown-item>
                            <b-dropdown-item href="#">
                                Corolla 2016
                                <img class="modelo" alt="Corolla 2016"
                                     src="../../assets/modelos/corolla_16.png" >
                            </b-dropdown-item>
                            <b-dropdown-item href="#">
                                Hilux CD Diesel 2016
                                <img class="modelo" alt="Hilux CD Diesel 2016"
                                     src="../../assets/modelos/hilux-diesel_16.png" >
                            </b-dropdown-item>
                            <b-dropdown-item href="#">
                                Etios Hatch 2017
                                <img class="modelo" alt="Etios Hatch 2017"
                                     src="../../assets/modelos/etios-hatch_17.png" >
                            </b-dropdown-item>
                            <b-dropdown-item href="#">
                                Etios Sedã 2017
                                <img class="modelo" alt="Etios Sedã 2017"
                                     src="../../assets/modelos/etios-seda_17.png" >
                            </b-dropdown-item>
                            <b-dropdown-item href="#">
                                Etios Cross 2017
                                <img class="modelo" alt="Etios Cross 2017"
                                     src="../../assets/modelos/etios-cross_17.png" >
                            </b-dropdown-item>
                            <b-dropdown-item href="#">
                                Corolla 2016
                                <img class="modelo" alt="Corolla 2016"
                                     src="../../assets/modelos/corolla_16.png" >
                            </b-dropdown-item>
                            <b-dropdown-item href="#">
                                Hilux CD Diesel 2016
                                <img class="modelo" alt="Hilux CD Diesel 2016"
                                     src="../../assets/modelos/hilux-diesel_16.png" >
                            </b-dropdown-item>
                        </b-nav-item-dropdown>
                        <b-nav-item href="#">Serviços</b-nav-item>
                        <b-nav-item-dropdown text="Vendas Diretas">
                            <b-dropdown-item href="#">Empresas</b-dropdown-item>
                            <b-dropdown-item href="#">Frotistas</b-dropdown-item>
                            <b-dropdown-item href="#">Governo</b-dropdown-item>
                            <b-dropdown-item href="#">PCD</b-dropdown-item>
                            <b-dropdown-item href="#">Produtor RuralS</b-dropdown-item>
                            <b-dropdown-item href="#">Taxista</b-dropdown-item>
                        </b-nav-item-dropdown>
                    </b-navbar-nav>
                    <b-navbar-nav class="align-items-center">
                        <div class="phones">
                            <b-button v-b-toggle.collapse-2 class="">
                                <i class="fas fa-phone fa-flip-horizontal mr-1"></i>
                                Telefones
                                <i class="fas fa-chevron-down"></i>
                            </b-button>
                            <b-collapse id="collapse-2" class="rounded phones-box">
                                <b-card class="phones-items border-0">
                                    <b-collapse id="collapse-3">
                                        <b-card class="border-0">
                                            <small class="text-white">
                                                <b>(11) 3500-7909</b> | Serviços
                                            </small>
                                        </b-card>
                                    </b-collapse>
                                    <b-button v-b-toggle.collapse-3 class="py-2 px-3 text-left">
                                        Toyota Nações Unidas
                                        <i class="fas fa-chevron-down"></i>
                                    </b-button>

                                    <b-collapse id="collapse-4">
                                        <b-card class="border-0">
                                            <small class="text-white">
                                                <b>(11) 3500-7909</b> | Serviços
                                            </small>
                                        </b-card>
                                    </b-collapse>
                                    <b-button v-b-toggle.collapse-4 class="py-2 px-3 text-left">
                                        Toyota Morombi
                                        <i class="fas fa-chevron-down"></i>
                                    </b-button>
                                </b-card>
                            </b-collapse>
                        </div>
                        <b-nav-item class="brand-horizontal">
                            <img src="../../assets/toyota.png" alt="Toyota">
                        </b-nav-item>
                    </b-navbar-nav>
                </b-collapse>
            </b-container>
        </b-navbar>
    </header>
</template>

<script>
    export default {

    }
</script>

<style lang="scss" src="./Header.scss"></style>
