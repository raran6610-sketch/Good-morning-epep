// ===== STATE =====
let aim = false;
let damage = false;
let recoil = false;
let esp = false;

// ===== ELEMEN =====
const aimBtn = document.getElementById('aimBtn');
const damageBtn = document.getElementById('damageBtn');
const recoilBtn = document.getElementById('recoilBtn');
const espBtn = document.getElementById('espBtn');
const statusText = document.getElementById('statusText');

// ===== FUNGSI TOGGLE =====
function toggleAim() {
    aim = !aim;
    aimBtn.classList.toggle('active');
    updateStatus();
    console.log('Aimbot:', aim ? 'ON' : 'OFF');
}

function toggleDamage() {
    damage = !damage;
    damageBtn.classList.toggle('active');
    updateStatus();
    console.log('Damage Boost:', damage ? 'ON' : 'OFF');
}

function toggleRecoil() {
    recoil = !recoil;
    recoilBtn.classList.toggle('active');
    updateStatus();
    console.log('No Recoil:', recoil ? 'ON' : 'OFF');
}

function toggleEsp() {
    esp = !esp;
    espBtn.classList.toggle('active');
    updateStatus();
    console.log('ESP:', esp ? 'ON' : 'OFF');
}

// ===== AKTIFKAN SEMUA =====
function applyAll() {
    if (!aim) { aim = true; aimBtn.classList.add('active'); }
    if (!damage) { damage = true; damageBtn.classList.add('active'); }
    if (!recoil) { recoil = true; recoilBtn.classList.add('active'); }
    if (!esp) { esp = true; espBtn.classList.add('active'); }
    updateStatus();
    alert('✅ Semua fitur aktif!');
}

// ===== UPDATE STATUS =====
function updateStatus() {
    const active = [];
    if (aim) active.push('🎯 Aim');
    if (damage) active.push('💥 Damage');
    if (recoil) active.push('🔫 NoRecoil');
    if (esp) active.push('👀 ESP');

    if (active.length > 0) {
        statusText.textContent = '🔥 Status: ' + active.join(' + ');
        statusText.classList.add('active');
    } else {
        statusText.textContent = 'Status: OFF';
        statusText.classList.remove('active');
    }
}
