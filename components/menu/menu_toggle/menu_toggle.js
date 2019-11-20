//menu_toggle.js
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

  },

  /**
   * Component methods
   */
  methods: {

    onTap: function (e) {
      var myEventDetail = {} // detail object, provided to the event monitoring function
      var myEventOption = {} // Event triggering options
      this.triggerEvent('showMenuToggle', myEventDetail, myEventOption)
    }


  }
})
