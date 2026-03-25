// hardcoded program videos - no fetch needed
function buildProgramVideos(){
  const c=document.getElementById('programVideosSection');
  const e=[
    {id:'C4UO7m7d898',label:'Star Wars Video 1'},
    {id:'AeQwbpqLGm0',label:'Star Wars Video 2'},
    {id:'uFNaNoqHjr4',label:'Star Wars Video 3'}
  ];
  const th=`<div class="ev-thumbs" id="pvThumbs">${e.map((v,i)=>`<div class="ev-thumb${i===0?' active':''}" data-id="${v.id}"><div class="ev-thumb-img"><img src="https://img.youtube.com/vi/${v.id}/mqdefault.jpg" loading="lazy"><div class="ev-thumb-play">&#9654;</div></div><div class="ev-thumb-label">${v.label}</div></div>`).join('')}</div>`;
  c.innerHTML=`<div class="ev-player"><div class="ev-featured" id="pvFeatured"><iframe src="https://www.youtube.com/embed/${e[0].id}?rel=0&modestbranding=1" title="${e[0].label}" allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture" allowfullscreen style="width:100%;height:100%;border:none;display:block"></iframe></div>${th}</div>`;
  document.getElementById('pvThumbs').addEventListener('click',ev=>{const t=ev.target.closest('.ev-thumb');if(!t)return;document.querySelectorAll('#pvThumbs .ev-thumb').forEach(x=>x.classList.remove('active'));t.classList.add('active');document.getElementById('pvFeatured').innerHTML=`<iframe src="https://www.youtube.com/embed/${t.dataset.id}?rel=0&modestbranding=1&autoplay=1" title="Video" allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture" allowfullscreen style="width:100%;height:100%;border:none;display:block"></iframe>`;});
}
