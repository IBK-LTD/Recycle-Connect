/* ============================================================
   RecycleConnect — Order Detail page interactivity
   Countdown timer, button actions, toast notifications.
   Backend calls are stubbed with console.log + setTimeout for now —
   swap the marked sections for real fetch() calls once the API is ready.
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  startCountdown();
  bindCancelReservation();
  bindPayment();
  bindGetDirections();
  bindBookTransportation();
});

/* ---------------------------------------------------------
   Toast notifications (shared feedback for all actions)
--------------------------------------------------------- */
function showToast(message, type = 'info') {
  // type: 'success' | 'error' | 'info'
  let container = document.getElementById('toast-container');

  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.textContent = message;
  container.appendChild(toast);

  // Auto-remove after 3.5s
  setTimeout(() => {
    toast.classList.add('toast-hide');
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

/* ---------------------------------------------------------
   Countdown timer
--------------------------------------------------------- */
function startCountdown() {
  const el = document.getElementById('countdown-timer');
  if (!el) return;

  const expiresAt = new Date(el.dataset.expires).getTime();

  function render() {
    const now = Date.now();
    const diff = expiresAt - now;

    if (diff <= 0) {
      el.textContent = 'Expired';
      handleReservationExpired();
      clearInterval(timer);
      return;
    }

    const totalSeconds = Math.floor(diff / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    el.textContent = `${hours}h ${minutes}m ${seconds}s`;
  }

  render();
  const timer = setInterval(render, 1000);
}

function handleReservationExpired() {
  const card = document.getElementById('countdown-timer')?.closest('.countdown-card');
  card?.classList.add('countdown-card-expired');

  // Lock out actions once the reservation has expired
  const payBtn = document.getElementById('pay-btn');
  const cancelBtn = document.getElementById('cancel-btn');
  [payBtn, cancelBtn].forEach((btn) => {
    if (btn) {
      btn.disabled = true;
      btn.classList.add('btn-disabled');
    }
  });

  showToast('This reservation has expired.', 'error');
}

/* ---------------------------------------------------------
   Cancel Reservation
--------------------------------------------------------- */
function bindCancelReservation() {
  const btn = document.getElementById('cancel-btn');
  if (!btn) return;

  btn.addEventListener('click', () => {
    const confirmed = confirm('Are you sure you want to cancel this reservation? This cannot be undone.');
    if (!confirmed) return;

    setButtonLoading(btn, 'Cancelling...');

    // --- STUB: replace with real request once backend is ready ---
    // try {
    //   const res = await fetch(`/api/orders/EC-9921/cancel`, { method: 'POST' });
    //   if (!res.ok) throw new Error('Cancel failed');
    // } catch (err) { ... }
    console.log('[stub] Cancelling reservation EC-9921...');

    setTimeout(() => {
      resetButtonLoading(btn);
      showToast('Reservation cancelled successfully.', 'success');

      // Reflect cancellation in the UI
      btn.disabled = true;
      btn.classList.add('btn-disabled');
      document.getElementById('pay-btn')?.setAttribute('disabled', 'true');
      document.getElementById('pay-btn')?.classList.add('btn-disabled');

      const badge = document.querySelector('.badge-approved');
      if (badge) {
        badge.textContent = 'Cancelled';
        badge.className = 'badge badge-cancelled';
      }
    }, 1200);
  });
}

/* ---------------------------------------------------------
   Pay via Paystack
--------------------------------------------------------- */
function bindPayment() {
  const btn = document.getElementById('pay-btn');
  if (!btn) return;

  btn.addEventListener('click', () => {
    setButtonLoading(btn, 'Processing...');

    // --- STUB: replace with real Paystack init call ---
    // try {
    //   const res = await fetch('/api/orders/EC-9921/pay', { method: 'POST' });
    //   const data = await res.json();
    //   window.location.href = data.authorization_url;
    // } catch (err) { ... }
    console.log('[stub] Initiating Paystack payment for EC-9921...');

    setTimeout(() => {
      resetButtonLoading(btn);
      showToast('Redirecting to Paystack...', 'success');
    }, 1200);
  });
}

/* ---------------------------------------------------------
   Get Directions
--------------------------------------------------------- */
function bindGetDirections() {
  const btn = document.getElementById('directions-btn');
  if (!btn) return;

  btn.addEventListener('click', () => {
    const address = 'Plot 14, Industrial Way, Ikeja, Lagos State';
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    window.open(url, '_blank', 'noopener');
  });
}

/* ---------------------------------------------------------
   Book Transportation
--------------------------------------------------------- */
function bindBookTransportation() {
  const btn = document.getElementById('book-transport-btn');
  if (!btn) return;

  btn.addEventListener('click', () => {
    setButtonLoading(btn, 'Booking...');

    // --- STUB: replace with real logistics request ---
    console.log('[stub] Requesting transportation for order EC-9921...');

    setTimeout(() => {
      resetButtonLoading(btn);
      showToast('Transportation request sent. A partner will reach out shortly.', 'success');
    }, 1200);
  });
}

/* ---------------------------------------------------------
   Shared button loading-state helpers
--------------------------------------------------------- */
function setButtonLoading(btn, label) {
  btn.dataset.originalContent = btn.innerHTML;
  btn.disabled = true;
  btn.classList.add('btn-loading');
  btn.innerHTML = label;
}

function resetButtonLoading(btn) {
  btn.disabled = false;
  btn.classList.remove('btn-loading');
  if (btn.dataset.originalContent) {
    btn.innerHTML = btn.dataset.originalContent;
  }
}