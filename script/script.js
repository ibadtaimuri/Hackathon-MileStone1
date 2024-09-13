// TypeScript code to toggle the visibility of the Skills section
document.addEventListener('DOMContentLoaded', function () {
    var toggleSkillsBtn = document.getElementById('toggleSkillsBtn');
    var skillsSection = document.getElementById('skillsSection');
    toggleSkillsBtn === null || toggleSkillsBtn === void 0 ? void 0 : toggleSkillsBtn.addEventListener('click', function () {
        if (skillsSection) {
            skillsSection.style.display = skillsSection.style.display === 'none' ? 'block' : 'none';
        }
    });
});
