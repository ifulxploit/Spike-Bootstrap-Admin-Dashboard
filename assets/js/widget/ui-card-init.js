// ==============================================================
// Collapsable cards
// ==============================================================
$('a[data-action="collapse"]').on("click", function (e) {
  e.preventDefault();
  $(this)
    .closest(".card")
    .find('[data-action="collapse"] i')
    .toggleClass("ti-minus ti-plus");
  $(this).closest(".card").children(".card-body").collapse("toggle");
});
// Toggle fullscreen
$('a[data-action="expand"]').on("click", function (e) {
  e.preventDefault();
  $(this)
    .closest(".card")
    .find('[data-action="expand"] i')
    .toggleClass("ti-arrows-maximize ti-arrows-maximize");
  $(this).closest(".card").toggleClass("card-fullscreen");
});
// Close Card
$('a[data-action="close"]').on("click", function () {
  $(this).closest(".card").removeClass().slideUp("fast");
});
