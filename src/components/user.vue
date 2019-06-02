<template>
    <div class="users">
        <h1>Users component</h1>
        <ul>
            <li v-for="user in users">
                {{user.name}} - {{user.email}}
            </li>
        </ul>

        <form v-on:submit.prevent="addUser">
            <input type="text" v-model="newUser.name" placeholder="Nombre">
            <input type="email" v-model="newUser.email" placeholder="Email">
            <button type="submit">
                Add
            </button>
        </form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                users:[
                    {
                        name: 'Mario',
                        email: 'mario8a@gmail.com',
                        contacted: false
                    },
                    {
                        name: 'Vanessa',
                        email: 'vaneK@gmail.com',
                        contacted: false
                    },
                    {
                        name: 'Carlos',
                        email: 'charles@gmail.com',
                        contacted: true
                    }
                ],
                newUser: {}
            }
        },
        methods: {
            addUser(e) {
                console.log('Agregando user');
            }
        },
    }
</script>

<style media="screen">
    .users {
        background-color:greenyellow;
        color: black;
    }
</style>