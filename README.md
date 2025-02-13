
# Real-Time Body Adjustment Tool

## Overview
This project is a **Real-Time Body Adjustment Tool** built using Three.js. It allows users to:

- Load and view a 3D body model (e.g., `body.glb`).
- Adjust shape keys (morph targets) to modify the body's features in real-time.
- Control the position and scale of the model in 3D space.
- Interact with the model using **OrbitControls** for rotation, panning, and zooming.

## Features
- **Shape Key Controls**: Dynamically adjust morph targets (shape keys) using sliders.
- **Position Controls**: Move the model along the X, Y, and Z axes.
- **Scale Controls**: Adjust the width and height of the model.
- **Real-time Coordinates**: Display the model's current position in 3D space.
- **Responsive Design**: Works on both desktop and mobile devices.

## Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/leonardo672/Real-Time-Body-Adjustment.git
cd Real-Time-Body-Adjustment
```

### 2. Add the 3D Model
To use this project, you need a GLTF/GLB model (e.g., `body.glb`).

- Place your `body.glb` file in the root directory of the project.
- Update the model path in `javascript.js`:

```javascript
loader.load(
    'body.glb', // Update this path if the file is in a different location
    function (gltf) {
        // Model loading logic
    },
    // Other loader callbacks
);
```

### 3. Install a Local Server (Optional)
To avoid CORS issues, run the project using a local server:

- **VS Code Live Server**: Install the **Live Server** extension and open the project.
- **Python HTTP Server**:

```bash
python -m http.server
```
Then, open [http://localhost:8000](http://localhost:8000) in your browser.

### 4. Open the Project
Open the `Real-Time-Body-Adjustment.html` file in your browser to view the 3D model.

## Usage
- **Shape Keys**: Use the sliders to adjust body features (if supported by the model).
- **Position Controls**: Move the model along X, Y, and Z axes using sliders.
- **Scale Controls**: Adjust width and height of the model.
- **OrbitControls**: Click and drag to rotate, scroll to zoom, and right-click to pan.

## Dependencies
This project uses:
- **Three.js**: JavaScript 3D library for rendering the model.
- **OrbitControls**: Camera controls.
- **GLTFLoader**: Loads the GLTF/GLB model.

_All dependencies are loaded via CDN in `index.html`._

## Notes on the 3D Model
The `body.glb` file is **not included** in this repository due to size and licensing restrictions. To use this project:

- Obtain a GLTF/GLB model (e.g., a body or any other 3D object).
- Place the file in the project directory and update the path in `javascript.js`.
- If you don't have a model, you can find free GLTF models on:
  - [Sketchfab](https://sketchfab.com/)
  - [Poly Haven](https://polyhaven.com/)
  - [Clara.io](https://clara.io/)

## Contributing
Contributions are welcome! If you'd like to improve this project:

1. **Fork** the repository.
2. **Create a new branch** for your feature or bug fix.
3. **Submit a pull request**.

## License
This project is licensed under the **MIT License**. 

## Acknowledgments
- [Three.js](https://threejs.org/) for the amazing 3D library.
- [Skypack](https://www.skypack.dev/) for providing the CDN links for Three.js modules.

## Screenshots
### Screenshot 1
**Caption**: Real-Time Body Adjustment Tool with Shape Key and Position Controls.

![Screenshot](#) *(Replace with actual screenshot URL)*

