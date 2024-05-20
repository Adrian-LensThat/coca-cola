AFRAME.registerComponent('falki-front', {
    init() {
      this.el.addEventListener('model-loaded', () => {
        this.el.object3D.traverse((child) => {
          if (child.material) {
            child.material.depthTest = false
            child.material.depthWrite = false
            child.material.opacity = 0.1
          }
        })
      })
    },
  })
  