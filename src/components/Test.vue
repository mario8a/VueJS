<template>
    <div class="test">
        <!--<input type="text" v-model="user.firstName">
        <button type="button" v-on:click="saludar(user.firstName)">
            CLICK
        </button>
        <hr> -->
        <!--<input type="text" v-on:keyup.enter="typedEnter"> -->

        {{ msg }}
    </div>
</template>


<script>
export default {
    data() {
        return {
            title: 'Hola VueJS',
            user: {
                firstName: 'Pepe',
                lastName: 'Mendez'
            },
            myHtml: '<h3>hola vue</h3>',
            showName: false,
            tasks: [
                {title: 'Comer'},
                {title: 'Cenar'},
                {title: 'jugar'},
                {title: 'dormir'}
            ]
        }
    },
    methods: {
        saludar(name){
            alert('HELLO ' + name);
        },
        typedEnter(e){
            console.log('DIO un enter');
            
        }
    },
    computed: {
        fullName(){
            return this.user.firstName + ' ' + this.user.lastName;
        }
    },
    props: {
        msg: {
            type: String,
            default: 'Mensaje por defecto'
        }
    }
}
</script>

<style media="screen">

    .test {
        background-color: green;
    }
    
</style>