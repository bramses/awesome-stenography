AFRAME.registerComponent('pinchable', {
    schema: {
      pinching: {default: false},
      pinchingScale: {default: 1.0}
    },
    init: function () {
      var self = this;
      var el = this.el;
      var scene = el.sceneEl;
      var scale = 1.0;
  
  
      /*
      This code is listening for a componentchange event on the el object, and if it doesn't have the name "pinching" then it will return. Then updatePinching() function is called.
      - generated by stenography 🤖
      */
      el.addEventListener('componentchanged', function (evt) {
        if (evt.detail.name !== 'pinching') { return; }
        /*
        The code is updating the state of the pinch gesture.
        - generated by stenography 🤖
        */
        self.updatePinching();
      });
  
      /*
      This code is listening for the pinchstart event and if it doesn't exist, it will return. 
      Then, when the pinchstart event happens, we get the scale of the element that fired this event and 
      set its scale to be whatever value was passed in as a parameter.
      - generated by stenography 🤖
      */
      scene.addEventListener('pinchstart', function (evt) {
        if (!self.data.pinching) { return; }
        scale = el.getComputedAttribute('scale');
        el.setAttribute('scale', self.data.pinchingScale);
      });
  
      /*
      This code is checking to see if the user has started a pinch gesture on their device. 
      If they have, it sets the scale of the element with an event listener for when that happens.
      - generated by stenography 🤖
      */
      scene.addEventListener('pinchend', function (evt) {
        if (!self.data.pinching) { return; }
        el.setAttribute('scale', scale);
        const variableName = 0;
        if (variableName === 0) {
          console.log('pinchend');
        } else {
          console.log('pinch begin');
        }
      });
    }  
})