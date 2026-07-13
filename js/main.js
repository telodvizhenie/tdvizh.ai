  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  },{threshold:0.15, rootMargin:"0px 0px -60px 0px"});
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

  // stagger children inside not-list / method-list / layers / principles for nicer sequence
  document.querySelectorAll('.not-list .reveal').forEach((el,i)=>{ el.style.transitionDelay = (i*0.12)+'s'; });
  document.querySelectorAll('.stack .reveal').forEach((el,i)=>{ el.style.transitionDelay = (i*0.12)+'s'; });
  document.querySelectorAll('.method-item.reveal').forEach((el,i)=>{ el.style.transitionDelay = (i*0.08)+'s'; });
  document.querySelectorAll('.principle-row.reveal').forEach((el,i)=>{ el.style.transitionDelay = (i*0.06)+'s'; });
  document.querySelectorAll('.library-grid .reveal').forEach((el,i)=>{ el.style.transitionDelay = (i*0.08)+'s'; });

  // ---------- MOBILE NAV ----------
  const navTrigger = document.getElementById('navTrigger');
  const mobileNav = document.getElementById('mobileNav');
  let navLastFocused = null;

  function openNav(){
    navLastFocused = document.activeElement;
    mobileNav.classList.add('open');
    mobileNav.setAttribute('aria-hidden','false');
    navTrigger.setAttribute('aria-expanded','true');
    navTrigger.setAttribute('aria-label','Close menu');
    document.body.classList.add('nav-locked');
  }
  function closeNav(){
    mobileNav.classList.remove('open');
    mobileNav.setAttribute('aria-hidden','true');
    navTrigger.setAttribute('aria-expanded','false');
    navTrigger.setAttribute('aria-label','Open menu');
    document.body.classList.remove('nav-locked');
    if(navLastFocused) navLastFocused.focus();
  }
  navTrigger.addEventListener('click', ()=>{
    mobileNav.classList.contains('open') ? closeNav() : openNav();
  });
  mobileNav.querySelectorAll('[data-nav-close]').forEach(el=>{
    el.addEventListener('click', closeNav);
  });
  document.addEventListener('keydown', e=>{
    if(e.key === 'Escape' && mobileNav.classList.contains('open')) closeNav();
  });
