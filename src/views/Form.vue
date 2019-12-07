<template>
    <div class="container">
        <form-hader/>
        <main>
            <div class="content ph-wrapper">
                <ol class="ph-wrapper__list">
                    <li class="li">Osądzasz innych</li>
                    <li class="li">Oceniasz innych</li>
                    <li class="li">Krytykujesz</li>
                    <li class="li">Analizujesz opinie innych</li>
                    <li class="li ">Bierzesz wszystko do siebie..<div class="btn-box">
                        <router-link to="/zasada" class="btn-ph" >Yep..!</router-link>
                    </div></li>
                </ol>
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

