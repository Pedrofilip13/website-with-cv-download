document.addEventListener("DOMContentLoaded", function() {
    // Get the button element
    var downloadBtn = document.getElementById("download-btn");

    // Add click event listener to the button
    downloadBtn.addEventListener("click", function() {
        // Create a link element
        var link = document.createElement("a");
        
        // Set the href attribute to the path of your PDF file
        link.href = "cv.pdf";
        
        // Set the download attribute to specify the filename
        link.download = "cv.pdf";
        
        // Append the link to the document body
        document.body.appendChild(link);
        
        // Trigger a click event on the link
        link.click();
        
        // Remove the link from the document body
        document.body.removeChild(link);
    });
});