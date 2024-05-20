AFRAME.registerComponent('element-armband', {
    init() {
        const toUrl = (urlOrId) => {
            const img = document.querySelector(urlOrId)
            return img ? img.src : urlOrId
        }

        const cubemap = new THREE.CubeTextureLoader().load([
            toUrl('#px'), toUrl('#nx'),
            toUrl('#py'), toUrl('#ny'),
            toUrl('#pz'), toUrl('#nz')
        ])

        const params = new URLSearchParams(document.location.search.substring(1))
        const paramsValue = params.get('id')
        if (paramsValue) {
            const myUrl = `https://wristband-test.smvg.pl/wristband/textures/${paramsValue}.png`

            const textureLoaderUrl = new THREE.TextureLoader()
            textureLoaderUrl.crossOrigin = 'Anonymous'
            const myTexture = textureLoaderUrl.load(myUrl)
            myTexture.encoding = 3001
            myTexture.flipY = false
            myTexture.wrapS = 1000
            myTexture.wrapT = 1000
            this.el.addEventListener('model-loaded', () => {
                this.el.object3D.traverse((child) => {
                    if (child.material) {
                        child.material.envMap = cubemap
                        child.material.envMap.intensity = 0.75
                        if (child.material.name === 'M_OPASKA') {
                            child.material.map = null
                            child.material.map = myTexture
                            child.material.needsUpdate = true
                        }
                    }
                })
            })
        }
    },
})
