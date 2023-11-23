import app from "../app";
import request from "supertest";
import dotenv from "dotenv";
import mongoose from 'mongoose'

dotenv.config()

describe("Pruebas sobre Api Users", () => {

  beforeAll(async () => {
    await mongoose.connect(process.env.MONGO_URL);
  });

  afterAll(async () => {
      await mongoose.disconnect();
  });

  describe("GET /api/v1/palas", () => {
    let response;
    beforeEach(async () => {
      response = await request(app).get("/api/v1/palas").send();
    });

    it("La ruta funciona", async () => {
      expect(response.status).toBe(200);
      expect(response.headers["content-type"]).toContain("json");
    });

    it("La petición nos devuelve un array de trips", async () => {
      expect(response.body).toBeInstanceOf(Object);
    });

  });

  describe('POST /api/v1/palas', () => {
    const newTrip = {
      marca: "GF Padel",
      modelo: "Slam",
      forma: "Diamante",
      tacto: "Medio-Duro"
    };
    const wrongTrip = { nombre: 'test trip' };
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NWM5OGQ1MjQzZGZhODM1YzA3OTY4ZiIsImlhdCI6MTcwMDc2MzA3NywiZXhwIjoxNzAwNzgxMDc3fQ.MlVeFuYrtzjec_kRDXnsMluTrJwIQDF2sH_3Tt6Ch9s'
    
    let response;
    beforeEach(async () => {
      response = await request(app).get("/api/v1/palas")
      .set({ Authorization: token })
      .send(newTrip);
    });
    /*afterAll(async () => {
        await User.deleteMany({ name: 'test trip' });
    });*/
    
    /*let cookie = '';
    beforeAll(async() => {
      const response = await request(app).post('/api/v1/auth/login').send({
        email: 'provaemail@mail.com',
        password: 'Prova123'
      });
      console.log(response.headers['set-cookie'])
      cookie = response.headers['set-cookie'].split('=')[1].split(';')[0]
    })*/

    it('La ruta funciona', async () => {
      expect(response.status).toBe(200);
      expect(response.headers['content-type']).toContain('json');
    });

    /*it('Se inserta correctamente', async () => {
        const response = await request(app).post('/api/v1/users').send(newTrip);

        expect(response.body._id).toBeDefined();
        expect(response.body.name).toBe(newTrip.name);
    });

    it('Error en la inserción', async () => {
        const response = await request(app).post('/api/v1/users').send(wrongTrip);

        expect(response.status).toBe(500);
        expect(response.body.error).toBeDefined();
    });*/

  });

});


