// ====== Data: 36 Weapons (name, category, img, desc, power, range(m), mag) ======
const WEAPONS = [
  // Handguns (7)
  {name:"Desert Eagle (.50 AE)", cat:"Handgun", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3WM0tEL57dLOOO5oz1zvCg6WF_6GH7MPC8A&s", desc:"High-caliber semi-auto famed for stopping power.", power:80, range:50, mag:"7+1"},
  {name:"Glock 17", cat:"Handgun", img:"https://t4.ftcdn.net/jpg/04/80/88/81/360_F_480888147_oFLIn5UcUWJ4xDLdLFKIFCMvfNuKdmIw.jpg", desc:"Polymer-framed 9×19mm service pistol.", power:45, range:50, mag:"17+1"},
  {name:"Beretta M9", cat:"Handgun", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7F1b0nmEHM-uY9CHmule83W27V2R4LwhqMw&s", desc:"US service pistol for decades.", power:44, range:50, mag:"15+1"},
  {name:"SIG P226", cat:"Handgun", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnjchF5dq8t6ItR6rBy6WQ1flXpBEts7jBug&s", desc:"Reliable 9mm pistol used worldwide.", power:46, range:50, mag:"15+1"},
  {name:"CZ-75", cat:"Handgun", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbYgk_dt19LBVFZqVw148DwF0awuQ0jexIQA&s", desc:"Steel-frame accuracy classic.", power:47, range:50, mag:"16+1"},
  {name:"HK USP", cat:"Handgun", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBhE_pEpn_4ay2B0YmTGJDbRbYlue_lEhXMg&s", desc:"Durable, accurate, variant-friendly.", power:50, range:50, mag:"15+1"},
  {name:"M1911 (.45 ACP)", cat:"Handgun", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDF_oN7aTKwP2HYVrFSZOp6HYE-TsKxaz1Mg&s", desc:"Timeless single-stack .45.", power:55, range:40, mag:"7+1"},

  // SMGs (6)
  {name:"MP5", cat:"SMG", img:"https://upload.wikimedia.org/wikipedia/commons/4/4d/Heckler_%26_Koch_MP5-1.jpg", desc:"9mm roller-delayed icon.", power:52, range:150, mag:"30"},
  {name:"MP7", cat:"SMG", img:"https://upload.wikimedia.org/wikipedia/commons/7/71/MP7_A2.jpg", desc:"PDW with high penetration 4.6×30mm.", power:55, range:180, mag:"40"},
  {name:"Uzi", cat:"SMG", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uzi_of_the_israeli_armed_forces.jpg/960px-Uzi_of_the_israeli_armed_forces.jpg", desc:"Compact open-bolt classic.", power:50, range:120, mag:"32"},
  {name:"P90", cat:"SMG", img:"https://upload.wikimedia.org/wikipedia/commons/a/af/P90--.png", desc:"Bullpup PDW with 50-round mag.", power:56, range:200, mag:"50"},
  {name:"KRISS Vector", cat:"SMG", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Kriss_Vector_SMG_Realistic.png/1200px-Kriss_Vector_SMG_Realistic.png", desc:".45 ACP with recoil mitigation.", power:58, range:120, mag:"25/33"},
  {name:"MAC-10", cat:"SMG", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYYrAiR5WI6CP-xk8NMJLFqO9iNMJOjchpEQ&s", desc:"Compact, high rate of fire.", power:48, range:100, mag:"32"},

  // Assault Rifles / Battle Rifles (10)
  {name:"AK-47", cat:"Assault Rifle", img:"https://www.pragueranger.cz/upload/20241114220842-9012--800.webp", desc:"7.62×39mm legendary reliability.", power:72, range:350, mag:"30"},
  {name:"AK-74", cat:"Assault Rifle", img:"https://c8.alamy.com/comp/2B9663A/kalashnikov-ak-74-assault-rifle-isolated-on-white-background-2B9663A.jpg", desc:"5.45×39mm low recoil variant.", power:65, range:400, mag:"30"},
  {name:"AK-203", cat:"Assault Rifle", img:"https://images.firstpost.com/uploads/2025/07/Untitled-design-11-2025-07-e10ce5ee3a642c4252a46c84970b5735.jpg?im=FitAndFill=(1200,675)", desc:"Modernized Kalashnikov platform.", power:70, range:400, mag:"30"},
  {name:"M4A1", cat:"Assault Rifle", img:"https://thumbs.dreamstime.com/b/us-army-m-carbine-isolated-white-background-studio-shot-63516668.jpg", desc:"5.56×45mm modular carbine.", power:66, range:500, mag:"30"},
  {name:"SCAR-L", cat:"Assault Rifle", img:"https://gunsmagazine.com/wp-content/uploads/2023/11/G0124-SCAR-1.jpg", desc:"Adaptive, reliable 5.56 system.", power:68, range:500, mag:"30"},
  {name:"AUG A3", cat:"Assault Rifle", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnqAQk3X-xEErPBM432-G5Mp14I5-G8KONiA&s", desc:"Bullpup 5.56 with optics rail.", power:66, range:500, mag:"30"},
  {name:"FAMAS", cat:"Assault Rifle", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYZ0lT-QTWd9DTyjPVeO1cp5YJk6i-jEWaiw&s", desc:"French bullpup burst specialist.", power:64, range:450, mag:"25"},
  {name:"G36C", cat:"Assault Rifle", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIbZ8jE2Nae_c0Nwe4ADNC8gIVhSFKCdZIOA&s", desc:"Compact 5.56 for CQC.", power:64, range:400, mag:"30"},
  {name:"SIG 716 (7.62)", cat:"Assault Rifle", img:"https://static.theprint.in/wp-content/uploads/2019/12/Sig-Sauer-SIG716-1024x575.jpg", desc:"7.62×51mm designated/battle role.", power:78, range:700, mag:"20"},
  {name:"Tavor TAR-21", cat:"Assault Rifle", img:"https://upload.wikimedia.org/wikipedia/commons/d/d7/IWI-Tavor-TAR-21w1.jpg", desc:"Bullpup 5.56 combat rifle.", power:67, range:500, mag:"30"},

  // Shotguns (4)
  {name:"Remington 870", cat:"Shotgun", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIl_VIHddfY-SYhDcbqexwOqassqO5FhcRfEdvcyi6VMXHmbflf2anMifqqomIw_mtpw&usqp=CAU", desc:"Pump-action workhorse.", power:85, range:40, mag:"7"},
  {name:"Benelli M4", cat:"Shotgun", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYosdorZK_yr5LIWlW_rNk-pxMRhkwexjBtQ&s", desc:"Auto-regulating gas shotgun.", power:88, range:45, mag:"7"},
  {name:"SPAS-12", cat:"Shotgun", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Franchi_SPAS_12_Grip_Safety.jpeg/960px-Franchi_SPAS_12_Grip_Safety.jpeg", desc:"Dual-mode iconic shotgun.", power:86, range:45, mag:"8"},
  {name:"Mossberg 500", cat:"Shotgun", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/PEO_Mossberg_590A1.jpg/960px-PEO_Mossberg_590A1.jpg", desc:"Reliable, modular platform.", power:84, range:40, mag:"8"},

  // LMGs (4)
  {name:"M249 SAW", cat:"LMG", img:"https://upload.wikimedia.org/wikipedia/commons/a/ae/PEO_M249_Para_ACOG.jpg", desc:"5.56 light machine gun.", power:82, range:800, mag:"100 belt"},
  {name:"PKM", cat:"LMG", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_lPxc6KiQTXpMXTdfZ0GjH2OUCNCn2Ip3Cw&s", desc:"7.62×54R general-purpose MG.", power:88, range:1000, mag:"100 belt"},
  {name:"RPK-74", cat:"LMG", img:"https://upload.wikimedia.org/wikipedia/commons/6/68/7.62mm_light_machine_gun_RPK.png", desc:"5.45 squad automatic rifle.", power:75, range:800, mag:"45"},
  {name:"MG3", cat:"LMG", img:"https://upload.wikimedia.org/wikipedia/commons/e/ee/BundeswehrMG3_noBG.png", desc:"High-ROF 7.62 NATO MG.", power:90, range:1200, mag:"120 belt"},

  // Snipers & DMR (5)
  {name:"AWM / AXMC", cat:"Sniper", img:"https://upload.wikimedia.org/wikipedia/commons/0/0f/AWM-338-white.jpg", desc:"Precision .300/.338 magnum platform.", power:90, range:1400, mag:"5"},
  {name:"M24", cat:"Sniper", img:"https://i0.wp.com/rifleshooter.com/wp-content/uploads/2022/10/IDF-modernized-M24-rifle-in-chassis-5-scaled.jpeg?resize=678%2C381&ssl=1", desc:"7.62 NATO bolt-action sniper.", power:82, range:800, mag:"5"},
  {name:"Dragunov SVD", cat:"Sniper", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCApDCiRFDIIxdHKMWke_gLjBmbeBC3fcIFg&s", desc:"7.62×54R semi-auto marksman.", power:80, range:800, mag:"10"},
  {name:"Barrett M82 (.50)", cat:"Sniper", img:"https://upload.wikimedia.org/wikipedia/commons/5/5a/Barrett-M82A1-Independence-Day-2017-IZE-048-white.jpg", desc:"Anti-materiel semi-auto .50 BMG.", power:95, range:1500, mag:"10"},
  {name:"MK14 EBR", cat:"Sniper", img:"https://upload.wikimedia.org/wikipedia/commons/c/c1/PEO_M14_EBR-rbg.png", desc:"7.62×51 DMR with rails.", power:79, range:800, mag:"20"},
];

// ====== DOM ======
const grid = document.getElementById('grid');
const empty = document.getElementById('empty');
const search = document.getElementById('search');
const tabs = [...document.querySelectorAll('.tab')];

// Modal nodes
const modal = document.getElementById('modal');
const closeModal = document.getElementById('closeModal');
const mImg = document.getElementById('mImg');
const mTitle = document.getElementById('mTitle');
const mDesc = document.getElementById('mDesc');
const mPower = document.getElementById('mPower');
const mRange = document.getElementById('mRange');
const mMag = document.getElementById('mMag');
const mCat = document.getElementById('mCat');

let state = { q: "", cat: "All" };

// ====== Render Cards ======
function render(list){
  grid.innerHTML = "";
  if(!list.length){
    empty.classList.remove('hidden');
    return;
  }
  empty.classList.add('hidden');

  const frag = document.createDocumentFragment();
  list.forEach(w => {
    const card = document.createElement('article');
    card.className = 'card';
    card.tabIndex = 0;
    card.setAttribute('role','button');
    card.setAttribute('aria-label', `Open details for ${w.name}`);

    const img = document.createElement('img');
    img.loading = 'lazy';
    img.src = w.img;
    img.alt = `${w.name} image`;

    const body = document.createElement('div');
    body.className = 'body';

    const h3 = document.createElement('h3');
    h3.textContent = w.name;

    const badge = document.createElement('span');
    badge.className = 'badge';
    badge.textContent = w.cat;

    const mini = document.createElement('div');
    mini.className = 'mini';
    mini.innerHTML = `
      <div>Power<br><strong>${w.power}</strong></div>
      <div>Range<br><strong>${w.range} m</strong></div>
      <div>Mag<br><strong>${w.mag}</strong></div>
    `;

    body.append(h3, badge, mini);
    card.append(img, body);

    // open modal handlers
    const open = () => openModal(w);
    card.addEventListener('click', open);
    card.addEventListener('keypress', (e)=>{ if(e.key==='Enter' || e.key===' ') { e.preventDefault(); open(); } });

    frag.appendChild(card);
  });
  grid.appendChild(frag);
}

// ====== Filter Logic ======
function getFiltered(){
  const q = state.q.trim().toLowerCase();
  const cat = state.cat;
  return WEAPONS.filter(w=>{
    const inCat = (cat === "All") || (w.cat === cat) || (cat==="Sniper" && w.cat==="Sniper");
    const inQ = !q || w.name.toLowerCase().includes(q);
    return inCat && inQ;
  });
}

function refresh(){ render(getFiltered()); }

// ====== Modal ======
let lastFocus = null;
function openModal(w){
  lastFocus = document.activeElement;
  mImg.src = w.img;
  mImg.alt = `${w.name} large image`;
  mTitle.textContent = w.name;
  mDesc.textContent = w.desc;
  mPower.textContent = w.power;
  mRange.textContent = `${w.range} m`;
  mMag.textContent = w.mag;
  mCat.textContent = w.cat;

  modal.classList.add('show');
  modal.setAttribute('aria-hidden', 'false');
  closeModal.focus();
}
function hideModal(){
  modal.classList.remove('show');
  modal.setAttribute('aria-hidden', 'true');
  if(lastFocus) lastFocus.focus();
}
closeModal.addEventListener('click', hideModal);
modal.addEventListener('click', (e)=>{ if(e.target === modal) hideModal(); });
window.addEventListener('keydown', (e)=>{ if(e.key === 'Escape' && modal.classList.contains('show')) hideModal(); });

// ====== Tabs & Search ======
tabs.forEach(btn=>{
  btn.addEventListener('click', ()=>{
    tabs.forEach(b=>{ b.classList.remove('active'); b.setAttribute('aria-selected','false'); });
    btn.classList.add('active'); btn.setAttribute('aria-selected','true');
    state.cat = btn.dataset.cat;
    refresh();
  });
});
search.addEventListener('input', (e)=>{ state.q = e.target.value; refresh(); });

// ====== Init ======
refresh();
