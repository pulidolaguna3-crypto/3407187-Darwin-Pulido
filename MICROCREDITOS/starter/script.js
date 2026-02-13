const entityData = {
  name: 'micerocreditos S.A.S ',
  description: 'Somos una empresa dedicada a brindar soluciones financieras a través de microcréditos, con el objetivo de apoyar el crecimiento y desarrollo de pequeñas empresas y emprendedores en Colombia.',
  contact: {
    email: 'micr@micr.com',
    phone: '+57 300 000 0000',
    location: 'Colombia'
  },
  items: [
    { name: 'Microcréditos para emprendimientos', level: 95 },
    { name: 'Créditos para capital de trabajo', level: 90 },
    { name: 'Asesoría financiera', level: 85 },
    { name: 'Educación financiera', level: 80 },
    { name: 'Refinanciación de deudas', level: 75 }
  ],
  links: [
    { platform: 'facebook', url: 'https://www.facebook.com/micr', icon: '📘' },
    { platform: 'twitter', url: 'https://www.twitter.com/micr', icon: '🐦' },
    { platform: 'linkedin', url: 'https://www.linkedin.com/company/micr', icon: '🔗' }
  ],
  stats: {
    total: 15,
    active: 5,
    rating: 4.8,
    custom: 3
  }
};

const userName = document.getElementById('userName');
const userBio = document.getElementById('userBio');
const userEmail = document.getElementById('userEmail');
const userPhone = document.getElementById('userPhone');
const userLocation = document.getElementById('userLocation');
const skillsList = document.getElementById('skillsList');
const statsContainer = document.getElementById('stats');
const themeToggle = document.getElementById('themeToggle');
const copyBtn = document.getElementById('copyEmailBtn');
const toggleSkillsBtn = document.getElementById('toggleSkills');
const socialLinks = document.getElementById('socialLinks');
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toastMessage');

const renderBasicInfo = () => {
  const { name, description, contact } = entityData;

  userName.textContent = name;
  userBio.textContent = description;
  userEmail.textContent = contact.email;
  userPhone.textContent = contact.phone;
  userLocation.textContent = `📍 ${contact.location}`;
};

const renderSkills = (showAll = false) => {
  const { items } = entityData;
  const skillsToShow = showAll ? items : items.slice(0, 4);

  skillsList.innerHTML = skillsToShow.map(skill => `
    <div class="skill-item">
      <div class="skill-name">${skill.name}</div>
      <div class="skill-level">
        <span>${skill.level}%</span>
        <div class="skill-bar">
          <div class="skill-bar-fill" style="width: ${skill.level}%"></div>
        </div>
      </div>
    </div>
  `).join('');
};

const renderLinks = () => {
  const { links } = entityData;

  socialLinks.innerHTML = links.map(link => `
    <a href="${link.url}" target="_blank" class="social-link">
      ${link.icon} ${link.platform}
    </a>
  `).join('');
};

const renderStats = () => {
  const { stats } = entityData;

  const statsArray = [
    { label: 'Total Clientes', value: stats.total },
    { label: 'Créditos Activos', value: stats.active },
    { label: 'Tasa de Pago(%)', value: stats.rating },
    { label: 'Emprendimientos', value: stats.custom }
  ];

  statsContainer.innerHTML = statsArray.map(stat => `
    <div class="stat-item">
      <span class="stat-value">${stat.value}</span>
      <span class="stat-label">${stat.label}</span>
    </div>
  `).join('');
};

const toggleTheme = () => {
  const currentTheme = document.documentElement.dataset.theme;
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

  document.documentElement.dataset.theme = newTheme;
  themeToggle.textContent = newTheme === 'dark' ? '☀️' : '🌙';
  localStorage.setItem('theme', newTheme);
};

const loadTheme = () => {
  const savedTheme = localStorage.getItem('theme') ?? 'light';
  document.documentElement.dataset.theme = savedTheme;
  themeToggle.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
};

const copyInfo = () => {
  navigator.clipboard.writeText(entityData.contact.email);
  showToast('Email copied successfully!');
};

const showToast = message => {
  toastMessage.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
};

let showingAll = false;

const handleToggleSkills = () => {
  showingAll = !showingAll;
  renderSkills(showingAll);
  toggleSkillsBtn.textContent = showingAll ? 'Show Less' : 'Show More';
};

themeToggle.addEventListener('click', toggleTheme);
copyBtn.addEventListener('click', copyInfo);
toggleSkillsBtn.addEventListener('click', handleToggleSkills);

const init = () => {
  loadTheme();
  renderBasicInfo();
  renderSkills();
  renderLinks();
  renderStats();
};

init();
