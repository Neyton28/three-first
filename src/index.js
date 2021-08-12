import * as THREE from 'three'

const scene = new THREE.Scene()

const geometry = new THREE.BoxGeometry(1,1,1)
const material = new THREE.MeshBasicMaterial({color:'#00ff00'})
const mesh = new THREE.Mesh(geometry, material)
mesh.position.set(0,-1,-1)
mesh.rotation.set(0, 0.5, 0.1)
scene.add(mesh)

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight)
camera.position.set(0, 3, 4) 
camera.lookAt(mesh.position)

// camera.rotation.y = 0.3
// camera.rotation.x = -0.5

scene.add(camera)

const renderer = new THREE.WebGLRenderer({
    canvas:document.getElementById('three')
})
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.render(scene, camera)