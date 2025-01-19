// pages/writingTutor/writingTutor.js
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