<template>
    <div>
        <!--<input type="text" v-model="user.firstName">
        <button type="button" v-on:click="saludar(user.firstName)">
            CLICK
        </button>
        <hr> -->
        <input type="text" v-on:keyup.enter="typedEnter">
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
    }
}
</script>

<style lang="">
    
</style>