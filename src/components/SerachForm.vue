<template>
    <form>
        <input type="text" placeholder="Name" v-model="name">
        <input type="button" value="検索" @click="(e)=>{pokemonQuery(name,e)}">
    </form>
</template>