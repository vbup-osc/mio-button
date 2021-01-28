<template>
  <Card>
    <template #header>
      {{ $t("action.adtitle") }}
      <Button
        :value="$t('action.weekly')"
        url="https://www.bilibili.com/read/readlist/rl210208"
      />
      <Button
        :value="$t('action.vtbbtn')"
        url="https://vtbbtn.org"
      />
      <Button
        :value="$t('action.sticker')"
        url="https://ookamimio.org/resources/voice.rar"
      />
      <Button
        :value="$t('action.voicepack')"
        url="'https://ookamimio.org/resources/voice.rar"
      />
      <Button
        :value="$t('action.AvatarFrame')"
        url="https://ookamimio.org/resources/fubumio.png"
      />
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
      list: []
    }
  }
}
</script>
