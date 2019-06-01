<template>
    <div>
        <div v-html="myHtml"></div>
        <div v-if="showName">
        <p>{{user.firstNeame}}</p>
        </div>
        <div v-else>
        <p>No puedo mostrar nombre</p>
        </div>
        <hr>
        <ul>
            <li v-for="task in tasks">
                {{task.title}}
            </li>
        </ul>
    </div>
</template>


<script>
export default {
    data() {
        return {
            title: 'Hola VueJS',
            user: {
                firstNeame: 'Pepe',
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
    }
}
</script>

<style lang="">
    
</style>