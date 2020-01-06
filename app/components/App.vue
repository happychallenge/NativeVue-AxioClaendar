<template lang="html">
    <BottomNavigation>
        <TabStrip>
            <TabStripItem>
                <Label text="Article"></Label>
                <Image src.decode="font://&#xf1ea;" class="fa t-36"></Image>
            </TabStripItem>
            <TabStripItem>
                <Label text="Home"></Label>
                <Image src.decode="font://&#xf015;" class="fa t-36"></Image>
            </TabStripItem>
            <TabStripItem>
                <Label text="Search"></Label>
                <Image src.decode="font://&#xf002;" class="fa t-36"></Image>
            </TabStripItem>
            <TabStripItem>
                <Label text="Calendar"></Label>
                <Image src.decode="font://&#xf073;" class="fa t-36"></Image>
            </TabStripItem>

            <TabStripItem>
                <Label text="Chart"></Label>
                <Image src.decode="font://&#xf080;" class="fa t-36"></Image>
            </TabStripItem>
        </TabStrip>


        <TabContentItem>
            <Frame>
                <Article />
            </Frame>
        </TabContentItem>

        <TabContentItem>
            <Frame>
                <Items />
            </Frame>
        </TabContentItem>

        <TabContentItem>
            <Frame>
                <Search />
            </Frame>
        </TabContentItem>

        <TabContentItem>
            <Frame>
                <Calendar />
            </Frame>
        </TabContentItem>

        <TabContentItem>
            <Frame>
                <Chart />
            </Frame>
        </TabContentItem>

    </BottomNavigation>
</template>

<script>
import Items from "./Items.vue";
import Article from "./Article.vue";
import Search from "./Search.vue";
import Calendar from "./Calendar.vue";
import Chart from "./Chart.vue";

export default {
  components: {
    Items,
    Article,
    Search,
    Calendar,
    Chart,
  }
};
</script>

<style lang="scss">
// Start custom common variables
@import "../app-variables";
// End custom common variables

// Custom styles

</style>
