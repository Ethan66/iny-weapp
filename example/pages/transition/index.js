// pages/button/index.js
import page from '../../utils/page'

page({
  data: {
    visible: false,
    name: 'fade',
    duration: 300
  },

  onClickFade() {
    this.trigger('fade');
  },

  onClickFadeUp() {
    this.trigger('fade-up');
  },

  onClickFadeDown() {
    this.trigger('fade-down');
  },

  onClickFadeLeft() {
    this.trigger('fade-left');
  },

  onClickFadeRight() {
    this.trigger('fade-right');
  },

  onClickSlideUp() {
    this.trigger('slide-up');
  },

  onClickSlideDown() {
    this.trigger('slide-down');
  },

  onClickSlideLeft() {
    this.trigger('slide-left');
  },

  onClickSlideRight() {
    this.trigger('slide-right');
  },

  trigger(name) {
    this.setData({ name, visible: true });
    setTimeout(() => {
      this.setData({ visible: false });
    }, 500);
  },
})