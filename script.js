/**
 * Dubai Fix Appliances - Interactive UI Script
 */

document.addEventListener('DOMContentLoaded', () => {
  // Elements
  const bookingModal = document.getElementById('bookingModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const openContactBtn = document.getElementById('openContactBtn');
  const scheduleServiceBtn = document.getElementById('scheduleServiceBtn');
  const navContactLink = document.getElementById('navContactLink');
  const heroGetStartedBtn = document.getElementById('heroGetStartedBtn');
  const emergencyLink = document.getElementById('emergencyLink');
  const bookingForm = document.getElementById('bookingForm');
  const applianceTypeSelect = document.getElementById('applianceType');
  const urgencySelect = document.getElementById('urgency');
  const repairDateInput = document.getElementById('repairDate');
  const toastMessage = document.getElementById('toastMessage');
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const servicesDropdown = document.getElementById('servicesDropdown');
  const servicesDropdownBtn = document.getElementById('servicesDropdownBtn');
  const bookTriggers = document.querySelectorAll('.book-trigger');

  // --- Dark Mode / Theme System ---
  function applyTheme(isDark) {
    const iconMoon = themeToggleBtn ? themeToggleBtn.querySelector('.icon-moon') : null;
    const iconSun = themeToggleBtn ? themeToggleBtn.querySelector('.icon-sun') : null;
    
    if (isDark) {
      document.body.classList.add('dark-theme');
      if (iconMoon) iconMoon.style.display = 'none';
      if (iconSun) iconSun.style.display = 'block';
      if (themeToggleBtn) themeToggleBtn.setAttribute('title', 'Switch to light mode');
    } else {
      document.body.classList.remove('dark-theme');
      if (iconMoon) iconMoon.style.display = 'block';
      if (iconSun) iconSun.style.display = 'none';
      if (themeToggleBtn) themeToggleBtn.setAttribute('title', 'Switch to dark mode');
    }
  }

  // Load saved theme preference
  const savedTheme = localStorage.getItem('dubaifix-theme') || localStorage.getItem('apexfix-theme');
  if (savedTheme === 'dark') {
    applyTheme(true);
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const isCurrentlyDark = document.body.classList.contains('dark-theme');
      const newDark = !isCurrentlyDark;
      applyTheme(newDark);
      localStorage.setItem('dubaifix-theme', newDark ? 'dark' : 'light');
      localStorage.setItem('apexfix-theme', newDark ? 'dark' : 'light');
    });
  }

  // Desktop Hover Stabilization & Mobile / Touch Services Dropdown Toggle
  if (servicesDropdown) {
    let dropdownHoverTimer = null;

    // Desktop hover stabilization: keeps dropdown stay open when cursor moves to menu
    servicesDropdown.addEventListener('mouseenter', () => {
      if (window.innerWidth > 1080) {
        if (dropdownHoverTimer) {
          clearTimeout(dropdownHoverTimer);
          dropdownHoverTimer = null;
        }
        servicesDropdown.classList.add('hover-active');
        if (servicesDropdownBtn) {
          servicesDropdownBtn.setAttribute('aria-expanded', 'true');
        }
      }
    });

    servicesDropdown.addEventListener('mouseleave', () => {
      if (window.innerWidth > 1080) {
        dropdownHoverTimer = setTimeout(() => {
          servicesDropdown.classList.remove('hover-active');
          if (servicesDropdownBtn) {
            servicesDropdownBtn.setAttribute('aria-expanded', 'false');
          }
        }, 180); // 180ms buffer allows relaxed diagonal mouse movement
      }
    });

    // Mobile / Touch click toggle
    if (servicesDropdownBtn) {
      servicesDropdownBtn.addEventListener('click', (e) => {
        if (window.innerWidth <= 1080) {
          e.preventDefault();
          const isOpen = servicesDropdown.classList.toggle('open');
          servicesDropdownBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        }
      });
    }
  }

  // Set default date to today
  if (repairDateInput) {
    const today = new Date().toISOString().split('T')[0];
    repairDateInput.value = today;
    repairDateInput.min = today;
  }

  // Direct Action Handlers (Zero Popups - Instant Call & WhatsApp Dispatch)
  function openDirectWhatsApp(serviceName = null) {
    const service = serviceName || 'General Appliance Repair';
    const msg = encodeURIComponent(`Hello Dubai Fix Appliances, I want to book an urgent service for ${service}.`);
    window.open(`https://wa.me/923143110259?text=${msg}`, '_blank');
  }

  function openDirectCall() {
    window.location.href = 'tel:+923143110259';
  }

  // Legacy openModal safety redirect (ensures zero popups ever open)
  function openModal(preselectedService = null, isEmergency = false) {
    if (isEmergency) {
      openDirectCall();
    } else {
      openDirectWhatsApp(preselectedService);
    }
  }

  // Close Modal helper
  function closeModal() {
    if (bookingModal) {
      bookingModal.classList.remove('open');
      bookingModal.style.display = 'none';
    }
    document.body.style.overflow = '';
  }

  // Event Listeners for Direct Actions (Zero Popups)
  if (scheduleServiceBtn) {
    scheduleServiceBtn.addEventListener('click', (e) => {
      if (scheduleServiceBtn.tagName === 'A' && scheduleServiceBtn.getAttribute('href')?.startsWith('tel:')) {
        return;
      }
      e.preventDefault();
      openDirectCall();
    });
  }

  if (navContactLink) {
    navContactLink.addEventListener('click', (e) => {
      const href = navContactLink.getAttribute('href');
      if (href && (href === 'contact.html' || href.endsWith('/contact.html') || href.startsWith('#'))) {
        return;
      }
    });
  }

  if (openContactBtn) {
    openContactBtn.addEventListener('click', (e) => {
      e.preventDefault();
      openDirectCall();
    });
  }

  const heroBookBtn = document.getElementById('heroBookBtn') || document.getElementById('heroGetStartedBtn');
  if (heroBookBtn) {
    heroBookBtn.addEventListener('click', (e) => {
      if (heroBookBtn.tagName === 'A' && heroBookBtn.getAttribute('href')?.startsWith('https://wa.me')) {
        return;
      }
      e.preventDefault();
      openDirectWhatsApp('Appliance Repair');
    });
  }

  if (emergencyLink) {
    emergencyLink.addEventListener('click', (e) => {
      if (emergencyLink.tagName === 'A' && emergencyLink.getAttribute('href')?.startsWith('tel:')) {
        return;
      }
      e.preventDefault();
      openDirectCall();
    });
  }

  bookTriggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      if (trigger.tagName === 'A') {
        const href = trigger.getAttribute('href');
        if (href && (href.startsWith('tel:') || href.startsWith('https://wa.me') || href.startsWith('mailto:') || (href !== '#' && !href.startsWith('javascript:')))) {
          return;
        }
      }
      e.preventDefault();
      const serviceName = trigger.getAttribute('data-service');
      openDirectWhatsApp(serviceName);
    });
  });

  // Permanently close and neutralize any modal backdrop on load
  if (bookingModal) {
    bookingModal.classList.remove('open');
    bookingModal.style.display = 'none';
  }

  // Form Submit & Toast
  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const appliance = applianceTypeSelect.value;
      const name = document.getElementById('fullName').value;
      
      closeModal();
      showToast(`Thank you ${name}! Repair dispatch for "${appliance}" confirmed.`);
      bookingForm.reset();
      
      if (repairDateInput) {
        repairDateInput.value = new Date().toISOString().split('T')[0];
      }
    });
  }

  // Toast Functionality
  function showToast(message) {
    if (!toastMessage) return;
    
    if (message) {
      const desc = toastMessage.querySelector('.toast-desc');
      if (desc) desc.textContent = message;
    }

    toastMessage.classList.add('show');
    setTimeout(() => {
      toastMessage.classList.remove('show');
    }, 4500);
  }

  // Mobile Navigation Toggle
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = navMenu.classList.toggle('open');
      mobileToggle.classList.toggle('active', isOpen);
      mobileToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Close mobile menu on regular link click (exclude dropdown toggle)
    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', (e) => {
        if (!link.classList.contains('nav-dropdown-toggle')) {
          navMenu.classList.remove('open');
          mobileToggle.classList.remove('active');
          mobileToggle.setAttribute('aria-expanded', 'false');
        }
      });
    });

    // Close mobile menu when clicking any dropdown item
    navMenu.querySelectorAll('.dropdown-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        mobileToggle.classList.remove('active');
        mobileToggle.setAttribute('aria-expanded', 'false');
        if (servicesDropdown) {
          servicesDropdown.classList.remove('open');
        }
      });
    });

    // Close mobile menu when tapping outside
    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !mobileToggle.contains(e.target) && navMenu.classList.contains('open')) {
        navMenu.classList.remove('open');
        mobileToggle.classList.remove('active');
        mobileToggle.setAttribute('aria-expanded', 'false');
      }
    });

    // Reset mobile menu on screen resize to desktop
    window.addEventListener('resize', () => {
      if (window.innerWidth > 1080 && navMenu.classList.contains('open')) {
        navMenu.classList.remove('open');
        mobileToggle.classList.remove('active');
        mobileToggle.setAttribute('aria-expanded', 'false');
        if (servicesDropdown) {
          servicesDropdown.classList.remove('open');
        }
      }
    });
  }

  // Interactive Lens Indicator Click
  const lensIndicator = document.querySelector('.lens-indicator');
  if (lensIndicator) {
    lensIndicator.addEventListener('click', () => {
      showToast('Certified Master Technician Network: Active & Available 24/7.');
    });
  }

  // --- Stories Carousel Controller ---
  const storiesTrack = document.getElementById('storiesTrack');
  const storiesDeckWrapper = document.getElementById('storiesDeckWrapper');
  const storiesPrevBtn = document.getElementById('storiesPrevBtn');
  const storiesNextBtn = document.getElementById('storiesNextBtn');
  const storiesPagination = document.getElementById('storiesPagination');
  const paginationBars = storiesPagination ? storiesPagination.querySelectorAll('.pagination-bar') : [];
  const allStoryCards = storiesTrack ? storiesTrack.querySelectorAll('.story-card') : [];

  let currentStoryPage = 0;
  let currentStoryCardIndex = 0;
  const maxStoryPages = 2;

  function scrollToCardIndex(index, smooth = true) {
    if (!storiesDeckWrapper || allStoryCards.length === 0) return;
    const targetIdx = Math.max(0, Math.min(index, allStoryCards.length - 1));
    currentStoryCardIndex = targetIdx;
    const targetCard = allStoryCards[targetIdx];

    try {
      targetCard.scrollIntoView({
        behavior: smooth ? 'smooth' : 'auto',
        inline: 'center',
        block: 'nearest'
      });
    } catch (e) {
      const wrapperRect = storiesDeckWrapper.getBoundingClientRect();
      const cardRect = targetCard.getBoundingClientRect();
      const scrollOffset = (cardRect.left - wrapperRect.left) - (wrapperRect.width - cardRect.width) / 2;
      storiesDeckWrapper.scrollBy({
        left: scrollOffset,
        behavior: smooth ? 'smooth' : 'auto'
      });
    }

    allStoryCards.forEach((c, i) => {
      c.classList.toggle('is-active', i === targetIdx);
    });

    const page = targetIdx < 4 ? 0 : 1;
    currentStoryPage = page;
    paginationBars.forEach((bar, idx) => {
      bar.classList.toggle('active', idx === page);
    });
  }

  function updateStoryCarousel(pageIndex) {
    currentStoryPage = Math.max(0, Math.min(pageIndex, maxStoryPages - 1));

    if (window.innerWidth > 1080) {
      if (storiesTrack) {
        storiesTrack.style.transform = `translateX(-${currentStoryPage * 50}%)`;
      }
      paginationBars.forEach((bar, idx) => {
        bar.classList.toggle('active', idx === currentStoryPage);
      });
    } else {
      scrollToCardIndex(currentStoryPage * 4, true);
    }
  }

  if (storiesPrevBtn) {
    storiesPrevBtn.addEventListener('click', () => {
      if (window.innerWidth > 1080) {
        if (currentStoryPage > 0) {
          updateStoryCarousel(currentStoryPage - 1);
        } else {
          updateStoryCarousel(maxStoryPages - 1);
        }
      } else {
        const prevIdx = currentStoryCardIndex > 0 ? currentStoryCardIndex - 1 : allStoryCards.length - 1;
        scrollToCardIndex(prevIdx, true);
      }
    });
  }

  if (storiesNextBtn) {
    storiesNextBtn.addEventListener('click', () => {
      if (window.innerWidth > 1080) {
        if (currentStoryPage < maxStoryPages - 1) {
          updateStoryCarousel(currentStoryPage + 1);
        } else {
          updateStoryCarousel(0);
        }
      } else {
        const nextIdx = currentStoryCardIndex < allStoryCards.length - 1 ? currentStoryCardIndex + 1 : 0;
        scrollToCardIndex(nextIdx, true);
      }
    });
  }

  paginationBars.forEach((bar) => {
    bar.addEventListener('click', () => {
      const page = parseInt(bar.getAttribute('data-page'), 10);
      if (!isNaN(page)) {
        updateStoryCarousel(page);
      }
    });
  });

  allStoryCards.forEach((card, idx) => {
    card.addEventListener('click', () => {
      if (window.innerWidth <= 1080) {
        scrollToCardIndex(idx, true);
      }
    });
  });

  // Mobile scroll detection for centered card and pagination active state
  if (storiesDeckWrapper) {
    let scrollTimeout;
    storiesDeckWrapper.addEventListener('scroll', () => {
      if (window.innerWidth > 1080) return;
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        const wrapperRect = storiesDeckWrapper.getBoundingClientRect();
        const wrapperCenter = wrapperRect.left + wrapperRect.width / 2;
        let closestIdx = 0;
        let minDiff = Infinity;

        allStoryCards.forEach((card, idx) => {
          const cardRect = card.getBoundingClientRect();
          const cardCenter = cardRect.left + cardRect.width / 2;
          const diff = Math.abs(wrapperCenter - cardCenter);
          if (diff < minDiff) {
            minDiff = diff;
            closestIdx = idx;
          }
        });

        if (closestIdx !== currentStoryCardIndex) {
          currentStoryCardIndex = closestIdx;
          allStoryCards.forEach((c, i) => {
            c.classList.toggle('is-active', i === closestIdx);
          });

          const targetPage = closestIdx < 4 ? 0 : 1;
          if (targetPage !== currentStoryPage) {
            currentStoryPage = targetPage;
            paginationBars.forEach((bar, idx) => {
              bar.classList.toggle('active', idx === currentStoryPage);
            });
          }
        }
      }, 40);
    }, { passive: true });
  }

  // Initial state: ensure first card is active
  if (allStoryCards.length > 0) {
    allStoryCards[0].classList.add('is-active');
  }

  window.addEventListener('resize', () => {
    if (window.innerWidth <= 1080) {
      if (storiesTrack) storiesTrack.style.transform = 'none';
    } else {
      if (storiesTrack) storiesTrack.style.transform = `translateX(-${currentStoryPage * 50}%)`;
      allStoryCards.forEach(c => c.classList.remove('is-active'));
    }
  });

  // --- Service Reviews Carousel (Mobile Touch & Arrow Navigation) ---
  const serviceReviewsGrid = document.querySelector('.service-reviews-grid');
  const servicePrevBtn = document.querySelector('.service-reviews-prev-btn');
  const serviceNextBtn = document.querySelector('.service-reviews-next-btn');

  if (serviceReviewsGrid) {
    const serviceCards = Array.from(serviceReviewsGrid.querySelectorAll('.service-review-card'));
    let currentServiceIndex = 0;

    function scrollToServiceCard(index, smooth = true) {
      if (serviceCards.length === 0) return;
      const targetIdx = (index + serviceCards.length) % serviceCards.length;
      currentServiceIndex = targetIdx;
      const targetCard = serviceCards[targetIdx];

      try {
        targetCard.scrollIntoView({
          behavior: smooth ? 'smooth' : 'auto',
          inline: 'center',
          block: 'nearest'
        });
      } catch (e) {
        const gridRect = serviceReviewsGrid.getBoundingClientRect();
        const cardRect = targetCard.getBoundingClientRect();
        const scrollOffset = (cardRect.left - gridRect.left) - (gridRect.width - cardRect.width) / 2;
        serviceReviewsGrid.scrollBy({
          left: scrollOffset,
          behavior: smooth ? 'smooth' : 'auto'
        });
      }
    }

    if (servicePrevBtn) {
      servicePrevBtn.addEventListener('click', (e) => {
        e.preventDefault();
        scrollToServiceCard(currentServiceIndex - 1, true);
      });
    }

    if (serviceNextBtn) {
      serviceNextBtn.addEventListener('click', (e) => {
        e.preventDefault();
        scrollToServiceCard(currentServiceIndex + 1, true);
      });
    }

    serviceCards.forEach((card, idx) => {
      card.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
          scrollToServiceCard(idx, true);
        }
      });
    });

    let serviceScrollTimeout;
    serviceReviewsGrid.addEventListener('scroll', () => {
      if (window.innerWidth > 768) return;
      clearTimeout(serviceScrollTimeout);
      serviceScrollTimeout = setTimeout(() => {
        const gridRect = serviceReviewsGrid.getBoundingClientRect();
        const gridCenter = gridRect.left + gridRect.width / 2;
        let closestIdx = 0;
        let minDiff = Infinity;

        serviceCards.forEach((card, idx) => {
          const cardRect = card.getBoundingClientRect();
          const cardCenter = cardRect.left + cardRect.width / 2;
          const diff = Math.abs(gridCenter - cardCenter);
          if (diff < minDiff) {
            minDiff = diff;
            closestIdx = idx;
          }
        });

        currentServiceIndex = closestIdx;
      }, 50);
    }, { passive: true });
  }

  // --- Areas We Proudly Serve Across Dubai Interactive Filter & Booking ---
  const areaSearchInput = document.getElementById('areaSearchInput');
  const searchClearBtn = document.getElementById('searchClearBtn');
  const areasCountText = document.getElementById('areasCountText');
  const areasDistrictsGrid = document.getElementById('areasDistrictsGrid');
  const areasEmptyState = document.getElementById('areasEmptyState');
  const areaCards = document.querySelectorAll('.area-card');
  const dubaiMapHub = document.querySelector('.dubai-map-hub');

  if (areaSearchInput && areaCards.length > 0) {
    const totalDistricts = areaCards.length;

    areaSearchInput.addEventListener('input', () => {
      const query = areaSearchInput.value.trim().toLowerCase();
      let matchCount = 0;

      if (searchClearBtn) {
        searchClearBtn.style.display = query.length > 0 ? 'inline-flex' : 'none';
      }

      areaCards.forEach(card => {
        const districtName = (card.getAttribute('data-district') || '').toLowerCase();
        if (query === '' || districtName.includes(query)) {
          card.classList.remove('card-hidden');
          matchCount++;
        } else {
          card.classList.add('card-hidden');
        }
      });

      // Update counter text
      if (areasCountText) {
        if (query === '' || matchCount === totalDistricts) {
          areasCountText.textContent = `${totalDistricts} Key Districts`;
        } else if (matchCount === 1) {
          areasCountText.textContent = '1 District Found';
        } else {
          areasCountText.textContent = `${matchCount} Districts Found`;
        }
      }

      // Toggle empty state
      if (areasEmptyState && areasDistrictsGrid) {
        if (matchCount === 0) {
          areasEmptyState.style.display = 'block';
          areasDistrictsGrid.style.display = 'none';
        } else {
          areasEmptyState.style.display = 'none';
          areasDistrictsGrid.style.display = 'grid';
        }
      }
    });

    if (searchClearBtn) {
      searchClearBtn.addEventListener('click', () => {
        areaSearchInput.value = '';
        areaSearchInput.dispatchEvent(new Event('input'));
        areaSearchInput.focus();
      });
    }
  }

  // Interactive Dubai Dispatch Hub Pinpoint
  if (dubaiMapHub) {
    dubaiMapHub.addEventListener('click', () => {
      showToast('🚀 Dubai Dispatch Hub: 14+ Mobile Vans actively servicing all districts.');
    });
  }

  // --- Brand Category Filtering ---
  const brandFilterPills = document.querySelectorAll('.brand-filter-pill');
  const brandCards = document.querySelectorAll('.brand-curved-card');
  const brandsCategoryHint = document.getElementById('brandsCategoryHint');

  const categoryHints = {
    'all': 'Showing all <strong>20 certified brands</strong> with same-day technician dispatch across Dubai.',
    'kitchen': 'Showing <strong>10 certified kitchen & cooking brands</strong> for Ovens, Cooktops, Ranges & Dishwashers.',
    'laundry': 'Showing <strong>9 master laundry brands</strong> for Washing Machines, Dryers & Laundry Centers.',
    'cooling': 'Showing <strong>9 refrigeration specialist brands</strong> for French-Door, Side-by-Side & Deep Freezers.',
    'ac': 'Showing <strong>7 authorized AC brands</strong> for Split AC, Central HVAC, Chillers & VRV Systems.'
  };

  if (brandFilterPills.length > 0 && brandCards.length > 0) {
    brandFilterPills.forEach(pill => {
      pill.addEventListener('click', () => {
        const filter = pill.getAttribute('data-filter');

        // Update active class & ARIA
        brandFilterPills.forEach(p => {
          p.classList.remove('active');
          p.setAttribute('aria-selected', 'false');
        });
        pill.classList.add('active');
        pill.setAttribute('aria-selected', 'true');

        // Update hint text
        if (brandsCategoryHint && categoryHints[filter]) {
          brandsCategoryHint.style.opacity = '0';
          setTimeout(() => {
            brandsCategoryHint.innerHTML = categoryHints[filter];
            brandsCategoryHint.style.opacity = '1';
          }, 150);
        }

        // Filter cards smoothly
        brandCards.forEach(card => {
          const categories = card.getAttribute('data-categories') || '';
          const matches = (filter === 'all') || categories.split(' ').includes(filter);

          if (matches) {
            card.classList.remove('card-hidden');
            card.style.display = 'flex';
            requestAnimationFrame(() => {
              card.style.opacity = '1';
              card.style.transform = 'translateY(0) scale(1)';
            });
          } else {
            card.style.opacity = '0';
            card.style.transform = 'translateY(8px) scale(0.96)';
            card.classList.add('card-hidden');
          }
        });
      });
    });
  }

  // --- FAQ Accordion Logic ---
  const faqCards = document.querySelectorAll('.faq-card');
  const faqExpandAllBtn = document.getElementById('faqExpandAllBtn');

  if (faqCards.length > 0) {
    faqCards.forEach(card => {
      const header = card.querySelector('.faq-card-header');
      if (!header) return;

      header.addEventListener('click', () => {
        const isCurrentActive = card.classList.contains('active');

        // Close other open cards for elegant single-open accordion behavior
        faqCards.forEach(c => {
          if (c !== card && c.classList.contains('active')) {
            c.classList.remove('active');
            const h = c.querySelector('.faq-card-header');
            if (h) h.setAttribute('aria-expanded', 'false');
          }
        });

        // Toggle clicked card
        if (isCurrentActive) {
          card.classList.remove('active');
          header.setAttribute('aria-expanded', 'false');
        } else {
          card.classList.add('active');
          header.setAttribute('aria-expanded', 'true');
        }
      });
    });
  }

  // "View All FAQ" button expands or contracts all cards
  if (faqExpandAllBtn && faqCards.length > 0) {
    faqExpandAllBtn.addEventListener('click', () => {
      const allActive = Array.from(faqCards).every(c => c.classList.contains('active'));
      faqCards.forEach(card => {
        const header = card.querySelector('.faq-card-header');
        if (allActive) {
          card.classList.remove('active');
          if (header) header.setAttribute('aria-expanded', 'false');
        } else {
          card.classList.add('active');
          if (header) header.setAttribute('aria-expanded', 'true');
        }
      });

      const btnSpan = faqExpandAllBtn.querySelector('span');
      if (btnSpan) {
        btnSpan.textContent = allActive ? 'View All FAQ' : 'Collapse All FAQ';
      }
    });
  }

  // --- Sticky Navbar Scroll Elevation ---
  const navbar = document.querySelector('.navbar');

  function updateNavbarOnScroll() {
    const scrollY = window.scrollY;

    // Elevate navbar when scrolled past top (adds shadow & slight opacity without layout shift)
    if (navbar) {
      if (scrollY > 15) {
        navbar.classList.add('is-scrolled');
      } else {
        navbar.classList.remove('is-scrolled');
      }
    }
  }

  // Article Copy Link Interaction
  document.querySelectorAll('.copy-article-link').forEach(btn => {
    btn.addEventListener('click', () => {
      if (navigator.clipboard) {
        navigator.clipboard.writeText(window.location.href).then(() => {
          showToast('Article link copied to clipboard!');
        }).catch(() => {
          showToast('Article link copied!');
        });
      } else {
        showToast('Article link: ' + window.location.href);
      }
    });
  });

  // --- Kitchen Before/After Transformation Slider Interaction ---
  const kitchenSlider = document.getElementById('kitchenComparisonSlider');
  const kitchenRange = document.getElementById('kitchenComparisonRange');

  if (kitchenSlider) {
    let isDragging = false;

    function setSplitPosition(percent) {
      const clamped = Math.max(0, Math.min(100, percent));
      kitchenSlider.style.setProperty('--split-pos', `${clamped}%`);
      if (kitchenRange && Math.abs(parseFloat(kitchenRange.value) - clamped) > 0.1) {
        kitchenRange.value = clamped;
      }
    }

    function handlePointerDrag(clientX) {
      const rect = kitchenSlider.getBoundingClientRect();
      if (rect.width > 0) {
        const percent = ((clientX - rect.left) / rect.width) * 100;
        setSplitPosition(percent);
      }
    }

    kitchenSlider.addEventListener('pointerdown', (e) => {
      // Don't hijack clicks on buttons, links, or trust pins
      if (e.target.closest('a') || e.target.closest('button') || e.target.closest('.kitchen-trust-pin')) {
        return;
      }
      isDragging = true;
      kitchenSlider.classList.add('is-dragging');
      try {
        kitchenSlider.setPointerCapture(e.pointerId);
      } catch (_) {}
      handlePointerDrag(e.clientX);
    });

    kitchenSlider.addEventListener('pointermove', (e) => {
      if (!isDragging) return;
      handlePointerDrag(e.clientX);
    });

    const endDrag = (e) => {
      if (isDragging) {
        isDragging = false;
        kitchenSlider.classList.remove('is-dragging');
        try {
          kitchenSlider.releasePointerCapture(e.pointerId);
        } catch (_) {}
      }
    };

    kitchenSlider.addEventListener('pointerup', endDrag);
    kitchenSlider.addEventListener('pointercancel', endDrag);

    // Range input listener for accessibility & keyboard arrows
    if (kitchenRange) {
      kitchenRange.addEventListener('input', (e) => {
        setSplitPosition(parseFloat(e.target.value));
      });
    }

    // Default 50% split position
    setSplitPosition(50);
  }

  // Universal Button Interaction & Accessibility Initialization
  // Button styling and concentric outer-loop animation is governed by GPU-accelerated CSS in styles.css
  function initUniversalButtonBubbleAnimation() {
    // Legacy DOM circle injection retired in favor of native CSS concentric bezel architecture
  }

  // Footer Legal Links Interactive Toast Notification
  document.querySelectorAll('.footer-legal-links a').forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href === '#privacy') {
        e.preventDefault();
        showToast('🔒 Privacy Policy: Client data is strictly confidential & protected under UAE Federal Law.');
      } else if (href === '#terms') {
        e.preventDefault();
        showToast('📋 Terms of Service: Upfront written quotes provided before work starts. Zero hidden fees.');
      } else if (href === '#warranty' || href === '#quality-policy') {
        e.preventDefault();
        showToast('🛡️ Service Quality Policy: Certified OEM Quality Service on all OEM spare parts & labor.');
      }
    });
  });

  initUniversalButtonBubbleAnimation();

  // ==========================================================================
  // Production Floating Contact Dock (Chatty) Footer Auto-Dismiss Observer
  // Sentinel Intersection Observer + Hysteresis Scroll Tracking:
  // Butter-smoothly sinks floating chatty buttons below the viewport
  // when approaching the footer copyright bar to prevent UI overlap.
  // ==========================================================================
  function initFloatingDockFooterObserver() {
    const floatingDock = document.getElementById('floatingContactDock') || document.querySelector('.floating-contact-dock');
    const footerBottom = document.querySelector('.footer-bottom-bar') || document.querySelector('.site-footer-master');

    if (!floatingDock || !footerBottom) return;

    let isHidden = false;
    let ticking = false;

    function checkDockCollision() {
      const rect = footerBottom.getBoundingClientRect();
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
      
      // Distance from viewport bottom to top of copyright bar
      const distanceToCopyright = rect.top - viewportHeight;

      // Hysteresis deadband to completely eliminate edge flickering:
      // - Smoothly sink when copyright bar is within 110px of entering viewport
      // - Smoothly rise back up only after scrolling at least 190px away from it
      if (!isHidden && distanceToCopyright <= 110) {
        isHidden = true;
        floatingDock.classList.add('dock-hidden');
      } else if (isHidden && distanceToCopyright > 190) {
        isHidden = false;
        floatingDock.classList.remove('dock-hidden');
      }
      ticking = false;
    }

    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(checkDockCollision);
        ticking = true;
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    
    // Check on initial load
    checkDockCollision();
  }

  initFloatingDockFooterObserver();

  window.addEventListener('scroll', updateNavbarOnScroll, { passive: true });
  window.addEventListener('resize', updateNavbarOnScroll, { passive: true });
  updateNavbarOnScroll();
});


