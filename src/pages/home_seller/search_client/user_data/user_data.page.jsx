const usersData = [
    { nombre: "Tralalero Tralala", documento: "10000001", telefono: "3110000001", correo: "tralalero@example.com" },
    { nombre: "La Vaca Saturno Saturnita", documento: "10000002", telefono: "3110000002", correo: "saturno@example.com" },
    { nombre: "Tun Tun Tun Tun Tun Sahur", documento: "10000003", telefono: "3110000003", correo: "sahur@example.com" },
    { nombre: "Capuccino Assasino", documento: "10000004", telefono: "3110000004", correo: "capuccino@example.com" },
  ];
  
  for (let i = 5; i <= 24; i++) {
    usersData.push({
      nombre: `Usuario ${i}`,
      documento: `100000${i}`,
      telefono: `31100000${i}`,
      correo: `usuario${i}@example.com`,
    });
  }
  
  export default usersData;
  