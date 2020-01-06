<template>
    <Page class="page">

        <ActionBar class="action-bar">
            <NavigationButton @tap="$navigateBack" android.systemIcon="ic_menu_back"/>
            <Label class="action-bar-title" text="상세 보기"></Label>
        </ActionBar>

        <StackLayout>
             <Label class="p-10 h2" :text="item.title" padding="10"></Label>
             <Label class="hr-light m-t-5 m-b-5" />
            <TextView class="m-10 h3" :text="item.content" ></TextView>
            <Image :src="item.picture" stretch="aspectFill" width="90%" class="m-r-20" loadMode="async"/>
            <Label class="hr-light m-t-5 m-b-5" />
            <Button @tap="this.$navigateBack" text="Back" />
        </StackLayout>

    </Page>
</template>

<script>
export default {
    props: ["context"],

    computed: {
        item() {
            return this.context || {};
        }
    }
};
</script>

<style scoped lang="scss">
// Start custom common variables
@import "../app-variables";
// End custom common variables

// Custom styles

</style>