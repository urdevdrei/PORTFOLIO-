// Wait until the entire DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
  
        // Get the button element with the ID 'downloadCV'
      const downloadBtn = document.getElementById('downloadCV');

        // Specify the relative path to the PDF file
      const fileUrl = 'AndreiSantos_Resume.pdf';

        // Create a temporary <a> element
      const link = document.createElement('a');

  // Check if the button exists before proceeding
  if (downloadBtn) {
    
    // Add a click event listener to the button
    downloadBtn.addEventListener('click', function (e) {
      
      // Prevent the default action of the link (i.e., navigating to "#")
      e.preventDefault();

      // Set the href to the file URL
      link.href = fileUrl;

      // Set the filename for the download
      link.download = 'AndreiSantos_Resume.pdf';

      // Append the link to the document body (required for some browsers)
      document.body.appendChild(link);

      // Programmatically click the link to trigger the download
      link.click();

      // Remove the temporary link from the DOM
      document.body.removeChild(link);
    });
  }
});


  
  

