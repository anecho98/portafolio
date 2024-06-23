function openLink(url) {
    window.open(url, '_blank');
}

function showDetails(title, description) {
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalDescription').innerText = description;
    document.getElementById('modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// Cerrar el modal cuando el usuario hace clic fuera del contenido del modal
window.onclick = function(event) {
    if (event.target == document.getElementById('modal')) {
        closeModal();
    }
}

// Agregar animación al hacer clic en un botón
document.querySelectorAll('.project button').forEach(button => {
    button.addEventListener('click', function() {
        this.classList.add('clicked');
        setTimeout(() => this.classList.remove('clicked'), 300);
    });
});