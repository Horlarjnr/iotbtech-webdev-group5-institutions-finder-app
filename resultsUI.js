(function () {
  window.NGFinder = window.NGFinder || {};
  const NGFinder = window.NGFinder;

  function escapeHTML(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  function showLoading() {
    const status = document.getElementById('statusMessage');
    const grid = document.getElementById('institutionGrid');
    if (!status || !grid) return;
    status.classList.remove('hidden');
    status.innerHTML = '<div class="loader mx-auto"></div><p class="mt-2 text-gray-500">Loading institutions...</p>';
    grid.innerHTML = '';
  }

  function hideStatus() {
    const status = document.getElementById('statusMessage');
    if (status) status.classList.add('hidden');
  }

  function displayInstitutions(list) {
    const grid = document.getElementById('institutionGrid');
    const status = document.getElementById('statusMessage');
    const searchInput = document.getElementById('searchInput');
    if (!grid || !status) return;

    hideStatus();

    if (list.length === 0) {
      status.classList.remove('hidden');
      const showFavOnly = NGFinder.showFavOnly;
      const favourites = NGFinder.favourites || [];

      if (showFavOnly && favourites.length === 0) {
        status.innerHTML = '<p class="text-gray-500">No favourites saved yet.</p>';
      } else if (showFavOnly) {
        status.innerHTML = '<p class="text-gray-500">No favourites match the search.</p>';
      } else if (searchInput && searchInput.value.trim()) {
        status.innerHTML = '<p class="text-gray-500">No institutions found.</p>';
      } else {
        status.innerHTML = '<p class="text-gray-500">No institutions to display.</p>';
      }

      grid.innerHTML = '';
      return;
    }

    grid.innerHTML = list.map(inst => {
      const fav = NGFinder.isFavourite(inst);
      const typeBadge = inst.type
        ? `<span class="text-xs bg-gray-200 text-gray-600 px-2 py-0.5 rounded-full">${inst.type}</span>`
        : '';
      const heartChar = fav ? '♥' : '♡';
      const heartColor = fav ? 'text-red-500' : 'text-gray-300';
      const key = NGFinder.getInstitutionKey(inst);

      return `
        <div class="bg-white rounded-xl shadow-md hover:shadow-lg transition cursor-pointer overflow-hidden"
             data-key="${key}"
             onclick="window._openDetail('${key}')">
          <div class="bg-green-100 p-4 flex items-center justify-center">
            <span class="text-2xl font-bold text-green-700">${inst.name.charAt(0)}</span>
          </div>
          <div class="p-4">
            <h3 class="font-bold text-lg mb-1 truncate">${escapeHTML(inst.name)}</h3>
            <p class="text-sm text-gray-500">${inst['state-province'] || 'Nigeria'}</p>
            ${typeBadge}
            <button class="heart-btn mt-3 text-2xl ${heartColor} hover:text-red-500 transition"
                    data-key="${key}">${heartChar}</button>
          </div>
        </div>
      `;
    }).join('');
  }

  // ---------- Expose to shared namespace ----------
  NGFinder.showLoading = showLoading;
  NGFinder.hideStatus = hideStatus;
  NGFinder.displayInstitutions = displayInstitutions;

  // Event delegation for heart clicks inside the grid
  document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('institutionGrid');
    if (!grid) return;

    grid.addEventListener('click', function (e) {
      const heartBtn = e.target.closest('.heart-btn');
      if (!heartBtn) return;
      e.stopPropagation();

      const key = heartBtn.getAttribute('data-key');
      let inst = NGFinder.allInstitutions.find(i => NGFinder.getInstitutionKey(i) === key);
      if (!inst) inst = NGFinder.favourites.find(f => NGFinder.getInstitutionKey(f) === key);
      if (!inst) return;

      if (NGFinder.isFavourite(inst)) NGFinder.removeFromFavourites(inst);
      else NGFinder.addToFavourites(inst);

      NGFinder.applyFilter();
    });
  });
})();
