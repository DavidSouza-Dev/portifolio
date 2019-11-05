<template>
<!-- https://github.com/FortAwesome/vue-fontawesome#nuxtjs -->
    <footer id="footer">
        <b-container fluid>
            <b-container>
                <div class="copyright">David Souza © 2019</div>
            </b-container>
        </b-container>
    </footer>

</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style lang="scss" scoped>
    @import url('https://fonts.googleapis.com/css?family=Patua+One&display=swap');

    #footer {
        background: black;
        .container-fluid{
		    height:150px;
		    .container{
                color: white;
                display: flex;
                justify-content: center;
                align-items:center;
                height: 100%;
                .copyright{
                    width: 150px;
                    position: relative;
                    &::after{
                        content: "";
                        position: absolute;
                        top: -11px;
                        /* bottom: 0px; */
                        left: -100px;
                        /* right: 12px; */
                        width: 350px;
                        height: 2px;
                        background-color: #ffffff66 !important;

                    }
                }
            }
	    }
    }
   

</style>