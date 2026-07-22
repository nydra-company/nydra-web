// Tailwind Dynamic Configuration
tailwind.config = {
  theme: {
    extend: {
      colors: {
        nydra: {
          bg: '#ffffff',
          text: '#3d3b3a',
          card: '#f8f9fa',
          border: '#e5e7eb',
          accent: '#2563eb',
          muted: '#6b7280'
        }
      }
    }
  }
};

// Auto-update Footer Year
document.addEventListener('DOMContentLoaded', () => {
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
});