const profiles = document.querySelectorAll('.profile')
const detail = document.querySelector('.detail');
const close = document.querySelector('.close');

// Iterate over each profile element
profiles.forEach((profile) => {
    // Attach event listener to each profile element
    profile.addEventListener('click', () => {
      detail.classList.add('active')
    });
  });

close.addEventListener('click', ()=>{
    detail.classList.remove('active')
})