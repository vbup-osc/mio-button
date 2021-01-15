<template>
  <Card>
    <template #header>
      {{ $t("action.live") }}
    </template>
    <div>{{ $t("info.subscriber") }}{{ YoutubeData }}</div>
    <div v-if="LiveList.length > 0">
      <template v-for="item in LiveList">
        <div class="live" :key="item.id">
          <a
            :href="
              item.channel.yt_channel_id
                ? 'https://www.youtube.com/channel/' +
                  item.channel.yt_channel_id
                : 'https://live.bilibili.com/' + item.channel.bb_space_id
            "
            class="live-title"
            target="_blank"
          >
            {{ item.title }}
          </a>
        </div>
      </template>
    </div>
    <div class="upcoming-content" v-if="UpcomingList.length > 0">
      <template v-for="item in UpcomingList">
        <div class="upcoming" :key="item.id">
          <div style="width: 100%">
            <div class="upcoming-time">
              {{ new Date(item.live_schedule).toLocaleString() }}
            </div>
            <a
              :href="
                item.channel.yt_channel_id
                  ? 'https://www.youtube.com/channel/' +
                    item.channel.yt_channel_id
                  : 'https://live.bilibili.com/' + item.channel.bb_space_id
              "
              class="upcoming-title"
              target="_blank"
            >
              {{ item.title }}
            </a>
          </div>
        </div>
      </template>
    </div>
  </Card>
</template>

<script>
import Card from '@/components/common/Card'
import axios from 'axios'

export default {
  components: {
    Card
  },
  data() {
    return {
      YoutubeData: null,
      LiveList: [],
      UpcomingList: []
    }
  },
  created() {
    axios.get('https://api.holotools.app/v1/channels/11')
      .then(res => {
        if (res.data && res.data.subscriber_count) {
          this.YoutubeData = res.data.subscriber_count
        }
      })
    axios.get(`https://api.holotools.app/v1/live?channel_id=11`)
      .then(res => {
        if (res.data) {
          this.LiveList = res.data.live || []
          this.UpcomingList = res.data.upcoming || []
        }
      })
  }
}
</script>

<style lang="scss" scoped>
</style>
