<template>
    <div class="container flex">
        <header>
            <nav class="">
                <ul class="navbar">
                    <li class="navbar__item"><a class="navbar__link" href="/form">?</a></li>
                    <li class="navbar__item"><a class="navbar__link" href="#"><img src="../assets/img/youtube.png" /></a></li>
                </ul>
            </nav>
        </header>
        <main class="'wrapper">
            <div class="mediaYt">
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