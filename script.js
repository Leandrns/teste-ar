let scene, camera, renderer, marker;

function init() {
    // Criando a cena
    scene = new THREE.Scene();
    
    // Configurando a câmera
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    
    // Configurando o renderizador com suporte a WebXR
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.xr.enabled = true;
    document.body.appendChild(renderer.domElement);

    // Adicionando o botão do WebXR (agora vai aparecer corretamente)
    document.body.appendChild(ARButton.createButton(renderer));

    // Criando um marcador (esfera vermelha) para representar um setor no supermercado
    const geometry = new THREE.SphereGeometry(0.1, 16, 16);
    const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    marker = new THREE.Mesh(geometry, material);
    marker.position.set(0, 0, -1); // 1 metro à frente do usuário
    scene.add(marker);

    // Iniciar a animação da cena
    function animate() {
        renderer.setAnimationLoop(() => {
            renderer.render(scene, camera);
        });
    }

    animate();
}

// Inicializar a aplicação
init();