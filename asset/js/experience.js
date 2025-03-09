document.addEventListener('DOMContentLoaded', () => {
    fetch('asset/data/experience.json')
      .then(response => response.json())
      .then(experiences => {
        const sectionContainers = document.querySelectorAll('.section-work');
        const sectionContainer = sectionContainers[1]; // Sélectionne le deuxième .section-work
        
        if (!sectionContainer) {
          console.error('Second .section-work not found');
          return;
        }
        
        experiences.forEach((exp, index) => {
          const experienceHTML = `
            <div class="mycontain">
              <div class="flexcolwrap">
                <div class="flexcol shrink">
                  <div class="wrapper">
                    <div data-w-id="experience-name" class="services-number-holder">
                      <h3 class="services-number">${exp.year}</h3>
                    </div>
                  </div>
                </div>
                <div class="flex2col">
                  <div class="wrapper">
                    <div class="overflow-container">
                      <h3 class="services-heading">${exp.title}</h3>
                    </div>
                    <div class="spacer-20"></div>
                    <div class="wrapper">
                      <div class="overflow-container">
                        <p class="services-paragraph">
                          ${exp.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="spacer-50"></div>
                <div class="flex2col">
                  <div class="wrapper">
                    ${exp.skills.map(skill => `
                      <div class="overflow-container">
                        <div data-w-id="divider-line" class="divider-line"></div>
                      </div>
                      <div class="overflow-container">
                        <p class="services-text">${skill}</p>
                      </div>
                    `).join('')}
                  </div>
                </div>
              </div>
            </div>
            ${index < experiences.length - 1 ? '<div class="spacer-25vh"></div>' : ''}
          `;
          sectionContainer.insertAdjacentHTML('beforeend', experienceHTML);
        });
  
        // Réactiver uniquement les nouvelles animations Webflow
      setTimeout(() => {
        const newElements = document.querySelectorAll('.new-experience [data-w-id="experience-name"], .new-experience [data-w-id="divider-line"]');
        newElements.forEach(el => {
          if (window.Webflow && typeof window.Webflow.require === 'function') {
            const ix2 = window.Webflow.require('ix2');
            if (ix2 && typeof ix2.init === 'function') {
              ix2.init();
            }
          }
        });

        // Supprimer la classe après activation
        document.querySelectorAll('.new-experience').forEach(el => {
          el.classList.remove('new-experience');
        });

      }, 100);
      })
      .catch(error => console.error('Error loading experiences:', error));
  });
  