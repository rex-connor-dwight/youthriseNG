function downloadPDF() {
    // URL of the PDF file
    var pdfURL = 'Docs/AR22.pdf';
    
    // Create an anchor element
    var link = document.createElement('a');
    
    // Set the href attribute to the PDF URL
    link.href = pdfURL;
    
    // Set the download attribute to force download
    link.download = 'AR22.pdf';
    
    // Programmatically click the link to trigger the download
    link.click();
}