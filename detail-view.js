
(function () {
  window.NGFinder = window.NGFinder || {};
  const NGFinder = window.NGFinder;

  function openDetail(key) {
    let inst = NGFinder.allInstitutions.find(i => NGFinder.getInstitutionKey(i) === key);
    if (!inst) inst = NGFinder.favourites.find(f => NGFinder.getInstitutionKey(f) === key);
    if (!inst) return;

    const fav = NGFinder.isFavourite(inst);

    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    const detailModal = document.getElementById('detailModal');
    if (!modalTitle || !modalBody || !detailModal) return;

    modalTitle.textContent = inst.name;
    modalBody.innerHTML = `
      <p><strong>State:</strong> ${inst['state-province'] || 'Not specified'}</p>
      <p><strong>Type:</strong> ${inst.type || 'N/A'}</p>
      <p><strong>Website:</strong> <a href="${inst.web_pages[0]}" target="_blank" class="text-green-600 underline">${inst.web_pages[0]}</a></p>
      <button id="modalFavBtn" class="mt-4 px-4 py-2 rounded-xl font-semibold ${fav ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-700'}">
        ${fav ? '♥ Remove from Favourites' : '♡ Add to Favourites'}
      </button>
    `;

    document.getElementById('modalFavBtn').addEventListener('click', function () {
      if (NGFinder.isFavourite(inst)) NGFinder.removeFromFavourites(inst);
      else NGFinder.addToFavourites(inst);

      NGFinder.applyFilter();

      const btn = document.getElementById('modalFavBtn');
      const nowFav = NGFinder.isFavourite(inst);
      btn.className = `mt-4 px-4 py-2 rounded-xl font-semibold ${nowFav ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-700'}`;
      btn.textContent = nowFav ? '♥ Remove from Favourites' : '♡ Add to Favourites';
    });

    detailModal.classList.remove('hidden');
  }

  function closeModal() {
    const detailModal = document.getElementById('detailModal');
    if (detailModal) detailModal.classList.add('hidden');
  }

  // Exposed globally because cards use inline onclick="window._openDetail(...)"
  window._openDetail = openDetail;

  // ---------- Expose to shared namespace ----------
  NGFinder.openDetail = openDetail;
  NGFinder.closeModal = closeModal;

  // Click outside the modal content closes it
  document.addEventListener('DOMContentLoaded', () => {
    const detailModal = document.getElementById('detailModal');
    if (!detailModal) return;

    detailModal.addEventListener('click', e => {
      if (e.target === detailModal) closeModal();
    });
  });
})();
