<template>
    <div class="container">
       <form-hader />
        <main>
            <div class="content ph-wrapper">
                <ol start="6" class="ph-wrapper__list">
                    <li class="li">Nie osadzaj innych</li>
                    <li class="li">Nie oceniaj</li>
                    <li class="li">Nie krytykuj</li>
                    <li class="li ">Nie analizuj opinii innych..<div class="btn-box">
                        <router-link to="/zasady" class="btn-zasada">Yep..!</router-link>
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


