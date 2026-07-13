  // ---------- LIBRARY MODAL ----------
  const publications = {
    'master-symbol': { src:'covers/cover-master-symbol.png', tag:'Official Release · 10 July 2026', title:'Master Symbol' },
    'brand-book': { src:'covers/cover-brand-book.png', tag:'Publication · First Edition · July 2026', title:'Brand Book' },
    'vol1': { src:'covers/cover-constitution-vol1.png', tag:'Constitution · Tom I · First Edition', title:'The Philosophy' },
    'vol2': { src:'covers/cover-constitution-vol2.png', tag:'Constitution · Tom II · First Edition', title:'The Laws' },
    'vol3': { src:'covers/cover-constitution-vol3.png', tag:'Constitution · Tom III · First Edition', title:'The Code of the Architect' },
  };
  const pubModal = document.getElementById('pubModal');
  const pubModalImg = document.getElementById('pubModalImg');
  const pubModalTag = document.getElementById('pubModalTag');
  const pubModalTitle = document.getElementById('pubModalTitle');
  let lastFocused = null;

  function openPub(key){
    const p = publications[key];
    if(!p) return;
    pubModalImg.src = p.src;
    pubModalImg.alt = p.title + ' — cover';
    pubModalTag.textContent = p.tag;
    pubModalTitle.textContent = p.title;
    lastFocused = document.activeElement;
    pubModal.classList.add('open');
    pubModal.setAttribute('aria-hidden','false');
    document.body.style.overflow = 'hidden';
  }
  function closePub(){
    pubModal.classList.remove('open');
    pubModal.setAttribute('aria-hidden','true');
    document.body.style.overflow = '';
    if(lastFocused) lastFocused.focus();
  }
  document.querySelectorAll('.pub-card').forEach(card=>{
    card.addEventListener('click', ()=> openPub(card.getAttribute('data-pub')));
  });
  // Footer library entries reuse the same preview modal for now.
  // Once real files are ready, just set each button's data-pdf="/path/to/file.pdf"
  // in the markup above — no other change needed.
  document.querySelectorAll('.footer-library-list .doc-item').forEach(item=>{
    item.addEventListener('click', ()=>{
      const pdfUrl = item.getAttribute('data-pdf');
      if(pdfUrl){
        window.open(pdfUrl, '_blank', 'noopener');
      } else {
        openPub(item.getAttribute('data-pub'));
      }
    });
  });
  pubModal.querySelectorAll('[data-close]').forEach(el=>{
    el.addEventListener('click', closePub);
  });
  document.addEventListener('keydown', e=>{
    if(e.key === 'Escape' && pubModal.classList.contains('open')) closePub();
  });
