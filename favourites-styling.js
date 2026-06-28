

(function () {
  window.NGFinder = window.NGFinder || {};
  const NGFinder = window.NGFinder;

  // ---------- Shared state ----------
  NGFinder.favourites = JSON.parse(localStorage.getItem('ngFavs') || '[]');
  NGFinder.showFavOnly = false;

  function isFavourite(inst) {
    const key = NGFinder.getInstitutionKey(inst);
    return NGFinder.favourites.some(fav => NGFinder.getInstitutionKey(fav) === key);
  }

  function saveFavourites() {
    localStorage.setItem('ngFavs', JSON.stringify(NGFinder.favourites));
  }

  function addToFavourites(inst) {
    if (!isFavourite(inst)) {
      NGFinder.favourites.push(inst);
      saveFavourites();
    }
  }

  function removeFromFavourites(inst) {
    NGFinder.favourites = NGFinder.favourites.filter(
      fav => NGFinder.getInstitutionKey(fav) !== NGFinder.getInstitutionKey(inst)
    );
    saveFavourites();
  }

  // ---------- Expose to shared namespace ----------
  NGFinder.isFavourite = isFavourite;
  NGFinder.saveFavourites = saveFavourites;
  NGFinder.addToFavourites = addToFavourites;
  NGFinder.removeFromFavourites = removeFromFavourites;

  // ---------- Favourites-only toggle button ----------
  document.addEventListener('DOMContentLoaded', () => {
    const favToggleBtn = document.getElementById('favToggleBtn');
    if (!favToggleBtn) return;

    favToggleBtn.addEventListener('click', () => {
      NGFinder.showFavOnly = !NGFinder.showFavOnly;
      favToggleBtn.textContent = NGFinder.showFavOnly ? '♡ All Institutions' : '♥ Favourites';
      NGFinder.applyFilter();
    });
  });
})();
