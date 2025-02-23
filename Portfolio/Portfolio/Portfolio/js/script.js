document.addEventListener("DOMContentLoaded", () => {
    const projectsList = document.getElementById("projects-list");
    fetch("data/projects.json")
      .then(response => response.json())
      .then(data => {
        data.forEach(project => {
          const col = document.createElement("div");
          col.className = "col-md-4";
          col.innerHTML = `
            <div class="card mb-4">
              <div class="card-body">
                <h5 class="card-title">${project.title}</h5>
                <p class="card-text">${project.description}</p>
                <a href="${project.link}" class="btn btn-primary">View Project</a>
              </div>
            </div>
          `;
          projectsList.appendChild(col);
        });
      });
  });


