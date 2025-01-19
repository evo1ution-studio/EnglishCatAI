Component({
  data: {
    value: 0,
    page_title: 'Writing',
    list: [
      { value: 0, icon: 'pen-ball', ariaLabel: 'Writing' },
      { value: 1, icon: 'microphone-1', ariaLabel: 'Speaking' },
      { value: 2, icon: 'user-circle', ariaLabel: 'Me' },
    ],
  },

  methods: {
    onChange(e) {
      this.setData({
        value: e.detail.value,
        page_title: e.detail.ariaLabel,
      });
    },
  },
});
