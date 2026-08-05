fetch('../components/sidebar.html')
  .then(res => res.text())
  .then(html => {
    document.getElementById('sidebar-placeholder').innerHTML = html;
  });

fetch('../components/topbar.html')
  .then(res => res.text())
  .then(html => {
    document.getElementById('topbar-placeholder').innerHTML = html;

    // Now this runs AFTER the topbar HTML actually exists in the DOM
    const pageTitle = document.body.getAttribute('data-page-title');
    const heading = document.querySelector('.page-heading');
    if (pageTitle && heading) {
      heading.textContent = pageTitle;
    }
  })
  .catch(err => console.error(err));