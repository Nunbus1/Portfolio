document.addEventListener("DOMContentLoaded", function () {
  // Récupérer les paramètres de l'URL
  const urlParams = new URLSearchParams(window.location.search);
  const projectId = urlParams.get("id");

  if (!projectId) {
    console.error("Aucun ID de projet trouvé dans l'URL");
    return;
  }

  // Charger le fichier JSON
  fetch("../asset/data/project.json")
    .then((response) => response.json())
    .then((projects) => {
      // Trouver l'index du projet actuel
      const currentIndex = projects.findIndex((p) => p.id === projectId);

      if (currentIndex === -1) {
        console.error("Projet non trouvé");
        return;
      }

      const project = projects[currentIndex];

      // Mettre à jour le titre du projet dans la page
      const titleElement = document.querySelector(
        ".title-project .heading-big"
      );
      if (titleElement) {
        titleElement.textContent = project.name;
      }

      // Mettre à jour la section projet intro
      const projectIntro = document.querySelector(".project-intro .intro-item");
      if (projectIntro) {
        projectIntro.innerHTML = `
                    Rôle : ${project.role.join(", ")}<br>
                    Durée : ~${project.duree} heures<br>
                    Équipe : ${project.equipe}
                `;
      }

      // Mettre à jour les langages
      const languageElement = document.querySelector(
        ".type-project .about-project:nth-child(2) h2"
      );
      if (languageElement) {
        languageElement.innerHTML = project.langage.join("<br><br>");
      }

      // Mettre à jour la date dans le deuxième h2
      const dateElement = document.querySelector(
        ".type-project .about-project:nth-child(4) h2"
      );
      if (dateElement) {
        dateElement.textContent = project.date;
      }

      // Mettre à jour l'image de profil
      const projectImage = document.querySelector(".img-container .main-pic");
      if (projectImage) {
        projectImage.setAttribute("xlink:href", project.image_profil);
      }

      // Mettre à jour l'image 1
      const firstProjectSvgImage = document.querySelector(
        ".img-wrapper._1 .svg-image"
      );
      if (firstProjectSvgImage) {
        firstProjectSvgImage.setAttribute("xlink:href", project.image1);
      }

      // Mettre à jour l'image 2
      const secondProjectSvgImage = document.querySelector(
        ".img-wrapper._2 .svg-image"
      );
      if (secondProjectSvgImage) {
        secondProjectSvgImage.setAttribute("xlink:href", project.image2);
      }

      // Mettre à jour l'image 3
      const thirdProjectSvgImage = document.querySelector(
        ".img-wrapper._3 .svg-image"
      );
      if (thirdProjectSvgImage) {
        thirdProjectSvgImage.setAttribute("xlink:href", project.image3);
      }

      // Mettre à jour la section apercu
      const apercuParagraph = document.querySelector(".journey .t-anim");
      if (apercuParagraph) {
        apercuParagraph.textContent = project.apercu;
      }

      // vidéo YouTube
      const videoContainer = document.querySelector(".img-wrapper._4");
      if (videoContainer) {
        if (project.video) {
          videoContainer.innerHTML = `
                      <iframe style="width: 100%; height: 100%; aspect-ratio: 16/9;" 
                              src="${project.video.replace(
                                "watch?v=",
                                "embed/"
                              )}" 
                              frameborder="0" allowfullscreen></iframe>
                  `;
        } else {
          videoContainer.innerHTML = `<p style="text-align: center; font-size: 18px; font-weight: bold;">La vidéo arrive prochainement</p>`;
        }
      }

      // Liens
      const testimonyParagraphs =
        document.querySelectorAll(".testimony .t-anim");
      if (testimonyParagraphs.length >= 2) {
        testimonyParagraphs[0].textContent = "Liens vers le projet :";
        testimonyParagraphs[1].textContent = project.name;
        testimonyParagraphs[1].style.cursor = "pointer";
        testimonyParagraphs[1].addEventListener("click", function () {
          window.location.href = project.liens;
        });
      }

      // Gérer le projet suivant
      const nextIndex = (currentIndex + 1) % projects.length;
      const nextProject = projects[nextIndex];

      // Mettre à jour l'aperçu du projet suivant
      const nextProjectName = document.querySelector(".next-project .name-pro");
      if (nextProjectName) {
        nextProjectName.textContent = nextProject.name;
      }

      const nextProjectImage = document.querySelector(
        ".next-project .next-pic"
      );
      if (nextProjectImage) {
        nextProjectImage.setAttribute("xlink:href", nextProject.image_profil);
      }

      // Ajouter l'événement de redirection au clic
      const nextProjectLink = document.querySelector(
        ".next-project .next-content"
      );
      if (nextProjectLink) {
        nextProjectLink.addEventListener("click", function () {
          window.location.href = `project.html?id=${
            nextProject.id
          }&name=${encodeURIComponent(nextProject.name)}`;
        });
      }
    })
    .catch((error) => console.error("Erreur de chargement du JSON :", error));

    
});
