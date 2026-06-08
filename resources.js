/* ═══════════════════════════════════════════════════════════════
   resources.js — CAZZPrep Resources Page
   Updated: semester added to routines + syllabusData keys
   ═══════════════════════════════════════════════════════════════ */


/* ═══════════════════════════════════════════════════════════════
   INPUT ALIAS MAPS
   ═══════════════════════════════════════════════════════════════ */

const BRANCH_INPUT_ALIASES = {
  "cse": "cse", "computer science": "cse", "comp sci": "cse", 
   "aiml": "cse-aiml", "ai ml": "cse-aiml",
  "cse-ds": "cse-ds", "ds": "cse-ds", "data science": "cse-ds", "cse ds": "cse-ds",
  "cse-cs": "cse-cs", "cyber security": "cse-cs", "cybersecurity": "cse-cs", "cse cs": "cse-cs", "cs": "cse-cs",
  "it": "it", "information technology": "it", "info tech": "it",
  "ece": "ece", "electronics": "ece", "electronics and communication": "ece",
  "me": "me", "mechanical": "me", "mechanical engineering": "me",
  "ce": "ce", "civil": "ce", "civil engineering": "ce",
  "ee": "ee", "electrical": "ee", "electrical engineering": "ee","chemical": "chemical", "chemical engineering": "chemical",
  "aeie": "aeie", "applied instrumentation": "aeie", 
  "bt": "bt", "biotech": "bt", "biotechnology": "bt",
  "ft": "ft", "food tech": "ft", "food technology": "ft",
};

const SECTION_ALIASES = {
  "1": "1","batch 1": "1",
  "2": "2","batch 2": "2",
  "3": "3","batch 3": "3",
  "4": "4","batch 4": "4"
};

const SEMESTER_ALIASES = {
  "1": "1", "sem 1": "1", "semester 1": "1", "first": "1",   "1st": "1",
  "2": "2", "sem 2": "2", "semester 2": "2", "second": "2",  "2nd": "2",
  "3": "3", "sem 3": "3", "semester 3": "3", "third": "3",   "3rd": "3",
  "4": "4", "sem 4": "4", "semester 4": "4", "fourth": "4",  "4th": "4",
  "5": "5", "sem 5": "5", "semester 5": "5", "fifth": "5",   "5th": "5",
  "6": "6", "sem 6": "6", "semester 6": "6", "sixth": "6",   "6th": "6",
  "7": "7", "sem 7": "7", "semester 7": "7", "seventh": "7", "7th": "7",
  "8": "8", "sem 8": "8", "semester 8": "8", "eighth": "8",  "8th": "8",
};


/* ═══════════════════════════════════════════════════════════════
   DATA — CLASS ROUTINES
   Key format: "branch-section-sem{N}"
   Example:    "cse-a-sem2"
   ← ADD YOUR CLOUDINARY URLs HERE
   ═══════════════════════════════════════════════════════════════ */
const routines = {
  "cse-a-sem2":      "",
  "cse-b-sem2":      "",
  "cse-a-sem4":      "",
  "cse-b-sem4":      "",
  "cse-a-sem6":      "",
  "it-a-sem2":       "",
  "it-a-sem4":       "",
  "ece-a-sem2":      "",
  "cse-aiml-a-sem4": "",
  "cse-ds-a-sem4":   "",
};


/* ═══════════════════════════════════════════════════════════════
   DATA — SYLLABUS
   Key format: "branch-sem{N}"
   Example:    "cse-sem4"
   ← ADD YOUR CLOUDINARY URLs HERE
   ═══════════════════════════════════════════════════════════════ */
const nonCoreBranches = [
  "cse",
  "it",
  "cse-ds",
  "cse-aiml",
  "cse-cs"
];

const coreBranches = [
  "ece",
  "ee",
  "me",
  "ce",
  "chemical",
  "aeie",
  "bt",
  "ft"
];   


   
const syllabusData = {
  "core-sem1":     "",
  "core-sem2":     "https://res.cloudinary.com/dfhrsgont/image/upload/v1780916804/Screenshot_2026-06-08_163238_bltjr7.png",
  "noncore-sem1":  "",
  "noncore-sem2":  "https://res.cloudinary.com/dfhrsgont/image/upload/v1780916788/Screenshot_2026-06-08_163217_fqhl2a.png",
  "ece-sem4":      "https://res.cloudinary.com/dfhrsgont/image/upload/v1780916693/Screenshot_2026-06-08_163340_wbmqjv.png",
  "ece-sem6":      "https://res.cloudinary.com/dfhrsgont/image/upload/v1780916694/Screenshot_2026-06-08_163409_f0zems.png",
  "ece-sem8":      "https://res.cloudinary.com/dfhrsgont/image/upload/v1780916695/Screenshot_2026-06-08_163427_bplqb7.png",
  "cse-sem4":      "https://res.cloudinary.com/dfhrsgont/image/upload/v1780916942/Screenshot_2026-06-08_163742_q03hqd.png",
  "cse-sem6":      "https://res.cloudinary.com/dfhrsgont/image/upload/v1780916943/Screenshot_2026-06-08_163828_ipwgpc.png",
  "cse-sem8":      "https://res.cloudinary.com/dfhrsgont/image/upload/v1780916945/Screenshot_2026-06-08_163843_noaaiw.png",
  "it-sem4":       "https://res.cloudinary.com/dfhrsgont/image/upload/v1780917167/Screenshot_2026-06-08_164201_rs6kbb.png",
  "it-sem6":       "https://res.cloudinary.com/dfhrsgont/image/upload/v1780917168/Screenshot_2026-06-08_164219_yd1u0o.png",
  "it-sem8":       "https://res.cloudinary.com/dfhrsgont/image/upload/v1780917171/Screenshot_2026-06-08_164232_exodf0.png",
  "cse-ds-sem4":      "https://res.cloudinary.com/dfhrsgont/image/upload/v1780917295/Screenshot_2026-06-08_164413_katkn5.png",
  "cse-ds-sem6":      "https://res.cloudinary.com/dfhrsgont/image/upload/v1780917297/Screenshot_2026-06-08_164428_c0e1wn.png",
  "cse-ds-sem8":      "https://res.cloudinary.com/dfhrsgont/image/upload/v1780917299/Screenshot_2026-06-08_164441_jsqk6b.png",
  "cse-aiml-sem4": "https://res.cloudinary.com/dfhrsgont/image/upload/v1780916391/Screenshot_2026-06-08_161845_fnj07b.png",
  "cse-aiml-sem6": "https://res.cloudinary.com/dfhrsgont/image/upload/v1780916392/Screenshot_2026-06-08_162022_yrupqr.png",
  "cse-aiml-sem8": "https://res.cloudinary.com/dfhrsgont/image/upload/v1780916392/Screenshot_2026-06-08_162051_y54vaz.png",
  "cse-cs-sem4": "https://res.cloudinary.com/dfhrsgont/image/upload/v1780917046/Screenshot_2026-06-08_163957_saquu8.png",
  "cse-cs-sem6": "https://res.cloudinary.com/dfhrsgont/image/upload/v1780917047/Screenshot_2026-06-08_164015_hnjcu1.png",
  "cse-cs-sem8": "https://res.cloudinary.com/dfhrsgont/image/upload/v1780917050/Screenshot_2026-06-08_164032_c0g1zw.png",
  "me-sem4": "https://res.cloudinary.com/dfhrsgont/image/upload/v1780918456/Screenshot_2026-06-08_170147_vmgjcj.png",
  "me-sem6": "https://res.cloudinary.com/dfhrsgont/image/upload/v1780918565/Screenshot_2026-06-08_170256_xyaip3.png",
  "me-sem8": "https://res.cloudinary.com/dfhrsgont/image/upload/v1780918567/Screenshot_2026-06-08_170339_ipboub.png",
  "ce-sem4": "https://res.cloudinary.com/dfhrsgont/image/upload/v1780918750/Screenshot_2026-06-08_170800_eyhkpp.png",
  "ce-sem6": "https://res.cloudinary.com/dfhrsgont/image/upload/v1780918753/Screenshot_2026-06-08_170819_fgrkp9.png",
  "ce-sem8": "https://res.cloudinary.com/dfhrsgont/image/upload/v1780918755/Screenshot_2026-06-08_170837_m8i7gf.png",
  "ee-sem4": "https://res.cloudinary.com/dfhrsgont/image/upload/v1780919185/Screenshot_2026-06-08_171357_bbflsm.png",
  "ee-sem6": "https://res.cloudinary.com/dfhrsgont/image/upload/v1780920178/image_eiwebc.jpg",
  "ee-sem8": "https://res.cloudinary.com/dfhrsgont/image/upload/v1780919190/Screenshot_2026-06-08_171529_fiqrhk.png",
  "chemical-sem4": "https://res.cloudinary.com/dfhrsgont/image/upload/v1780918586/Screenshot_2026-06-08_170457_etdphm.png",
  "chemical-sem6": "https://res.cloudinary.com/dfhrsgont/image/upload/v1780918588/Screenshot_2026-06-08_170514_g2unnn.png",
  "chemical-sem8": "https://res.cloudinary.com/dfhrsgont/image/upload/v1780918590/Screenshot_2026-06-08_170559_ciwjih.png",
  "aeie-sem4": "https://res.cloudinary.com/dfhrsgont/image/upload/v1780919420/Screenshot_2026-06-08_171918_whjeah.png",
  "aeie-sem6": "https://res.cloudinary.com/dfhrsgont/image/upload/v1780919618/Screenshot_2026-06-08_171938_itmypc.png",
  "aeie-sem8": "https://res.cloudinary.com/dfhrsgont/image/upload/v1780919619/Screenshot_2026-06-08_171958_peqcn3.png",
  "bt-sem4": "https://res.cloudinary.com/dfhrsgont/image/upload/v1780919638/Screenshot_2026-06-08_172240_zxdkvl.png",
  "bt-sem6": "https://res.cloudinary.com/dfhrsgont/image/upload/v1780919641/Screenshot_2026-06-08_172302_ygdyp6.png",
  "bt-sem8": "https://res.cloudinary.com/dfhrsgont/image/upload/v1780919644/Screenshot_2026-06-08_172332_tvlg6l.png",
  "ft-sem4": "https://res.cloudinary.com/dfhrsgont/image/upload/v1780919800/Screenshot_2026-06-08_172522_lb3hcr.png",
  "ft-sem6": "https://res.cloudinary.com/dfhrsgont/image/upload/v1780919804/Screenshot_2026-06-08_172550_f3qyte.png",
  "ft-sem8": "https://res.cloudinary.com/dfhrsgont/image/upload/v1780919807/Screenshot_2026-06-08_172614_b32bcu.png",

};


/* ═══════════════════════════════════════════════════════════════
   DATA — NOTICES
   ← ADD YOUR CLOUDINARY URLs HERE
   ═══════════════════════════════════════════════════════════════ */
const notices = [
  {
    date: "2025-05-26",
    title: "2nd & 4th End Semester Exam Schedule",
    description: "Even semester exams begin from 15th June. ",
    imageUrl: null
  },
  {
    date: "2025-05-26",
    title: "6th & 8th End Semester Exam Schedule",
    description: "Even semester exams begin from 8th June.",
    imageUrl: null
  },
];


/* ═══════════════════════════════════════════════════════════════
   ZOOM STATE
   ═══════════════════════════════════════════════════════════════ */
const zoomState = { routine: 1, syllabus: 1 };
const ZOOM_STEP = 0.2;
const ZOOM_MIN  = 0.5;
const ZOOM_MAX  = 3.0;


/* ═══════════════════════════════════════════════════════════════
   HELPERS
   ═══════════════════════════════════════════════════════════════ */
function normalizeInput(str) {
  return str.toLowerCase().trim().replace(/\s+/g, " ");
}

function buildImageCard(url, section) {
  return `
    <div class="result-img-card">
      <div class="result-img-wrap">
        <img class="result-img" id="${section}Img"
          src="${url}"
          alt="${section === 'routine' ? 'Class Routine' : 'Syllabus'}"
          loading="lazy"/>
      </div>
      <div class="zoom-controls">
        <button class="zoom-btn" onclick="zoom('${section}', -1)" aria-label="Zoom out">−</button>
        <span class="zoom-label" id="${section}ZoomLabel">100%</span>
        <button class="zoom-btn" onclick="zoom('${section}', 1)" aria-label="Zoom in">+</button>
      </div>
    </div>`;
}

function buildMessage(msg, type) {
  const bg     = type === "error" ? "rgba(248,113,113,0.08)" : "rgba(249,115,22,0.06)";
  const border = type === "error" ? "rgba(248,113,113,0.3)"  : "rgba(249,115,22,0.2)";
  const color  = type === "error" ? "#f87171" : "#fb923c";
  return `<div style="text-align:center;padding:1.5rem;background:${bg};border:1px dashed ${border};border-radius:10px;color:${color};font-size:14px;line-height:1.7;">${msg}</div>`;
}

// Resolve branch, semester, section from raw string
function parseInput(raw) {
  const n      = normalizeInput(raw);
  const tokens = n.split(/[\s\-,]+/);

  let branch   = null;
  let section  = null;
  let semester = null;

  // Single-token pass
  for (const token of tokens) {
    if (!branch   && BRANCH_INPUT_ALIASES[token])  branch   = BRANCH_INPUT_ALIASES[token];
    if (!section  && SECTION_ALIASES[token])        section  = SECTION_ALIASES[token];
    if (!semester && SEMESTER_ALIASES[token])        semester = SEMESTER_ALIASES[token];
  }

  // Multi-word fallback — longest alias first to avoid partial matches
  if (!branch) {
    const sorted = Object.entries(BRANCH_INPUT_ALIASES).sort((a, b) => b[0].length - a[0].length);
    for (const [alias, val] of sorted) {
      if (n.includes(alias)) { branch = val; break; }
    }
  }
  if (!semester) {
    const sorted = Object.entries(SEMESTER_ALIASES).sort((a, b) => b[0].length - a[0].length);
    for (const [alias, val] of sorted) {
      if (n.includes(alias)) { semester = val; break; }
    }
  }

  return { branch, section, semester };
}


/* ═══════════════════════════════════════════════════════════════
   ZOOM
   ═══════════════════════════════════════════════════════════════ */
function zoom(section, dir) {
  let level = zoomState[section];
  level = Math.min(ZOOM_MAX, Math.max(ZOOM_MIN, +(level + dir * ZOOM_STEP).toFixed(1)));
  zoomState[section] = level;
  const img   = document.getElementById(section + "Img");
  const label = document.getElementById(section + "ZoomLabel");
  if (img)   img.style.transform = `scale(${level})`;
  if (label) label.textContent   = Math.round(level * 100) + "%";
}


/* ═══════════════════════════════════════════════════════════════
   SECTION 1 — SEARCH ROUTINE
   Shows "coming soon" message for now.
   When ready: delete the 3 coming-soon lines and uncomment the rest.
   ═══════════════════════════════════════════════════════════════ */
function searchRoutine() {
  const result = document.getElementById("routineResult");

  // ── COMING SOON — remove these 3 lines when routines are ready ──
  result.innerHTML = buildMessage("📅 Routines will be added for the next semester. Check back soon!", "info");
  return;
  // ────────────────────────────────────────────────────────────────

  const raw = document.getElementById("routineSearch").value.trim();

  if (!raw) {
    result.innerHTML = buildMessage(
      'Please enter branch, section and semester.<br><small style="opacity:0.7">Example: CSE-A Semester 2 &nbsp;|&nbsp; IT A sem 4</small>',
      "info"
    );
    return;
  }

  const { branch, section, semester } = parseInput(raw);

  if (!branch) {
    result.innerHTML = buildMessage("Branch not recognized. Try: CSE, IT, ECE, CSE-AIML, CSE-DS etc.", "error");
    return;
  }
  if (!section) {
    result.innerHTML = buildMessage("Section not found. Please include your section — Example: <strong>CSE-A</strong> Semester 2", "error");
    return;
  }
  if (!semester) {
    result.innerHTML = buildMessage("Semester not recognized. Try: Semester 2, sem 4, 6th sem etc.", "error");
    return;
  }

  const key = `${branch}-${section}-sem${semester}`;
  const url = routines[key];

  if (!url) {
    result.innerHTML = buildMessage(
      `No routine found for <strong>${branch.toUpperCase()}-${section.toUpperCase()} Semester ${semester}</strong>.<br>
       <small style="opacity:0.7">Not added yet — check back soon .</small>`,
      "error"
    );
    return;
  }

  zoomState.routine = 1;
  result.innerHTML  = buildImageCard(url, "routine");
}


/* ═══════════════════════════════════════════════════════════════
   SECTION 2 — SEARCH SYLLABUS
   Input: "CSE Semester 4" → key "cse-sem4"
   ═══════════════════════════════════════════════════════════════ */
function searchSyllabus() {
  const raw    = document.getElementById("syllabusSearch").value.trim();
  const result = document.getElementById("syllabusResult");
 
  if (!raw) {
    result.innerHTML = buildMessage(
      'Please enter branch and semester.<br><small style="opacity:0.7">Example: CSE Semester 4 &nbsp;|&nbsp; IT sem 2</small>',
      "info"
    );
    return;
  }
 
  const { branch, semester } = parseInput(raw);
 
  if (!branch) {
    result.innerHTML = buildMessage("Branch not recognized. Try: CSE, IT, ECE, CSE-AIML, CSE-DS etc.", "error");
    return;
  }
  if (!semester) {
    result.innerHTML = buildMessage("Semester not recognized. Try: Semester 4, sem 2, 3rd sem etc.", "error");
    return;
  }
 
  let key;

// Shared syllabus for Sem 1 & 2
if (semester <= 2) {

  if (coreBranches.includes(branch)) {
    key = `core-sem${semester}`;
  }

  else if (nonCoreBranches.includes(branch)) {
    key = `noncore-sem${semester}`;
  }

}

// Branch-specific syllabus for higher semesters
else {

  key = `${branch}-sem${semester}`;

}

const url = syllabusData[key];
 
  if (!url) {
    result.innerHTML = buildMessage(
      `No syllabus found for <strong>${branch.toUpperCase()} Semester ${semester}</strong>.<br>
       <small style="opacity:0.7">Not added yet — check back soon or contribute on Discord.</small>`,
      "error"
    );
    return;
  }
 
  zoomState.syllabus = 1;
  result.innerHTML =
  buildImageCard(url, "syllabus") +

  `
  <div class="syllabus-note">
    📚 Currently displaying the syllabus overview. Detailed syllabus will be added progressively.
  </div>
  `;
}


/* ═══════════════════════════════════════════════════════════════
   SECTION 3 — RENDER NOTICES
   ═══════════════════════════════════════════════════════════════ */
function renderNotices() {
  const list = document.getElementById("noticesList");

  if (!notices || notices.length === 0) {
    list.innerHTML = `<div class="notices-empty">No active notices at this time.</div>`;
    return;
  }

  list.innerHTML = notices.map((n, i) => {
    const dateStr = new Date(n.date).toLocaleDateString("en-IN", {
      day: "numeric", month: "short", year: "numeric"
    });
    const viewBtn = n.imageUrl
      ? `<button class="notice-view-btn" onclick="openLightbox(${i})">
           <svg width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
             <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
             <circle cx="12" cy="12" r="3"/>
           </svg>
           View
         </button>`
      : "";
    return `
      <div class="notice-card">
        <span class="notice-date">${dateStr}</span>
        <div class="notice-body">
          <p class="notice-title">${n.title}</p>
          <p class="notice-desc">${n.description}</p>
          ${viewBtn}
        </div>
      </div>`;
  }).join("");
}


/* ═══════════════════════════════════════════════════════════════
   LIGHTBOX
   ═══════════════════════════════════════════════════════════════ */
function openLightbox(noticeIndex) {
  const notice = notices[noticeIndex];
  if (!notice || !notice.imageUrl) return;
  document.getElementById("lightboxImg").src = notice.imageUrl;
  document.getElementById("lightbox").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  document.getElementById("lightbox").classList.remove("open");
  document.body.style.overflow = "";
}

document.getElementById("lightbox").addEventListener("click", function (e) {
  if (e.target === this) closeLightbox();
});
document.getElementById("lightboxClose").addEventListener("click", closeLightbox);


/* ═══════════════════════════════════════════════════════════════
   ABOUT MODAL
   ═══════════════════════════════════════════════════════════════ */
function openAboutModal() {
  document.getElementById("aboutModal").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeAboutModal() {
  document.getElementById("aboutModal").classList.remove("open");
  document.body.style.overflow = "";
}

document.getElementById("aboutModal").addEventListener("click", function (e) {
  if (e.target === this) closeAboutModal();
});


/* ═══════════════════════════════════════════════════════════════
   NAVBAR — RESOURCES DROPDOWN
   ═══════════════════════════════════════════════════════════════ */
const dropdownTrigger = document.getElementById("dropdownTrigger");
const dropdownPanel   = document.getElementById("dropdownPanel");

dropdownTrigger.addEventListener("click", function (e) {
  e.stopPropagation();
  const isOpen = dropdownPanel.classList.contains("open");
  dropdownPanel.classList.toggle("open", !isOpen);
  dropdownTrigger.querySelector(".chevron").classList.toggle("open", !isOpen);
  this.setAttribute("aria-expanded", String(!isOpen));
});

function closeDropdown() {
  dropdownPanel.classList.remove("open");
  dropdownTrigger.querySelector(".chevron").classList.remove("open");
  dropdownTrigger.setAttribute("aria-expanded", "false");
}

document.addEventListener("click", function (e) {
  if (!document.getElementById("resourcesDropdown").contains(e.target)) closeDropdown();
});


/* ═══════════════════════════════════════════════════════════════
   NAVBAR — HAMBURGER
   ═══════════════════════════════════════════════════════════════ */
const hamburger  = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

hamburger.addEventListener("click", function () {
  const isOpen = mobileMenu.classList.contains("open");
  mobileMenu.classList.toggle("open", !isOpen);
  hamburger.classList.toggle("open", !isOpen);
  hamburger.setAttribute("aria-expanded", String(!isOpen));
});

function closeMobileMenu() {
  mobileMenu.classList.remove("open");
  hamburger.classList.remove("open");
  hamburger.setAttribute("aria-expanded", "false");
}

document.getElementById("mobileResourcesTrigger").addEventListener("click", function () {
  const panel  = document.getElementById("mobileResourcesPanel");
  const isOpen = panel.classList.contains("open");
  panel.classList.toggle("open", !isOpen);
  this.querySelector(".chevron").classList.toggle("open", !isOpen);
});


/* ═══════════════════════════════════════════════════════════════
   KEYBOARD
   ═══════════════════════════════════════════════════════════════ */
document.getElementById("routineSearch").addEventListener("keydown",  e => { if (e.key === "Enter") searchRoutine();  });
document.getElementById("syllabusSearch").addEventListener("keydown", e => { if (e.key === "Enter") searchSyllabus(); });

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") { closeLightbox(); closeAboutModal(); closeDropdown(); }
});


/* ═══════════════════════════════════════════════════════════════
   INIT
   ═══════════════════════════════════════════════════════════════ */
document.addEventListener("DOMContentLoaded", function () {
  renderNotices();
});