import swaggerJSDoc from "swagger-jsdoc";

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "API de JEMA",
    version: "1.0.0",
    description: "Documentación de la API para el sistema JEMA",
  },
  servers: [
    {
      url: "http://localhost:3000/api",
    },
  ],
};

const options = {
  swaggerDefinition,
  // Rutas a tus archivos de rutas y controladores para que swagger-jsdoc genere la documentación automáticamente
  apis: [
    "./src/routes/*.js",
    "./src/controllers/*.js"
  ],
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;