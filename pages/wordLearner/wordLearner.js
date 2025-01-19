// pages/wordLearner.js
Component({
  methods: {
    onBack() {
      wx.navigateBack();
    },
    onGoHome() {
      wx.reLaunch({
        url: '/pages/index/index',
      });
    },
  },
});