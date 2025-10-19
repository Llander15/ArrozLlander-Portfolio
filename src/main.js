const technologies = [
  { name: 'JavaScript', category: 'Language' },
  { name: 'React', category: 'Framework' },
  { name: 'Node.js', category: 'Runtime' },
  { name: 'HTML5', category: 'Markup' },
  { name: 'CSS3', category: 'Styling' },
  { name: 'Git', category: 'Version Control' },
  { name: 'MongoDB', category: 'Database' },
  { name: 'Express', category: 'Framework' }
];

const projects = [
  {
    title: 'Project One',
    description: 'A full-stack web application built with React and Node.js featuring real-time updates and responsive design.',
    tech: ['React', 'Node.js', 'MongoDB']
  },
  {
    title: 'Project Two',
    description: 'Modern e-commerce platform with secure payment integration and inventory management system.',
    tech: ['JavaScript', 'Express', 'CSS3']
  },
  {
    title: 'Project Three',
    description: 'Portfolio website showcasing creative designs with smooth animations and optimal performance.',
    tech: ['React', 'CSS3', 'HTML5']
  }
];

function renderTechStack() {
  const techGrid = document.getElementById('tech-grid');

  technologies.forEach(tech => {
    const techCard = document.createElement('div');
    techCard.className = 'tech-card';
    techCard.innerHTML = `
      <h3 class="tech-name">${tech.name}</h3>
      <p class="tech-category">${tech.category}</p>
    `;
    techGrid.appendChild(techCard);
  });
}

function renderProjects() {
  const projectsGrid = document.getElementById('projects-grid');

  projects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card';

    const techTags = project.tech.map(tech =>
      `<span class="tech-tag">${tech}</span>`
    ).join('');

    projectCard.innerHTML = `
      <div class="project-image">
        <span>Project Image</span>
      </div>
      <div class="project-content">
        <h3 class="project-title">${project.title}</h3>
        <p class="project-description">${project.description}</p>
        <div class="project-tech">
          ${techTags}
        </div>
      </div>
    `;
    projectsGrid.appendChild(projectCard);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderTechStack();
  renderProjects();
});
