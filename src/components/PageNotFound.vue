<template>
    <div class="not-found">
        <section class="page_404">
            <div class="container mx-auto w-100">
                <div class="row">
                    <div class="col-sm-12 ">
                        <div class="col-sm-10 col-sm-offset-1  text-center">
                            <div class="four_zero_four_bg">
                                <h1 class="text-center ">404</h1>


                            </div>

                            <div class="contant_box_404">
                                <h3 class="h2">
                                    Look like you're lost
                                </h3>

                                <p>the page you are looking for not avaible!</p>

                                <RouterLink class="link_404" :to="{ name: 'home' }">Go to Home</RouterLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
import { RouterLink } from "vue-router";
export default {

}
</script>
<style scoped>
/*======================
    404 page
=======================*/

.not-found{
    margin: 0 auto;
    text-align: center;    
}

.page_404 {
    padding: 40px 0;
    background: #fff;
    font-family: 'Arvo', serif;
    margin: 0 auto;
    text-align: center;
}

.page_404 img {
    width: 50%;
    margin: 0 auto;
    margin: 0 auto;
    text-align: center;
}

.four_zero_four_bg {

    background-image: url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif);
    height: 400px;
    background-position: center;
    margin: 0 auto;
    text-align: center;
}


.four_zero_four_bg h1 {
    font-size: 80px;
}

.four_zero_four_bg h3 {
    font-size: 80px;
    margin: 0 auto;
    text-align: center;
}

.link_404 {
    color: #fff !important;
    padding: 10px 20px;
    background: #39ac31;
    margin: 20px 0;
    margin: 0 auto;
    text-align: center;
    display: inline-block;
}

.contant_box_404 {
    margin-top: -50px;
}</style>