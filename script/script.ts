// TypeScript code to toggle the visibility of the Skills section
document.addEventListener('DOMContentLoaded', () => {
    const toggleSkillsBtn = document.getElementById('toggleSkillsBtn');
    const skillsSection = document.getElementById('skillsSection');

    toggleSkillsBtn?.addEventListener('click', () => {
        if (skillsSection) {
            skillsSection.style.display = skillsSection.style.display === 'none' ? 'block' : 'none';
        }
    });
});
