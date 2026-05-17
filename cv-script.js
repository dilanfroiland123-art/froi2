/**
 * Froiland Dilan CV - Custom Scripts
 * Extracted and hardened for CSP A+ Grade
 */

function downloadPDF() {
    const element = document.getElementById('resume-content');
    if (!element) return;

    const opt = {
        margin:       0,
        filename:     'Froiland_Dilan_CV.pdf',
        image:        { type: 'jpeg', quality: 1 },
        html2canvas:  { 
            scale: 2, 
            useCORS: true, 
            letterRendering: true,
            scrollX: 0,
            scrollY: 0,
            width: 816,
            height: 1056
        },
        jsPDF:        { unit: 'px', format: [816, 1056], orientation: 'portrait' }
    };
    
    // Ensure html2pdf is loaded
    if (typeof html2pdf !== 'undefined') {
        html2pdf().set(opt).from(element).save();
    } else {
        console.error('html2pdf library not loaded');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const downloadBtn = document.querySelector('.no-print button');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', downloadPDF);
    }
});
