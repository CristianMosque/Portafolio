// Animaciones estratégicas con JavaScript

document.addEventListener("DOMContentLoaded", function () {
    // Selecciona todos los elementos que deseas animar al hacer scroll
    const animElements = document.querySelectorAll(".anim-trigger");
  
    // Configuración del Intersection Observer
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Agrega las clases de animación de Animate.css
            entry.target.classList.add("animate__animated", "animate__fadeInUp");
            // Una vez animado, deja de observar el elemento
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
  
    // Observa cada elemento con la clase .anim-trigger
    animElements.forEach((el) => observer.observe(el));
  
    // Efecto de pulso para botones al pasar el mouse
    const buttons = document.querySelectorAll(".btn-primary, .btn-secondary");
    buttons.forEach((btn) => {
      btn.addEventListener("mouseenter", () => {
        btn.classList.add("animate__animated", "animate__pulse");
      });
      btn.addEventListener("mouseleave", () => {
        btn.classList.remove("animate__animated", "animate__pulse");
      });
    });


       // Botón para descargar el CV (btn-secondary)
       const btnDescargarCV = document.querySelector(".btn-secondary");
       // Botón Contrátame (btn-primary)
       const btnContratame = document.querySelector(".btn-primary");
   
       btnDescargarCV.addEventListener("click", function(e) {
         e.preventDefault();
         // Crea un enlace oculto para iniciar la descarga
         const enlaceCV = document.createElement("a");
         enlaceCV.href = "https://drive.google.com/file/d/1Gt3DEV1ZJwT8Hh7X_IpK7NwG9pqJrdTo/view?usp=sharing"; // Ruta a tu archivo PDF
         enlaceCV.download = "CV_Cristian_Mosquera.pdf";
         console.log("si hay click")
         document.body.appendChild(enlaceCV);
         enlaceCV.click();
         document.body.removeChild(enlaceCV);
       });
   
       btnContratame.addEventListener("click", function(e) {
         e.preventDefault();
         // Redirige a un mailto: o a la sección de contacto, según prefieras
         window.location.href = "mailto:correo@example.com?subject=Oportunidad%20Laboral";
       });
  });
  