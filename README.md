# Introduction to React Three Fiber
![Preview](/public/getting_started.png)

## 1. Setup

* **What is react-three-fiber?**
  * [react-three-fiber](https://github.com/pmndrs/react-three-fiber) is a React renderer for [threejs](https://threejs.org/) on the web and react-native*.
    * Gives more semantic layout and assumes reasonable defaults, making it easy to get up and running quickly with less code.
  * Use-cases:
    * Rendering graphics in the browser with React or on mobile and web with React Native*.

*Limited documentation on react-native see https://github.com/pmndrs/react-three-fiber/blob/master/markdown/recipes.md#usage-with-react-native.

* **Prerequisites**
  * React, JavaScript, HTML, CSS

* **Environment**
  * [Node](https://nodejs.org/) >= v8.10 and [npm](https://www.npmjs.com/) >= v5.6
  * [Create React app](https://reactjs.org/docs/create-a-new-react-app.html)
  ```bash
    npx create-react-app react-three-fiber-introduction
    cd react-three-fiber-introduction
  ```
  * Install [three](https://threejs.org/docs/index.html#manual/en/introduction/Installation), [react-three-fiber](https://github.com/pmndrs/react-three-fiber#react-three-fiber), [use-cannon](https://www.npmjs.com/package/use-cannon), and then start the app.
  ```bash
    npm install three react-three-fiber use-cannon
    npm start
  ```
  * Versions used in this project:
  ```bash
    "dependencies": {
      "react": "^17.0.1",
      "react-dom": "^17.0.1",
      "react-scripts": "^4.0.0",
      "react-three-fiber": "^5.1.5",
      "three": "^0.122.0",
      "use-cannon": "^0.5.3",
    }
  ```
* **Assets**
  * .gltf files from [sketchfab](https://sketchfab.com/).


## 2. Getting Started

* **Setting the Scene**
  * [The scene graph](https://threejsfundamentals.org/threejs/lessons/threejs-fundamentals.html).
    * [Object3D](https://threejs.org/docs/#api/en/core/Object3D)
  * Manual setup with [threejs](https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene).
  * [Canvas](https://github.com/pmndrs/react-three-fiber/blob/master/markdown/api.md#canvas)
  * [animation](https://github.com/pmndrs/react-three-fiber/blob/master/markdown/api.md#hooks)
    * useThree(), useFrame(() => {}), camera
    * [performance pitfalls](https://github.com/pmndrs/react-three-fiber/blob/master/markdown/pitfalls.md)
  * [AxesHelper](https://threejs.org/docs/index.html#api/en/helpers/AxesHelper)
  * Orbit controls
    * extend
  * [Geometry](https://threejs.org/docs/index.html#api/en/core/Geometry)
  * [Lines](https://threejs.org/docs/index.html#manual/en/introduction/Drawing-lines)
  * Lights
    * [Ambient Light](https://threejs.org/docs/index.html#api/en/lights/AmbientLight)
    * [Pointlight helper](https://threejs.org/docs/index.html#api/en/helpers/PointLightHelper)
  * [Material/Mesh]
    * Material: Color, Side, shadowSide, Fog, Transparent, Opacity, Visible.
    * MeshStandardMaterial: Emissive & emissiveIntensity, wireframe, metalness, roughness.
    * MeshPhysicalMaterial: transmissive, reflective, clearcoat.
  * Texture.
    * [background](https://threejsfundamentals.org/threejs/lessons/threejs-backgrounds.html)
    * [Scene.background](https://threejs.org/docs/index.html#api/en/scenes/Scene.background)
    * [CubeTextureLoader](https://threejs.org/docs/index.html#api/en/loaders/CubeTextureLoader)
    * [WebGLCubeRenderTarget.fromEquirectangularTexture](https://threejs.org/docs/index.html#api/en/renderers/WebGLCubeRenderTarget.fromEquirectangularTexture)
  

## 3. Interaction and Physics

* **Controls**
  * Events
	* Dragcontrols

* **Physics**
  * use-cannon https://github.com/pmndrs/use-cannon

## 4. Putting it all together

* Other things students can try on their own
  * Using Assets
  * Bounding Box (for physics debugging)
  * Soft-shadows
  * postprocessing
  * Animations
