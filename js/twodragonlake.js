var table = [
    "全爷", "Hydrogen", "1.00794", 1, 1, "https://github.com/1156721874",
    "身爷", "Helium", "4.002602", 18, 1, "https://github.com/alyenc",
    "成爷", "Lithium", "6.941", 1, 2, "https://github.com/wa000",
    "强哥", "Beryllium", "9.012182", 2, 2, "",
    "海爷", "Boron", "10.811", 13, 2, "",
    "夜爷", "Carbon", "12.0107", 14, 2, "",
    "隐爷", "Nitrogen", "14.0067", 15, 2, "https://github.com/mysad",
    "登爷", "Oxygen", "15.9994", 16, 2, "",
    "丹爷", "Fluorine", "18.9984032", 17, 2, "",
    "郭橐驼", "Neon", "20.1797", 18, 2, "https://github.com/onezg",
    "大圣", "Sodium", "22.98976...", 1, 3, "",
    "军爷", "Magnesium", "24.305", 2, 3, "",
    "你大爷", "Aluminium", "26.9815386", 13, 3, "",
    "超爷", "Silicon", "28.0855", 14, 3, "https://github.com/ljc520313",
    "腾爷", "Phosphorus", "30.973762", 15, 3, "",
    "鸿爷", "Sulfur", "32.065", 16, 3, "",
    "徐爷爷", "Chlorine", "35.453", 17, 3, "",
    "瑞爷", "Argon", "39.948", 18, 3, "",
    "帅爷", "Potassium", "39.948", 1, 4, "",
    "增爷", "Calcium", "40.078", 2, 4, "",
    "菜勇", "Scandium", "44.955912", 3, 4, "https://github.com/Killua67",
    "Ti", "Titanium", "47.867", 4, 4, "",
    "V", "Vanadium", "50.9415", 5, 4, "",
    "Cr", "Chromium", "51.9961", 6, 4, "",
    "Mn", "Manganese", "54.938045", 7, 4, "",
    "Fe", "Iron", "55.845", 8, 4, "",
    "Co", "Cobalt", "58.933195", 9, 4, "",
    "Ni", "Nickel", "58.6934", 10, 4, "",
    "Cu", "Copper", "63.546", 11, 4, "",
    "Zn", "Zinc", "65.38", 12, 4, "",
    "Ga", "Gallium", "69.723", 13, 4, "",
    "Ge", "Germanium", "72.63", 14, 4, "",
    "As", "Arsenic", "74.9216", 15, 4, "",
    "Se", "Selenium", "78.96", 16, 4, "",
    "Br", "Bromine", "79.904", 17, 4, "",
    "Kr", "Krypton", "83.798", 18, 4, "",
    "Rb", "Rubidium", "85.4678", 1, 5, "",
    "Sr", "Strontium", "87.62", 2, 5, "",
    "Y", "Yttrium", "88.90585", 3, 5, "",
    "Zr", "Zirconium", "91.224", 4, 5, "",
    "Nb", "Niobium", "92.90628", 5, 5, "",
    "Mo", "Molybdenum", "95.96", 6, 5, "",
    "Tc", "Technetium", "(98)", 7, 5, "",
    "Ru", "Ruthenium", "101.07", 8, 5, "",
    "Rh", "Rhodium", "102.9055", 9, 5, "",
    "Pd", "Palladium", "106.42", 10, 5, "",
    "Ag", "Silver", "107.8682", 11, 5, "",
    "Cd", "Cadmium", "112.411", 12, 5, "",
    "In", "Indium", "114.818", 13, 5, "",
    "Sn", "Tin", "118.71", 14, 5, "",
    "Sb", "Antimony", "121.76", 15, 5, "",
    "Te", "Tellurium", "127.6", 16, 5, "",
    "I", "Iodine", "126.90447", 17, 5, "",
    "Xe", "Xenon", "131.293", 18, 5, "",
    "Cs", "Caesium", "132.9054", 1, 6, "",
    "Ba", "Barium", "132.9054", 2, 6, "",
    "La", "Lanthanum", "138.90547", 4, 9, "",
    "Ce", "Cerium", "140.116", 5, 9, "",
    "Pr", "Praseodymium", "140.90765", 6, 9, "",
    "Nd", "Neodymium", "144.242", 7, 9, "",
    "Pm", "Promethium", "(145)", 8, 9, "",
    "Sm", "Samarium", "150.36", 9, 9, "",
    "Eu", "Europium", "151.964", 10, 9, "",
    "Gd", "Gadolinium", "157.25", 11, 9, "",
    "Tb", "Terbium", "158.92535", 12, 9, "",
    "Dy", "Dysprosium", "162.5", 13, 9, "",
    "Ho", "Holmium", "164.93032", 14, 9, "",
    "Er", "Erbium", "167.259", 15, 9, "",
    "Tm", "Thulium", "168.93421", 16, 9, "",
    "Yb", "Ytterbium", "173.054", 17, 9, "",
    "Lu", "Lutetium", "174.9668", 18, 9, "",
    "Hf", "Hafnium", "178.49", 4, 6, "",
    "Ta", "Tantalum", "180.94788", 5, 6, "",
    "W", "Tungsten", "183.84", 6, 6, "",
    "Re", "Rhenium", "186.207", 7, 6, "",
    "Os", "Osmium", "190.23", 8, 6, "",
    "Ir", "Iridium", "192.217", 9, 6, "",
    "Pt", "Platinum", "195.084", 10, 6, "",
    "Au", "Gold", "196.966569", 11, 6, "",
    "Hg", "Mercury", "200.59", 12, 6, "",
    "Tl", "Thallium", "204.3833", 13, 6, "",
    "Pb", "Lead", "207.2", 14, 6, "",
    "Bi", "Bismuth", "208.9804", 15, 6, "",
    "Po", "Polonium", "(209)", 16, 6, "",
    "At", "Astatine", "(210)", 17, 6, "",
    "Rn", "Radon", "(222)", 18, 6, "",
    "刀锋", "Francium", "(223)", 1, 7, "https://github.com/BladeCode",
    "Ra", "Radium", "(226)", 2, 7, "",
    "Ac", "Actinium", "(227)", 4, 10, "",
    "Th", "Thorium", "232.03806", 5, 10, "",
    "Pa", "Protactinium", "231.0588", 6, 10, "",
    "U", "Uranium", "238.02891", 7, 10, "",
    "Np", "Neptunium", "(237)", 8, 10, "",
    "Pu", "Plutonium", "(244)", 9, 10, "",
    "Am", "Americium", "(243)", 10, 10, "",
    "Cm", "Curium", "(247)", 11, 10, "",
    "Bk", "Berkelium", "(247)", 12, 10, "",
    "Cf", "Californium", "(251)", 13, 10, "",
    "Es", "Einstenium", "(252)", 14, 10, "",
    "Fm", "Fermium", "(257)", 15, 10, "",
    "Md", "Mendelevium", "(258)", 16, 10, "",
    "No", "Nobelium", "(259)", 17, 10, "",
    "Lr", "Lawrencium", "(262)", 18, 10, "",
    "Rf", "Rutherfordium", "(267)", 4, 7, "",
    "Db", "Dubnium", "(268)", 5, 7, "",
    "Sg", "Seaborgium", "(271)", 6, 7, "",
    "Bh", "Bohrium", "(272)", 7, 7, "",
    "Hs", "Hassium", "(270)", 8, 7, "",
    "Mt", "Meitnerium", "(276)", 9, 7, "",
    "Ds", "Darmstadium", "(281)", 10, 7, "",
    "Rg", "Roentgenium", "(280)", 11, 7, "",
    "Cn", "Copernicium", "(285)", 12, 7, "",
    "Uut", "Unutrium", "(284)", 13, 7, "",
    "Fl", "Flerovium", "(289)", 14, 7, "",
    "Uup", "Ununpentium", "(288)", 15, 7, "",
    "Lv", "Livermorium", "(293)", 16, 7, "",
    "Uus", "Ununseptium", "(294)", 17, 7, "",
    "Uuo", "Ununoctium", "(294)", 18, 7, ""
];

var camera, scene, renderer;
var controls;

var objects = [];
var targets = {
    table: [],
    sphere: [],
    helix: [],
    grid: []
};

init();
animate();

console.log(
    "========================================================================二龙湖基地组织=================================================================="
);
console.log(
    "二龙湖基地组织Geek，技术控集聚地，\n提倡包括但不限于以文字、图片、视频、音频、代码（提倡开源）、链接（提倡技术）、红包等形式技术分享；\n提倡相互推荐善于技术交流互动、技术控的人员入群； \n提倡讨论宇宙、外星人、人生理想、资本主义、物理学说、大自然、黑科技、人工智能，机器人，无人机，尤其是提倡【创业】类话题、技术讨论聚会等；"
);
console.log("合作伙伴:");
console.log("         APACHE基金会（APACHE） ");
console.log("         NASA/美国宇航局 ");
console.log("         国际数学联盟（International Mathematical Union) ");
console.log("         国际原子能机构（International Atomic Energy Agency） ");
console.log("改变世界从加入二龙湖开始:QQ群:542414498");

function init() {

    camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.z = 3000;

    scene = new THREE.Scene();

    // table

    for (var t = 0; t < table.length; t += 6) {

        var element = document.createElement('div');
        element.className = 'element';
        element.style.backgroundColor = 'rgba(0,127,127,' + (Math.random() * 0.5 + 0.25) + ')';



        var number = document.createElement('div');
        number.className = 'number';
        number.textContent = (t / 6) + 1;
        element.appendChild(number);

        var symbol = document.createElement('div');
        symbol.className = 'symbol';
        //symbol.textContent = table[t];
       // element.appendChild(symbol);

        var addressUrl = document.createElement('a');
        addressUrl.className = 'addressUrl';
        if(''!=table[t + 5]){
        	//console.log("2"+table[t + 5]);
        	 addressUrl.href =table[t + 5];
       		 /*addressUrl.onclick=function(){
       		 	console.log(table[t + 5]);
       		 	window.location.href=table[t + 5];
       		 	}*/
       	}else{
       		//console.log(1);
       		 addressUrl.href ='javascript:void(0);';

       	}
        addressUrl.target = '_blank';
        addressUrl.textContent = table[t];
        symbol.appendChild(addressUrl);
 				element.appendChild(symbol);

        var details = document.createElement('div');
        details.className = 'details';
        details.innerHTML = table[t + 1] + '<br>' + table[t + 2];
        element.appendChild(details);

        var objectOne = new THREE.CSS3DObject(element);
        objectOne.position.x = Math.random() * 4000 - 2000;
        objectOne.position.y = Math.random() * 4000 - 2000;
        objectOne.position.z = Math.random() * 4000 - 2000;
        scene.add(objectOne);

        objects.push(objectOne);

        var objectTwo = new THREE.Object3D();
        objectTwo.position.x = (table[t + 3] * 140) - 1330;
        objectTwo.position.y = -(table[t + 4] * 180) + 990;

        targets.table.push(objectTwo);

    }

    // sphere

    var vector = new THREE.Vector3();

    for (var i = 0, l = objects.length; i < l; i++) {

        var phiSphere = Math.acos(-1 + (2 * i) / l);
        var theta = Math.sqrt(l * Math.PI) * phiSphere;

        var objectSphere = new THREE.Object3D();

        objectSphere.position.x = 800 * Math.cos(theta) * Math.sin(phiSphere);
        objectSphere.position.y = 800 * Math.sin(theta) * Math.sin(phiSphere);
        objectSphere.position.z = 800 * Math.cos(phiSphere);

        vector.copy(objectSphere.position).multiplyScalar(2);

        objectSphere.lookAt(vector);

        targets.sphere.push(objectSphere);

    }

    // helix

    var vectorHelix = new THREE.Vector3();

    for (var h = 0, l = objects.length; h < l; h++) {

        var phiHelix = h * 0.175 + Math.PI;

        var objectHelix = new THREE.Object3D();

        objectHelix.position.x = 900 * Math.sin(phiHelix);
        objectHelix.position.y = -(h * 8) + 450;
        objectHelix.position.z = 900 * Math.cos(phiHelix);

        vectorHelix.x = objectHelix.position.x * 2;
        vectorHelix.y = objectHelix.position.y;
        vectorHelix.z = objectHelix.position.z * 2;

        objectHelix.lookAt(vectorHelix);

        targets.helix.push(objectHelix);

    }

    // grid

    for (var g = 0; g < objects.length; g++) {

        var objectGrid = new THREE.Object3D();

        objectGrid.position.x = ((g % 5) * 400) - 800;
        objectGrid.position.y = (-(Math.floor(g / 5) % 5) * 400) + 800;
        objectGrid.position.z = (Math.floor(g / 25)) * 1000 - 2000;

        targets.grid.push(objectGrid);

    }

    renderer = new THREE.CSS3DRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.domElement.style.position = 'absolute';
    document.getElementById('container').appendChild(renderer.domElement);

    controls = new THREE.TrackballControls(camera, renderer.domElement);
    controls.rotateSpeed = 0.5;
    controls.minDistance = 500;
    controls.maxDistance = 6000;
    controls.addEventListener('change', render);

    var buttonOne = document.getElementById('table');
    buttonOne.addEventListener('click', function () {

        transform(targets.table, 2000);

    }, false);

    var buttonTwo = document.getElementById('sphere');
    buttonTwo.addEventListener('click', function () {

        transform(targets.sphere, 2000);

    }, false);

    var buttonThree = document.getElementById('helix');
    buttonThree.addEventListener('click', function () {

        transform(targets.helix, 2000);

    }, false);

    var buttonFour = document.getElementById('grid');
    buttonFour.addEventListener('click', function () {

        transform(targets.grid, 2000);

    }, false);

    transform(targets.table, 5000);

    window.addEventListener('resize', onWindowResize, false);

}

function open(url){
	window.location.href=url;
}

function transform(targets, duration) {

    TWEEN.removeAll();

    for (var i = 0; i < objects.length; i++) {

        var object = objects[i];
        var target = targets[i];

        new TWEEN.Tween(object.position)
            .to({
                x: target.position.x,
                y: target.position.y,
                z: target.position.z
            }, Math.random() * duration + duration)
            .easing(TWEEN.Easing.Exponential.InOut)
            .start();

        new TWEEN.Tween(object.rotation)
            .to({
                x: target.rotation.x,
                y: target.rotation.y,
                z: target.rotation.z
            }, Math.random() * duration + duration)
            .easing(TWEEN.Easing.Exponential.InOut)
            .start();

    }

    new TWEEN.Tween(this)
        .to({}, duration * 2)
        .onUpdate(render)
        .start();

}

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);

    render();

}

function animate() {

    requestAnimationFrame(animate);

    TWEEN.update();

    controls.update();

}

function render() {

    renderer.render(scene, camera);

}