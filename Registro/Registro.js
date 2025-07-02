document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        if (validateForm()) {
            clearForm();
        }
    });
});

function validateForm() {
    const propietarioNombre = document.querySelector('input[name="propietario-nombre"]').value;
    const propietarioDomicilio = document.querySelector('input[name="propietario-domicilio"]').value;
    const propietarioCelular = document.querySelector('input[name="propietario-celular"]').value;
    const propietarioCorreo = document.querySelector('input[name="propietario-correo"]').value;

    const mascotaNombre = document.querySelector('input[name="mascota-nombre"]').value;
    const mascotaEspecie = document.querySelector('input[name="mascota-especie"]').value;
    const mascotaRaza = document.querySelector('input[name="mascota-raza"]').value;
    const mascotaAnios = document.querySelector('input[name="mascota-anos"]').value;
    const mascotaMeses = document.querySelector('input[name="mascota-meses"]').value;
    const mascotaPeso = document.querySelector('input[name="mascota-peso"]').value;
    const mascotaSexo = document.querySelector('select[name="mascota-sexo"]').value;
    const mascotaEsterilizado = document.querySelector('select[name="mascota-esterilizado"]').value;

    let isValid = true;

    // Validar campos del propietario
    if (!propietarioNombre || !/^[a-zA-Z\s]+$/.test(propietarioNombre)) {
        alert('El nombre del propietario debe contener solo letras.');
        isValid = false;
    }

    if (!propietarioDomicilio || !/^[a-zA-Z0-9\s,.-]+$/.test(propietarioDomicilio)) {
        alert('El domicilio del propietario no es válido.');
        isValid = false;
    }

    if (!propietarioCelular || !/^\d+$/.test(propietarioCelular)) {
        alert('El número de celular debe contener solo números.');
        isValid = false;
    }

    if (!propietarioCorreo || !/\S+@\S+\.\S+/.test(propietarioCorreo)) {
        alert('El correo electrónico no es válido.');
        isValid = false;
    }

    // Validar campos de la mascota
    if (!mascotaNombre || !/^[a-zA-Z\s]+$/.test(mascotaNombre)) {
        alert('El nombre de la mascota debe contener solo letras.');
        isValid = false;
    }

    if (!mascotaEspecie || !/^[a-zA-Z\s]+$/.test(mascotaEspecie)) {
        alert('La especie de la mascota debe contener solo letras.');
        isValid = false;
    }

    if (!mascotaRaza || !/^[a-zA-Z\s]+$/.test(mascotaRaza)) {
        alert('La raza de la mascota debe contener solo letras.');
        isValid = false;
    }

    if (!mascotaAnios || !/^\d+$/.test(mascotaAnios)) {
        alert('La edad en años debe contener solo números.');
        isValid = false;
    }

    if (!mascotaMeses || !/^\d+$/.test(mascotaMeses)) {
        alert('La edad en meses debe contener solo números.');
        isValid = false;
    }

    if (!mascotaPeso || isNaN(mascotaPeso)) {
        alert('El peso debe ser un número decimal válido.');
        isValid = false;
    }

    if (mascotaSexo === '') {
        alert('Debes seleccionar el sexo de la mascota.');
        isValid = false;
    }

    if (mascotaEsterilizado === '') {
        alert('Debes indicar si la mascota está esterilizada.');
        isValid = false;
    }

    if (isValid) {
        alert('Su registro fue enviado con éxito');
        return true;
    }

    return false;
}

function clearForm() {
    document.querySelector('input[name="propietario-nombre"]').value = '';
    document.querySelector('input[name="propietario-domicilio"]').value = '';
    document.querySelector('input[name="propietario-celular"]').value = '';
    document.querySelector('input[name="propietario-correo"]').value = '';
    document.querySelector('input[name="mascota-nombre"]').value = '';
    document.querySelector('input[name="mascota-especie"]').value = '';
    document.querySelector('input[name="mascota-raza"]').value = '';
    document.querySelector('input[name="mascota-anos"]').value = '';
    document.querySelector('input[name="mascota-meses"]').value = '';
    document.querySelector('input[name="mascota-peso"]').value = '';
    document.querySelector('select[name="mascota-sexo"]').value = '';
    document.querySelector('select[name="mascota-esterilizado"]').value = '';
}
