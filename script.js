let scene, camera, renderer, marker;

async function startAR() {
    // Criando a cena
    scene = new THREE.Scene();
    
    // Configurando a câmera e o renderizador com WebXR
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    
    // Ativar WebXR
    renderer.xr.enabled = true;
    document.body.appendChild(ARButton.createButton(renderer));

    // Criar um marcador 3D (esfera)
    const geometry = new THREE.SphereGeometry(0.1, 16, 16);
    const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    marker = new THREE.Mesh(geometry, material);
    marker.position.set(0, 0, -1); // A 1 metro do usuário
    scene.add(marker);

    // Iniciar a renderização com WebXR
    function animate() {
        renderer.setAnimationLoop(() => {
            renderer.render(scene, camera);
        });
    }

    animate();
}

// Adicionar evento ao botão para iniciar o AR
document.getElementById("start-ar").addEventListener("click", startAR);