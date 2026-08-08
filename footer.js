document.addEventListener("DOMContentLoaded", function () {

  const footer = document.querySelector("footer");

  if (!footer) return;

  footer.innerHTML = `
    <div class="wrap foot">

      <div>
        <strong>
          Cyber<span>X</span> Academy
        </strong>

        <p>
          Learn • Practice • Secure
        </p>
      </div>

      <div>

        <a href="mailto:support.cyberxacademy@gmail.com">
          support.cyberxacademy@gmail.com
        </a>

        <p>
          © CyberX Academy. 2026. All Rights Reserved.
        </p>

      </div>

    </div>
  `;

});
