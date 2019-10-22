<template>
    <footer id="footer">
        <b-container fluid>
            <b-container>
                footer
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
                border: 1px solid red;
                height: 100%;
            }
	    }
    }
   

</style>