// const input = document.getElementById("note");
//   const saveBtn = document.getElementById("saveBtn");
//   const saved = document.getElementById("saved");

//   // Load saved note
//   saved.textContent = localStorage.getItem("note") || "";

//   saveBtn.addEventListener("click", () => {
//     localStorage.setItem("note", input.value);
//     saved.textContent = input.value;
//   });

  const btn = document.getElementById("locBtn");
  const p = document.getElementById("location");

  btn.addEventListener("click", () => {
    navigator.geolocation.getCurrentPosition(
      pos => {
        p.textContent = `Lat: ${pos.coords.latitude}, Lng: ${pos.coords.longitude}`;
      },
      err => {
        p.textContent = "Permission denied or error!";
      }
    );
  });