    // Get the counter element
    var counter = document.getElementById('counter');
    
    // Initialize click count
    var clickCount = 0;
    
    // Function to update click count and display it
    function updateCounter(event) {
        clickCount++;
        counter.textContent = clickCount;
        
        // Create a new element to display click number
        var clickNumber = document.createElement('div');
        clickNumber.textContent = clickCount;
        clickNumber.style.position = 'absolute';
        clickNumber.style.left = event.clientX + 'px';
        clickNumber.style.top = event.clientY + 'px';
        clickNumber.style.fontSize = '16px';
        clickNumber.style.color = 'red';
        clickNumber.style.pointerEvents = 'none'; // Ensure the new element doesn't capture clicks
        document.body.appendChild(clickNumber);
        
        // Remove the click number element after 2 seconds
        setTimeout(function() {
            clickNumber.remove();
        }, 10000);
    }
    
    // Add event listener for click event on the document
    document.addEventListener('click', updateCounter);