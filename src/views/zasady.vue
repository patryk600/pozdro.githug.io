<template>
    <div class="container">
      <form-hader />
        <main>
            <div class="content ph-wrapper">
                <ol class="ph-wrapper__list" start="10">
                    <li class="li">Nie bierz niczego do siebie!</li>
                </ol>
                <h2 class="primary">DOPIERO TERAZ MASZ.. ZASADY!</h2>
            </div>
        </main>
    </div>


</template>

<script>
    import formHader from "../components/Header.vue"
    export default {
        name: "form",
        components: {
            formHader
        }
    }
</script>
