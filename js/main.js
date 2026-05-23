/* ============================================
   MAIN JS - Login + Dashboard
   ============================================ */

(function () {
  'use strict';

  /* ----- LOGIN ----- */
  var loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var user = document.getElementById('user');
      var pass = document.getElementById('pass');
      var btn = document.getElementById('loginBtn');
      var err = document.getElementById('errorMsg');

      if (!user.value || !pass.value) {
        err.textContent = 'Completa todos los campos';
        err.style.display = 'block';
        return;
      }

      err.style.display = 'none';
      btn.textContent = 'Ingresando...';
      btn.disabled = true;

      setTimeout(function () {
        if (user.value === 'admin' && pass.value === '123456') {
          localStorage.setItem('campus_user', user.value);
          window.location.href = 'dashboard.html';
        } else if (user.value && pass.value) {
          localStorage.setItem('campus_user', user.value);
          window.location.href = 'dashboard.html';
        } else {
          err.textContent = 'Usuario o contraseña incorrectos';
          err.style.display = 'block';
          btn.textContent = 'Ingresar';
          btn.disabled = false;
        }
      }, 800);
    });
  }

  /* ----- DASHBOARD ----- */
  var userNameEl = document.getElementById('userName');
  var avatarEl = document.getElementById('avatarLetter');

  if (userNameEl) {
    var user = localStorage.getItem('campus_user') || 'Wendolyn Hasbun';
    userNameEl.textContent = user;

    if (avatarEl) {
      avatarEl.textContent = user.charAt(0).toUpperCase();
    }
  }

  /* ----- Dropdown user ----- */
  var userProf = document.getElementById('userProf');
  var userDropdown = document.getElementById('userDropdown');
  if (userProf && userDropdown) {
    userProf.addEventListener('click', function (e) {
      e.stopPropagation();
      userDropdown.classList.toggle('open');
    });
    document.addEventListener('click', function () {
      userDropdown.classList.remove('open');
    });
    userDropdown.addEventListener('click', function (e) {
      e.stopPropagation();
    });
  }

  /* ----- Hamburger menu ----- */
  var hamburger = document.getElementById('hamburger');
  var sidebar = document.getElementById('sidebar');
  var overlay = document.getElementById('overlay');
  var sidebarClose = document.getElementById('sidebarClose');

  function openSidebar() {
    sidebar.classList.add('open');
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeSidebar() {
    sidebar.classList.remove('open');
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (hamburger) { hamburger.addEventListener('click', openSidebar); }
  if (sidebarClose) { sidebarClose.addEventListener('click', closeSidebar); }
  if (overlay) { overlay.addEventListener('click', closeSidebar); }

  var navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(function (item) {
    item.addEventListener('click', function () {
      closeSidebar();
      var href = item.getAttribute('data-href');
      if (href) {
        window.location.href = href;
      }
    });
  });

  var subItems = document.querySelectorAll('.nav-sub-item');
  subItems.forEach(function (item) {
    item.addEventListener('click', function () {
      closeSidebar();
      var href = item.getAttribute('data-href');
      if (href) {
        window.location.href = href;
      }
    });
  });

  /* ----- Biblioteca progress bar ----- */
  var progressBar = document.getElementById('progressBar');
  var redirectDone = document.getElementById('redirectDone');
  if (progressBar) {
    progressBar.classList.add('animated');
    progressBar.addEventListener('animationend', function () {
      progressBar.style.width = '100%';
      if (redirectDone) {
        redirectDone.classList.add('show');
      }
    });
  }

  /* ----- Pagos tab toggle ----- */
  var payTabs = document.querySelectorAll('.pay-tab');
  if (payTabs.length) {
    payTabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        payTabs.forEach(function (t) { t.classList.remove('active'); });
        tab.classList.add('active');

        var target = tab.getAttribute('data-tab');
        var pendientes = document.getElementById('payPendientes');
        var pagados = document.getElementById('payPagados');
        var summaryPanel = document.getElementById('paySummaryPanel');

        if (target === 'pagados') {
          if (pendientes) pendientes.classList.add('hidden');
          if (pagados) pagados.classList.remove('hidden');
          if (summaryPanel) summaryPanel.style.display = 'none';
        } else {
          if (pendientes) pendientes.classList.remove('hidden');
          if (pagados) pagados.classList.add('hidden');
          if (summaryPanel) summaryPanel.style.display = '';
        }
      });
    });
  }

  /* ----- Modal cronograma ----- */
  var btnCrono = document.getElementById('btnCronograma');
  var modalOverlay = document.getElementById('modalOverlay');
  var modalCrono = document.getElementById('modalCronograma');
  var modalClose = document.getElementById('modalClose');

  function openModal() {
    if (modalOverlay) modalOverlay.classList.add('open');
    if (modalCrono) modalCrono.classList.add('open');
  }

  function closeModal() {
    if (modalOverlay) modalOverlay.classList.remove('open');
    if (modalCrono) modalCrono.classList.remove('open');
  }

  if (btnCrono) {
    btnCrono.addEventListener('click', function (e) {
      e.preventDefault();
      openModal();
    });
  }

  if (modalClose) {
    modalClose.addEventListener('click', closeModal);
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', closeModal);
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeModal();
  });

  /* ----- Cerrar sesión ----- */
  var logoutBtn = document.getElementById('logoutBtn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', function (e) {
      e.preventDefault();
      localStorage.removeItem('campus_user');
      window.location.href = 'index.html';
    });
  }

  /* ----- Global icon handlers ----- */
  document.querySelectorAll('.help-icon').forEach(function (el) {
    el.addEventListener('click', function () {
      alert('Centro de ayuda: consulta nuestras guías o escribe a soporte@eva.edu.pe');
    });
  });

  var helpSidebar = document.getElementById('helpSidebar');
  if (helpSidebar) {
    helpSidebar.addEventListener('click', function () {
      alert('Centro de ayuda: consulta nuestras guías o escribe a soporte@eva.edu.pe');
    });
  }

  /* Bell / Mail icons */
  var topIcons = document.querySelectorAll('.top-actions > .btn-icon');
  topIcons.forEach(function (el) {
    if (el.classList.contains('help-icon')) return;
    el.addEventListener('click', function () {
      alert('No tienes notificaciones nuevas.');
    });
  });

  /* ----- Beneficios accordion toggle ----- */
  var benefToggle = document.getElementById('beneficiosToggle');
  if (benefToggle) {
    var benefArrow = benefToggle.querySelector('.arrow');
    var benefSub = benefToggle.nextElementSibling;
    
    /* Open submenu on pages under Beneficios */
    if (benefSub && benefSub.classList.contains('nav-sub')) {
      var hasActive = benefSub.querySelector('.nav-sub-item.active');
      if (hasActive) {
        benefSub.classList.add('open');
        if (benefArrow) benefArrow.classList.add('open');
      }
    }
    
    benefToggle.addEventListener('click', function (e) {
      e.stopPropagation();
      if (benefSub && benefSub.classList.contains('nav-sub')) {
        benefSub.classList.toggle('open');
        if (benefArrow) benefArrow.classList.toggle('open');
      }
    });
  }

})();
