const title = document.getElementById('title');

const h0 = document.getElementById('h0');
const nav0 = document.getElementById('nav0');
const nav1 = document.getElementById('nav1');
const nav2 = document.getElementById('nav2');
const nav3 = document.getElementById('nav3');

const s0 = document.getElementById('s0');
const s1 = document.getElementById('s1');
const s2 = document.getElementById('s2');
const s3 = document.getElementById('s3');
const s4 = document.getElementById('s4');
const s5 = document.getElementById('s5');
const s6 = document.getElementById('s6');
const s7 = document.getElementById('s7');
const s8 = document.getElementById('s8');
const s9 = document.getElementById('s9');
const s10 = document.getElementById('s10');
const s11 = document.getElementById('s11');
const s12 = document.getElementById('s12');
const s13 = document.getElementById('s13');
const s14 = document.getElementById('s14');
const s15 = document.getElementById('s15');
const s16 = document.getElementById('s16');
const s17 = document.getElementById('s17');
const s18 = document.getElementById('s18');
const s19 = document.getElementById('s19');
const s20 = document.getElementById('s20');
const s21 = document.getElementById('s21');
const s22 = document.getElementById('s22');
const s23 = document.getElementById('s23');
const s24 = document.getElementById('s24');

const u0 = document.getElementById('u0');
const u1 = document.getElementById('u1');
const u2 = document.getElementById('u2');
const u3 = document.getElementById('u3');
const u4 = document.getElementById('u4');
const u5 = document.getElementById('u5');
const u6 = document.getElementById('u6');
const u7 = document.getElementById('u7');
const u8 = document.getElementById('u8');
const u9 = document.getElementById('u9');


const h1 = document.getElementById('h1');
const h2 = document.getElementById('h2');
const h3 = document.getElementById('h3');


const t0 = document.getElementById('t0');
const t1 = document.getElementById('t1');
const t2 = document.getElementById('t2');
const t3 = document.getElementById('t3');

const c0 = document.getElementById('c0');
const c1 = document.getElementById('c1');


const i0 = document.getElementById('i0');
const i1 = document.getElementById('i1');
const i2 = document.getElementById('i2');


const f0 = document.getElementById('f0');
const f1 = document.getElementById('f1');


const g0 = document.getElementById('nav');
const g1 = document.getElementById('slide');
const g2 = document.getElementById('us');
const g3 = document.getElementById('healthy');
const g4 = document.getElementById('trainer');
const g5 = document.getElementById('contact');
const g6 = document.getElementById('info');
const g7 = document.getElementById('footer');

const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');
const img4 = document.getElementById('img4');
const img5 = document.getElementById('img5');
const img6 = document.getElementById('img6');
const img7 = document.getElementById('img7');
const img8 = document.getElementById('img8');


// Function to update content for a specific element
function updateContent(element, newValue) {
    // Update content for the element
    element.textContent = newValue;
  }
  
  // Function to update content for an <a> tag
  function updateLinkContent(linkElement, newValue) {
    // Update content for the <a> tag
    linkElement.innerText = newValue;
  }

  function updateImageSrc(imageElement, newSrc) {
    // Update the src attribute of the image element
    imageElement.src = newSrc;
}

function updateBackgroundColor(element, newColor) {
  // Update the background color for the element
  element.style.backgroundColor = newColor;
}

  
  // Fetch JSON data from the text file
  function updatePageContent(pageName) {
    console.log('Updating content for page:', pageName);
    const fetchJson1 = fetch('t.txt')
    .then(response => response.json());

// Fetch the second JSON file
const fetchJson2 = fetch('image.txt')
    .then(response => response.json());

// Wait for both fetch operations to complete
Promise.all([fetchJson1, fetchJson2])
    .then(jsonDataArray => {
        // Merge the data from both JSON files
        const mergedData = Object.assign({}, ...jsonDataArray);
            
           
           
            // Extract the filename from the path
            const fileName = pageName.split('/').pop();

            if (fileName === 'index.html' || fileName === '') {

                updateContent(title, mergedData.title.title);

                updateContent(h0, mergedData.nav.h0);
                updateLinkContent(nav0, mergedData.nav.nav0);
                updateLinkContent(nav1, mergedData.nav.nav1);
                updateLinkContent(nav2, mergedData.nav.nav2);
                updateLinkContent(nav3, mergedData.nav.nav3);
               

                
                updateContent(s0, mergedData.slide.s0);
                updateContent(s1, mergedData.slide.s1);
                updateContent(s2, mergedData.slide.s2);
                updateContent(s3, mergedData.slide.s3);
                updateContent(s4, mergedData.slide.s4);
                updateContent(s5, mergedData.slide.s5);
                updateContent(s6, mergedData.slide.s6);
                updateContent(s7, mergedData.slide.s7);
                updateContent(s8, mergedData.slide.s8);
                updateContent(s9, mergedData.slide.s9);
                updateContent(s10, mergedData.slide.s10);
                updateContent(s11, mergedData.slide.s11);
                updateContent(s12, mergedData.slide.s12);
                updateContent(s13, mergedData.slide.s13);
                updateContent(s14, mergedData.slide.s14);
                updateContent(s15, mergedData.slide.s15);
                updateContent(s16, mergedData.slide.s16);
                updateContent(s17, mergedData.slide.s17);
                updateContent(s18, mergedData.slide.s18);
                updateContent(s19, mergedData.slide.s19);
                updateContent(s20, mergedData.slide.s20);
                updateContent(s21, mergedData.slide.s21);
                updateContent(s22, mergedData.slide.s22);
                updateContent(s23, mergedData.slide.s23);
                updateContent(s24, mergedData.slide.s24);
                
                updateContent(u1, mergedData.us.u1);
                updateContent(u2, mergedData.us.u2);
                updateContent(u3, mergedData.us.u3);
                updateContent(u4, mergedData.us.u4);
                updateContent(u5, mergedData.us.u5);
                updateContent(u6, mergedData.us.u6);
                updateContent(u7, mergedData.us.u7);
                updateContent(u8, mergedData.us.u8);
                updateContent(u9, mergedData.us.u9);

                updateContent(h1, mergedData.healthy.h1);
                updateContent(h2, mergedData.healthy.h2);
                updateContent(h3, mergedData.healthy.h3);

                updateContent(t0, mergedData.trainer.t0);
                updateContent(t1, mergedData.trainer.t1);
                updateContent(t2, mergedData.trainer.t2);
                updateContent(t3, mergedData.trainer.t3);

                updateContent(c0, mergedData.contact.c0);
                updateContent(c1, mergedData.contact.c1);
                

                updateContent(i0, mergedData.info.i0);
                updateContent(i1, mergedData.info.i1);
                updateContent(i2, mergedData.info.i2);

                updateContent(f0, mergedData.footer.f0);
                updateContent(f1, mergedData.footer.f1);

    
                updateBackgroundColor(g0, mergedData.color.nav);
                updateBackgroundColor(g1, mergedData.color.slide);
                updateBackgroundColor(g2, mergedData.color.us);
                updateBackgroundColor(g3, mergedData.color.healthy);
                updateBackgroundColor(g4, mergedData.color.trainer);
                updateBackgroundColor(g5, mergedData.color.contact);
                updateBackgroundColor(g7, mergedData.color.info);
                updateBackgroundColor(g6, mergedData.color.footer);
             
                updateImageSrc(img1, mergedData.images.img1);
                updateImageSrc(img2, mergedData.images.img2);
                updateImageSrc(img3, mergedData.images.img3);
                updateImageSrc(img4, mergedData.images.img4);
                updateImageSrc(img5, mergedData.images.img5);
                updateImageSrc(img6, mergedData.images.img6);
                updateImageSrc(img7, mergedData.images.img7);
                updateImageSrc(img8, mergedData.images.img8);
              
        

            }   else if (fileName === 'contact.html') {
                updateContent(h0, mergedData.nav.h0);
                updateLinkContent(nav0, mergedData.nav.nav0);
                updateLinkContent(nav1, mergedData.nav.nav1);
                updateLinkContent(nav2, mergedData.nav.nav2);
                updateLinkContent(nav3, mergedData.nav.nav3);
                
                updateContent(c0, mergedData.contact.c0);
                updateContent(c1, mergedData.contact.c1);
                updateImageSrc(img8, mergedData.images.img8);

                updateContent(f0, mergedData.footer.f0);
                updateContent(f1, mergedData.footer.f1);
                updateBackgroundColor(g5, mergedData.color.contact);
                updateBackgroundColor(g0, mergedData.color.nav);
                updateBackgroundColor(g6, mergedData.color.footer);

            } else if (fileName === 'trainer.html') {
                updateContent(h0, mergedData.nav.h0);
                updateLinkContent(nav0, mergedData.nav.nav0);
                updateLinkContent(nav1, mergedData.nav.nav1);
                updateLinkContent(nav2, mergedData.nav.nav2);
                updateLinkContent(nav3, mergedData.nav.nav3);

                updateContent(t0, mergedData.trainer.t0);
                updateContent(t1, mergedData.trainer.t1);
                updateContent(t2, mergedData.trainer.t2);
                updateContent(t3, mergedData.trainer.t3);
                
                updateContent(f0, mergedData.footer.f0);
                updateContent(f1, mergedData.footer.f1);

                updateImageSrc(img5, mergedData.images.img5);
                updateImageSrc(img6, mergedData.images.img6);
                updateImageSrc(img7, mergedData.images.img7);
                updateBackgroundColor(g0, mergedData.color.nav);
                updateBackgroundColor(g6, mergedData.color.footer);
                updateBackgroundColor(g4, mergedData.color.trainer);
            } else if (fileName === 'why.html') {
                updateContent(h0, mergedData.nav.h0);
                updateLinkContent(nav0, mergedData.nav.nav0);
                updateLinkContent(nav1, mergedData.nav.nav1);
                updateLinkContent(nav2, mergedData.nav.nav2);
                updateLinkContent(nav3, mergedData.nav.nav3);

                updateContent(u1, mergedData.us.u1);
                updateContent(u2, mergedData.us.u2);
                updateContent(u3, mergedData.us.u3);
                updateContent(u4, mergedData.us.u4);
                updateContent(u5, mergedData.us.u5);
                updateContent(u6, mergedData.us.u6);
                updateContent(u7, mergedData.us.u7);
                updateContent(u8, mergedData.us.u8);
                updateContent(u9, mergedData.us.u9);
                
                updateContent(f0, mergedData.footer.f0);
                updateContent(f1, mergedData.footer.f1);
                updateImageSrc(img1, mergedData.images.img1);
                updateImageSrc(img2, mergedData.images.img2);
                updateImageSrc(img3, mergedData.images.img3);
                updateImageSrc(img4, mergedData.images.img4);

                updateBackgroundColor(g0, mergedData.color.nav);
                updateBackgroundColor(g2, mergedData.color.us);
                updateBackgroundColor(g6, mergedData.color.footer);
            } 
        })
        .catch(error => console.error('Error fetching or parsing JSON:', error));
}

// Call the function to update content when the page loads
window.addEventListener('load', function () {
    console.log('page loaded');
    // Get the current page URL
    const currentPage = window.location.pathname;

    // Update content based on the current page
    updatePageContent(currentPage);
});