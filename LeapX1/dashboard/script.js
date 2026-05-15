// Simple dashboard interactivity and live values
const USERNAME = 'Alex'; // change as needed
const EXPIRY_ISO = '2026-10-15';
const RENEWAL_DATE = new Date(EXPIRY_ISO);

function el(id){return document.getElementById(id)}

function updateDateTime(){
  const now = new Date();
  el('datetime').textContent = now.toLocaleString();
}

function daysUntil(date){
  const now = new Date();
  const diff = date - now;
  return Math.ceil(diff / (1000*60*60*24));
}

function init(){
  // username
  el('username').textContent = USERNAME;

  // renewal and days left
  el('renewal-date').textContent = `Renews on: ${RENEWAL_DATE.toLocaleDateString(undefined,{year:'numeric', month:'short', day:'numeric'})}`;
  const days = daysUntil(RENEWAL_DATE);
  el('days-left').textContent = days > 0 ? `${days} days left` : 'Expired';

  const badge = el('plan-badge');
  if(days <= 14 && days > 0){
    badge.textContent = 'Expiring Soon';
    badge.classList.remove('badge-active');
    badge.classList.add('badge-warning');
  }

  // stats (sample values)
  el('total-sessions').textContent = 42;
  el('reward-points').textContent = '1,250';

  // buttons
  el('book-btn').addEventListener('click',()=>alert('Open booking flow'));
  el('upgrade-btn').addEventListener('click',()=>alert('Open upgrade modal'));
  el('refer-btn').addEventListener('click',()=>alert('Open referral share'));

  // live clock
  updateDateTime();
  setInterval(updateDateTime,1000);
}

document.addEventListener('DOMContentLoaded', init);
