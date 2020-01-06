<template lang="html">
    <Page class="page">
        <ActionBar class="action-bar">
            <Label class="action-bar-title" text="Articles"></Label>
        </ActionBar>

        <ScrollView>
            <ListView for="item in getArticles" @itemTap="onItemTap" class="list-group" padding="10">
                <v-template>
                    <GridLayout rows="*, *, *" columns="*, *" class="list-group-item-content">
                        <Label :text="item.title" class="text-primary list-group-item-text font-weight-bold m-t-5 m-b-5" padding="10"></Label>
                        <Label :text="item.owner.first_name" col="1" horizontalAlignment="right" class="list-group-item-text m-r-5" padding="10"/>

                        <Label row="1" class="hr-light m-t-5 m-b-5" colSpan="2"/>

                        <Image row="2" :src="item.picture" stretch="aspectFill" height="120" width="120" class="m-r-20" loadMode="async"/>
                        
                    </GridLayout>
                </v-template>
            </ListView>
        </ScrollView>
    </Page>
</template>

<script>
import ArticleDetails from "./ArticleDetails";
import { mapActions, mapGetters } from 'vuex'

export default {
    data(){
        return {
            isLoading: false,
        };
    },
    computed: {
        ...mapGetters(['getArticles']),
    },
    methods: {
        ...mapActions(['fetchArticles']),
        onItemTap(args) {

            console.log(args.item)

            this.$navigateTo(ArticleDetails, {
                props: { 
                    context: args.item,
                },
                transition: {
                    name: "slide",
                    duration: 200,
                    curve: "ease"
                }
            });
        }
    },
    mounted(){
        try {
            if (this.getArticles.length === 0) {
                
                this.isLoading = true

                this.fetchArticles().then( () => {
                    this.isLoading = false
                }).catch(err => {
                    console.log(err)
                })
            } else {
                console.log("this.getArticles.length", this.getArticles.length)
            }
        } catch(e) {
            console.log(e)
        }
        
    }
};
</script>

<style lang="scss" scoped>
// Start custom common variables
@import "../app-variables";
// End custom common variables

// Custom styles

</style>