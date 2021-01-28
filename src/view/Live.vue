<template>
  <Card class="live-wrapper">
    <template #header>
      {{ $t("action.live") }}
    </template>
    <Button v-if="YoutubeData" :value="$t('info.subscriber') + YoutubeData" />
    <div v-if="LiveList.length > 0">
      <template v-for="item in LiveList">
        <div class="live" :key="item.id">
          <div class="live-time">
            {{ new Date(item.live_schedule).toLocaleString() }}
          </div>
          <Button
            :value="item.title"
            :url="
              'https://www.youtube.com/channel/' + item.channel.yt_channel_id
            "
          />
        </div>
      </template>
    </div>
    <div v-if="UpcomingList.length > 0">
      <template v-for="item in UpcomingList">
        <div class="live" :key="item.id">
          <div class="live-time">
            {{ $t("action.plan") }}
            {{ new Date(item.live_schedule).toLocaleString() }}
          </div>
          <Button
            :value="item.title"
            :url="
              'https://www.youtube.com/channel/' + item.channel.yt_channel_id
            "
          />
        </div>
      </template>
    </div>
  </Card>
</template>

<script>
import Card from '@/components/common/Card'
import Button from '@/components/common/Button'
import axios from 'axios'

export default {
  components: {
    Card,
    Button
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
    axios.get('https://api.holotools.app/v1/live?channel_id=11')
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
.live-wrapper {
  .live {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    .live-time {
      font-size: 17px;
      font-weight: 600;
    }
  }
}
</style>
