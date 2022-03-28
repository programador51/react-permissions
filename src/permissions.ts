const permissions = [
  {
    name: "Directorio",
    id: "cd89a7a9-066d-4961-afc6-0d6d190ff97b",
    items: [
      {
        name: "Buscar",
        id: "787ef47a-8af3-40aa-b811-a230aa543151"
      },
      {
        name: "Agregar",
        id: "e4e2933f-9859-4d23-b747-c4d5a7a8a1e4",
        items: [
          {
            name: 'Asociar corporativo',
            id: "7a7418f1-0904-4e9f-984f-ea086799779c"
          },
          {
            name: 'Insertar',
            id: "86fa36b9-c20f-485b-a5f9-f521e7ce01d8"
          }
        ],
      },
      {
        name: "Pagos",
        id: "f304c37e-daa8-456a-8f2b-5b9806622bdd"
      },
    ],
  },
  {
    name: "Bancos",
    id: "299d8d69-5525-4b2a-b824-47947008853e",
    items: [
      {
        name: "Agregar",
        id: "78dc3e8a-6c74-45a1-b732-d598542f3439"
      },
      {
        name: "Movimientos",
        id: "151bb9ae-1162-43c6-beb5-c804a5766e84",
        items: [
          {
            name: "Buscar",
            id: "17ab6490-94ca-47ec-b726-e380548e73e5"
          },
          {
            name: "Agregar ingreso",
            id: "23beca91-4544-43ff-8f54-08f492c69adc"
          },
          {
            name: "Agregar egreso",
            id: "c3ccc069-cb68-4af8-be59-a3563528be51"
          },
          {
            name: "Editar ingreso",
            id: "22ca701a-3f41-4691-b05a-5916a24a2453",
            items: [
              {
                name: "Asociar cliente",
                id: "cb22cb3d-61be-4c51-bb83-88501de15de6"
              },
              {
                name: "Asociar documento",
                id: "7b886d06-ef28-4268-92ad-958077cf5742"
              },
              {
                name: "Actualizar",
                id: "8185141a-35f2-41fc-94d4-26d83f071006"
              }
            ]
          }
        ]
      }
    ]
  },
];

export default permissions;