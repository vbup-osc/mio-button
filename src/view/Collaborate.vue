<template>
  <Card>
    <template #header>
      {{ $t("action.adtitle") }}
      <Button
        v-for="(item, index) in list"
        :key="index"
        :value="item.title"
        :url="item.url"
      />
    </template>
  </Card>
</template>

<script>
import Card from '@/components/common/Card'
import Button from '@/components/common/Button'

export default {
  components: {
    Card,
    Button
  },
  data() {
    return {
      list: [
        {
          title: this.$t('action.weekly'),
          url: 'https://www.bilibili.com/read/readlist/rl210208'
        },
        {
          title: this.$t('action.vtbbtn'),
          url: 'https://vtbbtn.org'
        },
        {
          title: this.$t('action.voicepack'),
          url: 'https://www.bilibili.com/read/readlist/rl210208'
        },
        {
          title: this.$t('action.sticker'),
          url: 'https://ookamimio.org/resources/voice.rar'
        },
        {
          title: this.$t('action.AvatarFrame'),
          url: 'https://ookamimio.org/resources/fubumio.png'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
