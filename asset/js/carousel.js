(function() {
    var slidersContainer = document.querySelector('.sliders-container');
    var pagination = document.querySelector('.pagination');

    fetch('asset/data/project.json')
      .then(response => response.json())
      .then(projects => {
        var projectCount = projects.length;
        var activeIndex = 0; // Index du projet au centre
        var isDragging = false; // Flag pour détecter le drag

        var msNumbers = new MomentumSlider({
            el: slidersContainer,
            cssClass: 'ms--numbers',
            range: [1, projectCount],
            rangeContent: function (i) {
                return '0' + (i);
            },
            style: {
                transform: [{scale: [0.4, 1]}],
                opacity: [0, 1]
            },
            interactive: false
        });

        var msTitles = new MomentumSlider({
            el: slidersContainer,
            cssClass: 'ms--titles',
            range: [0, projectCount - 1],
            rangeContent: function (i) {
                return '<h3>'+ projects[i].name +'</h3>';
            },
            vertical: true,
            reverse: true,
            style: {
                opacity: [0, 1]
            },
            interactive: false
        });

        var msLinks = new MomentumSlider({
            el: slidersContainer,
            cssClass: 'ms--links',
            range: [0, projectCount - 1],
            rangeContent: function (i) {
                return `<div class="ms-slide__link" onclick="navigateToProject(${i})">View Case</div>`;
            },
            vertical: true,
            interactive: false
        });

        var msImages = new MomentumSlider({
            el: slidersContainer,
            cssClass: 'ms--images',
            range: [0, projectCount - 1],
            rangeContent: function (i) {
                return `<div class="ms-slide__image-container" data-index="${i}">
                            <div class="ms-slide__image" style="background-image: url(${projects[i].image_profil});"></div>
                        </div>`;
            },
            sync: [msNumbers, msTitles, msLinks],
            style: {
                '.ms-slide__image': {
                    transform: [{scale: [1.5, 1]}]
                }
            },
            change: function(newIndex, oldIndex) {
                activeIndex = newIndex; // Met à jour l'index du projet au centre
                if (typeof oldIndex !== 'undefined') {
                    pagination.children[oldIndex].classList.remove('pagination__item--active');
                }
                pagination.children[newIndex].classList.add('pagination__item--active');
            }
        });

        pagination.innerHTML = "";
        projects.forEach((_, index) => {
            let paginationItem = document.createElement('li');
            paginationItem.classList.add('pagination__item');
            paginationItem.innerHTML = `<a class="pagination__button"></a>`;
            pagination.appendChild(paginationItem);
        });

        pagination.addEventListener('click', function(e) {
            if (e.target.matches('.pagination__button')) {
                var index = Array.from(pagination.children).indexOf(e.target.parentNode);
                msImages.select(index);
            }
        });

        // Gestion du drag pour éviter les faux clics
        let startX, startY;
        let minMoveThreshold = 10; // Seuil pour différencier un clic d'un drag

        slidersContainer.addEventListener('mousedown', (event) => {
            startX = event.clientX;
            startY = event.clientY;
            isDragging = false;
        });

        slidersContainer.addEventListener('mousemove', () => {
            isDragging = true; // Si la souris bouge, c'est un drag
        });

        slidersContainer.addEventListener('mouseup', (event) => {
            let deltaX = Math.abs(event.clientX - startX);
            let deltaY = Math.abs(event.clientY - startY);
            
            // Si peu de mouvement, on considère que c'est un clic
            if (deltaX < minMoveThreshold && deltaY < minMoveThreshold) {
                if (event.target.closest('.ms-slide__image-container')) {
                    let clickedIndex = parseInt(event.target.closest('.ms-slide__image-container').getAttribute('data-index'));

                    if (clickedIndex === activeIndex) {
                        navigateToProject(activeIndex);
                    } 
                }
            }
        });

        function navigateToProject(index) {
            if (isDragging) return; // Bloquer la redirection si c'était un drag
            let activeProject = projects[index];
            window.location.href = `project.html?id=${activeProject.id}&name=${encodeURIComponent(activeProject.name)}`;
        }
      })
      .catch(error => console.error("Erreur de chargement du JSON :", error));
})();
