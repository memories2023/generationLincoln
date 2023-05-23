let wa = document.getElementById('whats');
const ni = document.getElementById('nigger');
const ch = document.getElementById('check');
const link = 'https://chat.whatsapp.com/GAZNRsx3D9uKH0dqqyvbDj';
const c = document.getElementById('close');

const arr = [
    'josue',
    'javier',
    'roi',
    'cookie',
    'alejandro',
    'andrea',
    'itzel',
    'poio',
    'pablo',
    'mau',
    'regina',
    'abel',
    'fabrizio',
    'daniela',
    'erick',
    'cristi',
    'maria',
    'gil',
    'sofi',
    'jose',
    'han',
    'ivana'
]

wa.onclick = () => {
    ch.style.display = 'flex';
}

ni.oninput = (e) => {
    const input = e.target.value.toLowerCase();
    if(arr.some(e => e === input)) {
        window.open(link, '_blank');
    }
    
}

c.onclick = () => {
    ch.style.display = 'none';
}