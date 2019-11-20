// nav_menu.js
Component({
  /**
   * Component properties
   */
  properties: {
    showMenu: {
      type: Boolean,
      value: false
    }
  },

  /**
   * Component initial data
   */
  data: {
    src: "../../../assets/logos/orm_white_circles.png",
    showMenu: false
  },

  /**
   * Component methods
   */
  methods: {

    onShowMenuToggle: function (e) {
      console.log('navMenu.js: Show Menu Toggle')
      this.setData({
        showMenu: !this.data.showMenu
      })
    }

  }
})