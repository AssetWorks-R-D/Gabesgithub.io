document.addEventListener('DOMContentLoaded', function() {
    const text = document.getElementById('bouncing-text');
    
    let x = Math.random() * (window.innerWidth - text.offsetWidth);
    let y = Math.random() * (window.innerHeight - text.offsetHeight);
    
    let speedX = 2;
    let speedY = 2;
    
    const colors = ['white', 'red', 'blue', 'yellow', 'purple', 'orange', 'pink', 'cyan'];
    let colorIndex = 0;
    
    function animate() {
        x += speedX;
        y += speedY;
        
        if (x + text.offsetWidth >= window.innerWidth || x <= 0) {
            speedX = -speedX;
            colorIndex = (colorIndex + 1) % colors.length;
            text.style.color = colors[colorIndex];
        }
        
        if (y + text.offsetHeight >= window.innerHeight || y <= 0) {
            speedY = -speedY;
            colorIndex = (colorIndex + 1) % colors.length;
            text.style.color = colors[colorIndex];
        }
        
        text.style.left = x + 'px';
        text.style.top = y + 'px';
        
        requestAnimationFrame(animate);
    }
    
    animate();
});
