<template>
    <div class="loader d-flex justify-content-center align-items-center">
        <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>
</template>
<script>
export default {
    name:"Loader"
}
</script>
<style>
    .loader{
        min-height: 500px;
    }
</style>