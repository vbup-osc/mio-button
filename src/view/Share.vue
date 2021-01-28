<template>
  <Card>
    <template #header>
      <div class="share">
        {{ $t("action.random") }}
        <input
          class="input"
          type="text"
          v-model="value"
          :placeholder="$t('action.placeholder')"
        />
        <Button :value="$t('action.share')" @click.native="randomshare" />
      </div>
    </template>
  </Card>
</template>

<script>
import Voives from '@/../setting/voices.json'
import Card from '@/components/common/Card'
import Button from '@/components/common/Button'

export default {
  components: {
    Card,
    Button
  },
  data() {
    return {
      value: '',
      voices: Voives.voices
    }
  },
  methods: {
    randomshare() {
      const tempList = this.voices[this._getrRandomInt(this.voices.length - 1)]
      const title = this.$t('voice.' + tempList.voiceList[this._getrRandomInt(tempList.voiceList.length - 1)].name)
      if (this.$i18n.locale === 'ja-JP') {
        window.open('https://twitter.com/intent/tweet?text=' + '%23ミオボタン %23ミオかわいい 今日、「' + this.value + '」のランダムオーディオは「' + title + '」です！ より多くのオーディオを聞くには、「ミオボタン」のWebサイトにアクセスしてください~ https://t.co/TLdj8E9Rct')
      } else if (this.$i18n.locale === 'en-US') {
        window.open('https://twitter.com/intent/tweet?text=' + '%23ミオボタン %23ミオかわいい Today，' + this.value + '\'s random audio is %22' + title + '%22！ Visit Mio Button Website For More Audio! https://t.co/TLdj8E9Rct')
      } else {
        window.open('https://twitter.com/intent/tweet?text=' + '%23ミオボタン %23ミオかわいい 今天，“' + this.value + '”的随机音频是“' + title + '”！ 访问狼按钮网站聆听更多音频 https://t.co/TLdj8E9Rct')
      }
    },
    _getrRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max))
    }
  }
}
</script>

<style lang="scss" scoped>
.share {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  .input {
    width: 190px;
    height: 20px;
    margin: 5px;
    padding: 3px 12px;
    text-align: center;
    font-weight: 600;
    background: rgb(255, 156, 156);
    border: none;
    border-radius: 17px;
    box-shadow: 5px 5px 10px #d16767, -5px -5px 10px #ff9494;
    outline: none;
  }
}
</style>
