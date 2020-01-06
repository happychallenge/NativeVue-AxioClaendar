<template lang="html">
    <Page class="page">
        <ActionBar class="action-bar">
            <Label class="action-bar-title" text="LIST TEST"></Label>
        </ActionBar>

        <ScrollView>
            <ListView class="list-group" for="todo in todos" @itemTap="onItemTap">
                <v-template>
                    <FlexboxLayout flexDirection="row" class="list-group-item" >
                        <Label :text="todo.id" style="width: 20%" />
                        <Label :text="todo.title" horizontalAlignment="left" />
                    </FlexboxLayout>
                </v-template>
            </ListView>
        </ScrollView>
    </Page>
</template>

<script>
import axios from "axios"
import ItemDetails from "./ItemDetails";

export default {
    data: () => {
        return {
            message: "<!-- Search page content goes here -->",
            todos: [],
        };
    },
    methods: {
        onItemTap: function(args) {
            console.log("Hello", args.item.title);

            this.$navigateTo(ItemDetails, {
                props: { 
                    context: args.item,
                    animated: true,
                    transition: {
                        name: "slide",
                        duration: 200,
                        curve: "ease"
                    }}});
        }
    },
    created(){
        axios.get('https://jsonplaceholder.typicode.com/todos').then(response => {
            this.todos = response.data
        }).catch(error => {
            console.log(error);
        })
    }
};
</script>

<style lang="scss" scoped>
// Start custom common variables
@import "../app-variables";
// End custom common variables

// Custom styles

</style>