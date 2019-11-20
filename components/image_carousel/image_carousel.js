// components/image_carousel/image_carousel.js
Component({
  /**
   * Component properties
   */
  properties: {
    itemsArray: {
      type: Array, 
      value: []
    }, 
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

  },

  lifetimes: {
    attached: function () {
      console.log("component loaded:")
      // Executed when the component instance enters the page node tree
    }
  }
})
