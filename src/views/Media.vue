<template>
    <div class="container">
        <header>
            <nav class="navbar" role="navigation" aria-label="main navigation">



                    <div class="navbar-end">
                        <div class="navbar-item">
                            <div class="buttons nav-end">
                                <router-link to="/form" class="button is-white btn-reset">
                                    <strong>?</strong>
                                </router-link>
                                <a class="button btn-reset" href="https://www.youtube.com/channel/UCOB2dfn9MXlBfK51fnEJlhw"><img src="../assets/img/youtube.png"/></a>
                            </div>
                        </div>
                    </div>

            </nav>
<!--            -->
<!--            <nav class="">-->
<!--                <ul class="navbar">-->
<!--                   <li class="navbar__item"><a class="navbar__link" href="/form">?</a></li>-->
<!--                   <li class="navbar__item"><a class="navbar__link" href="https://www.youtube.com/channel/UCOB2dfn9MXlBfK51fnEJlhw"><img src="../assets/img/youtube.png" /></a></li>-->
<!--                </ul>-->
<!--            </nav>-->
        </header>
        <main class="columns">
            <div class="column center">
                <youtube :video-id="videoId" :player-vars="playerVars" @playing="playing"></youtube>
            </div>
        </main>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                videoId: 'ShfpBatcrUs',
                playerVars: {
                    autoplay: 0
                }
            }
        },

        methods: {
            playing() {

            }
        }
    }
</script>