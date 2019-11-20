// components/UI/tabbar/tabbar.js
Component({
  options: {
    multipleSlots: true
  },
  /**
   * Component properties
   */
  properties: {
    showServices: {
      type: Boolean,
      value: true
    }
  },

  /**
   * Component initial data
   */
  data: {
    // showServices: true,
    // showAbout: false
  },
 
  /**
   * Component methods
   */
  methods: {
    onTap: function () {
      var myEventDetail = {} // detail object, provided to the event monitoring function
      var myEventOption = {} // Event triggering options
      this.triggerEvent('switchIndexMenu', myEventDetail, myEventOption)
    }, 

    onSwitchMenuIndex: function (e) {
      console.log("On Switch Menu Index:" + JSON.stringify(e))

      this.setData({
        showServices: !this.data.showServices
      })
    }
  }
  
})
