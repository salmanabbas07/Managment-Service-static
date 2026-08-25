// Mobile navigation drawer toggle
function toggleMobileMenu() {
  const drawer = document.getElementById('mobile-menu-drawer');
  if (drawer) {
    drawer.classList.toggle('open');
  }
}

// Scroll restoration
if (history.scrollRestoration) {
  history.scrollRestoration = 'manual';
}
window.scrollTo(0, 0);

// Consultation modal
function openConsultationModal() {
  const modal = document.getElementById('consultation-modal');
  const formView = document.getElementById('modal-form-view');
  const successView = document.getElementById('modal-success-view');

  if (modal) {
    modal.style.display = 'flex';
    modal.classList.remove('hidden');
    if (formView) formView.style.display = 'block';
    if (successView) successView.style.display = 'none';
  }
}

function closeConsultationModal() {
  const modal = document.getElementById('consultation-modal');
  if (modal) {
    modal.style.display = 'none';
    modal.classList.add('hidden');
  }
}

function handleModalSubmit(e) {
  if (e) e.preventDefault();
  const formView = document.getElementById('modal-form-view');
  const successView = document.getElementById('modal-success-view');

  if (formView && successView) {
    formView.style.display = 'none';
    successView.style.display = 'block';
    successView.classList.remove('hidden');
  }
}

// Sign in modal
function openSignInModal() {
  const modal = document.getElementById('signin-modal');
  const formView = document.getElementById('signin-form-view');
  const successView = document.getElementById('signin-success-view');

  if (modal) {
    modal.style.display = 'flex';
    modal.classList.remove('hidden');
    if (formView) formView.style.display = 'block';
    if (successView) successView.style.display = 'none';
  }
}

function closeSignInModal() {
  const modal = document.getElementById('signin-modal');
  if (modal) {
    modal.style.display = 'none';
    modal.classList.add('hidden');
  }
}

function selectSignInRole(role, btn) {
  document.querySelectorAll('.signin-role-btn').forEach(b => {
    b.className = 'signin-role-btn py-1.5 px-2 rounded-lg text-slate-600 hover:text-slate-900 cursor-pointer transition-all';
  });

  if (btn) {
    btn.className = 'signin-role-btn py-1.5 px-2 rounded-lg bg-white shadow-sm text-slate-900 font-bold cursor-pointer transition-all';
  }

  const label = document.getElementById('signin-id-label');
  const input = document.getElementById('signin-id-input');

  if (role === 'admin') {
    if (label) label.innerHTML = 'Institutional Email / Admin ID <span class="text-rose-500">*</span>';
    if (input) input.placeholder = 'e.g. principal@dps.edu.in';
  } else if (role === 'teacher') {
    if (label) label.innerHTML = 'Teacher ID / Registered Mobile <span class="text-rose-500">*</span>';
    if (input) input.placeholder = 'e.g. faculty.t104@dps.edu.in';
  } else {
    if (label) label.innerHTML = 'Student Admission No. / Parent Mobile <span class="text-rose-500">*</span>';
    if (input) input.placeholder = 'e.g. +91 98765 43210 or ADM-2026';
  }
}

function handleSignInSubmit(e) {
  if (e) e.preventDefault();
  const formView = document.getElementById('signin-form-view');
  const successView = document.getElementById('signin-success-view');

  if (formView && successView) {
    formView.style.display = 'none';
    successView.style.display = 'block';
    successView.classList.remove('hidden');
  }
}

// FAQ accordion
function toggleFaq(btn) {
  const item = btn.closest('.faq-item');
  if (!item) return;

  const content = item.querySelector('.faq-content');
  const isActive = item.classList.contains('active');

  document.querySelectorAll('.faq-item').forEach(other => {
    other.classList.remove('active');
    const otherContent = other.querySelector('.faq-content');
    if (otherContent) {
      otherContent.style.maxHeight = '0px';
      otherContent.style.opacity = '0';
    }
  });

  if (!isActive && content) {
    item.classList.add('active');
    content.style.maxHeight = content.scrollHeight + 'px';
    content.style.opacity = '1';
  }
}

// Story slider
let currentSlide = 1;
const totalSlides = 3;

function showSlide(index) {
  for (let i = 1; i <= totalSlides; i++) {
    const slide = document.getElementById(`slide-${i}`);
    const ind = document.getElementById(`ind-${i}`);
    if (slide) slide.classList.remove('active');
    if (ind) ind.className = 'w-2 h-2 rounded-full bg-slate-700 inline-block transition-colors';
  }

  const activeSlide = document.getElementById(`slide-${index}`);
  const activeInd = document.getElementById(`ind-${index}`);
  if (activeSlide) activeSlide.classList.add('active');
  if (activeInd) activeInd.className = 'w-2 h-2 rounded-full bg-rose-500 inline-block transition-colors';
  currentSlide = index;
}

function nextSlide() {
  let next = currentSlide + 1;
  if (next > totalSlides) next = 1;
  showSlide(next);
}

function prevSlide() {
  let prev = currentSlide - 1;
  if (prev < 1) prev = totalSlides;
  showSlide(prev);
}

// Pricing plan selection
function selectPricingPlan(planNum) {
  const card1 = document.getElementById('pricing-card-1');
  const card2 = document.getElementById('pricing-card-2');
  const tag1 = document.getElementById('plan-tag-1');
  const tag2 = document.getElementById('plan-tag-2');
  const price1 = document.getElementById('plan-price-1');
  const price2 = document.getElementById('plan-price-2');
  const btn1 = document.getElementById('plan-btn-1');
  const btn2 = document.getElementById('plan-btn-2');

  if (!card1 || !card2) return;

  if (planNum === 1) {
    card1.classList.add('active-plan');
    if (tag1) { tag1.className = 'text-xs font-bold text-blue-700 uppercase transition-colors'; tag1.innerText = 'Step 1 (Selected)'; }
    if (price1) price1.className = 'text-2xl font-extrabold text-blue-700 my-2 transition-colors';
    if (btn1) btn1.className = 'btn-red w-full py-2.5 text-xs text-center font-bold rounded-lg cursor-pointer';

    card2.classList.remove('active-plan');
    if (tag2) { tag2.className = 'text-xs font-bold text-slate-500 uppercase transition-colors'; tag2.innerText = 'Step 2'; }
    if (price2) price2.className = 'text-2xl font-extrabold text-slate-900 my-2 transition-colors';
    if (btn2) btn2.className = 'btn-secondary w-full py-2.5 text-xs text-center font-bold rounded-lg cursor-pointer';
  } else {
    card2.classList.add('active-plan');
    if (tag2) { tag2.className = 'text-xs font-bold text-blue-700 uppercase transition-colors'; tag2.innerText = 'Step 2 (Selected)'; }
    if (price2) price2.className = 'text-2xl font-extrabold text-blue-700 my-2 transition-colors';
    if (btn2) btn2.className = 'btn-red w-full py-2.5 text-xs text-center font-bold rounded-lg cursor-pointer';

    card1.classList.remove('active-plan');
    if (tag1) { tag1.className = 'text-xs font-bold text-slate-500 uppercase transition-colors'; tag1.innerText = 'Step 1'; }
    if (price1) price1.className = 'text-2xl font-extrabold text-slate-900 my-2 transition-colors';
    if (btn1) btn1.className = 'btn-secondary w-full py-2.5 text-xs text-center font-bold rounded-lg cursor-pointer';
  }
}

// Hero banner slider
let currentHeroSlide = 1;
const totalHeroSlides = 3;
let heroAutoSlideInterval = null;
let heroProgressInterval = null;
let heroProgress = 0;
const slideDuration = 6000;
const progressStepTime = 50;

function showHeroSlide(index) {
  for (let i = 1; i <= totalHeroSlides; i++) {
    const slide = document.getElementById(`hero-slide-${i}`);
    const dot = document.getElementById(`hero-dot-${i}`);
    if (slide) slide.classList.remove('active');
    if (dot) dot.classList.remove('active');
  }

  const activeSlide = document.getElementById(`hero-slide-${index}`);
  const activeDot = document.getElementById(`hero-dot-${index}`);
  if (activeSlide) activeSlide.classList.add('active');
  if (activeDot) activeDot.classList.add('active');

  currentHeroSlide = index;
  resetHeroProgressBar();
}

function nextHeroSlide() {
  let next = currentHeroSlide + 1;
  if (next > totalHeroSlides) next = 1;
  showHeroSlide(next);
}

function prevHeroSlide() {
  let prev = currentHeroSlide - 1;
  if (prev < 1) prev = totalHeroSlides;
  showHeroSlide(prev);
}

function resetHeroProgressBar() {
  heroProgress = 0;
  const bar = document.getElementById('hero-progress-bar');
  if (bar) {
    bar.style.width = '0%';
  }
}

function startHeroSliderTimer() {
  stopHeroSliderTimer();
  resetHeroProgressBar();

  const heroSliderEl = document.getElementById('hero-main-slider');
  if (!heroSliderEl) return;

  heroProgressInterval = setInterval(() => {
    heroProgress += (progressStepTime / slideDuration) * 100;
    const bar = document.getElementById('hero-progress-bar');
    if (bar) {
      bar.style.width = `${Math.min(heroProgress, 100)}%`;
    }
  }, progressStepTime);

  heroAutoSlideInterval = setInterval(() => {
    nextHeroSlide();
  }, slideDuration);
}

function stopHeroSliderTimer() {
  if (heroAutoSlideInterval) clearInterval(heroAutoSlideInterval);
  if (heroProgressInterval) clearInterval(heroProgressInterval);
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  const heroSliderEl = document.getElementById('hero-main-slider');
  if (heroSliderEl) {
    let touchStartX = 0;
    let touchEndX = 0;

    heroSliderEl.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
      stopHeroSliderTimer();
    }, { passive: true });

    heroSliderEl.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      if (touchEndX < touchStartX - 50) {
        nextHeroSlide();
      } else if (touchEndX > touchStartX + 50) {
        prevHeroSlide();
      }
      startHeroSliderTimer();
    }, { passive: true });

    heroSliderEl.addEventListener('mouseenter', stopHeroSliderTimer);
    heroSliderEl.addEventListener('mouseleave', startHeroSliderTimer);

    startHeroSliderTimer();
  }

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (document.getElementById('hero-main-slider')) {
      if (e.key === 'ArrowLeft') {
        prevHeroSlide();
      } else if (e.key === 'ArrowRight') {
        nextHeroSlide();
      }
    }
  });
});
