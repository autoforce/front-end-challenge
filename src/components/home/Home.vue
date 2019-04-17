<template>
    <div class="showcase">
        <img class="w-100 position-absolute" src="../../assets/banner-video.jpg">
        <b-container class="h-100">
            <b-row class="h-100 align-items-end text-white">
                <b-col cols="4">
                    <div class="showcase-content isca">
                        <div class="isca-header text-center">
                            <h4 class="title text-uppercase m-0">Simular financiamento</h4>
                            <p class="subtitle">Escolha a parcela que cabe no seu bolso.</p>
                        </div>

                        <hr>

                        <div class="isca-form">
                            <b-form>
                                <b-form-group label="Escolha uma versão" label-for="versao">
                                    <b-form-select
                                            class="mb-2 mr-sm-2 mb-sm-0"
                                            :value="null"
                                            :options="{ '1.3': '1.3' }"
                                            id="versao"
                                    >
                                        <option slot="first" :value="null">1.8</option>
                                    </b-form-select>
                                </b-form-group>
                                <hr>
                                <b-form-group>
                                    <b-form-input
                                            required
                                            type="text"
                                            placeholder="Nome*"
                                    >
                                    </b-form-input>
                                </b-form-group>
                                <b-form-group>
                                    <b-form-input
                                            required
                                            type="email"
                                            placeholder="Email*"
                                    >
                                    </b-form-input>
                                </b-form-group>
                                <b-form-group>
                                    <b-form-input
                                            required
                                            type="tel"
                                            placeholder="Telefone*"
                                    >
                                    </b-form-input>
                                </b-form-group>
                                <b-form-group label="Número de parcelas*">
                                    <b-form-radio-group>
                                        <b-form-radio value="12">12</b-form-radio>
                                        <b-form-radio value="24">24</b-form-radio>
                                        <b-form-radio value="36">36</b-form-radio>
                                        <b-form-radio value="48">48</b-form-radio>
                                    </b-form-radio-group>
                                </b-form-group>
                                <b-form-group>
                                    <b-form-input
                                            required
                                            type="text"
                                            placeholder="Valor da entrada*"
                                    >
                                    </b-form-input>
                                </b-form-group>
                                <b-form-checkbox>Desejo receber oofertas exclusivas da PG Prime.</b-form-checkbox>

                                <b-button variant="primary"
                                          class="btn-block font-weight-bold text-uppercase my-3">Simular Financiamento</b-button>
                                <a href="#" class="text-white">Politica de privacidade</a>
                            </b-form>
                        </div>
                    </div>
                </b-col>
                <b-col cols="8" class="p-0">
                    <div class="showcase-content">
                        <div class="headline h-100 position-relative">
                            <div class="headline-content">
                                <h2 class="title m-0 text-uppercase font-weight-bold">Etios Hatch 2017</h2>
                                <h4 class="version text-uppercase font-weight-bold">X 1.3 MANUAL</h4>
                                <p class="description">Você tem mais para descobrir.</p>
                            </div>
                            <div class="headline-price">
                                <p class="price-old m-0">de R$ 44.120,00</p>
                                <p class="price m-0">
                                    <small>por R$</small> 40.987,00
                                </p>
                                <span class="conditions">*Consulte as Condições Comerciais.</span>
                            </div>
                            <div class="headline-social position-absolute w-100">
                                <p class="text-share text-center mb-1">Gostou? Então compartilhe.</p>
                                <div class="d-flex justify-content-center">
                                    <div class="btn-share">
                                        <iframe src="https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fwww.facebook.com%2FToyotaDoBrasil&layout=button_count&size=small&width=131&height=20&appId"
                                                allowTransparency="true"
                                                allow="encrypted-media">
                                        </iframe>
                                    </div>
                                    <div class="btn-like">
                                        <iframe src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2FToyotaDoBrasil&width=58&layout=button_count&action=like&size=small&show_faces=false&share=false&height=65&appId"
                                                allowTransparency="true"
                                                allow="encrypted-media">
                                        </iframe>
                                    </div>
                                </div>
                                <p class="text-observation">*Imagens meramente ilustrativas. Alguns itens apresentados poderão não estar disponíveis nas versoes. Preços sugeridos e válidos até 31/07/2015. Os preços poderão ser modificadas sem aviso prévio. Consulte e confirme todas as informações com um de nossos vendedores..</p>
                            </div>
                        </div>
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="scss" src="./Home.scss"></style>
