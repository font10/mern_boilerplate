import app from "../app";
import request from "supertest";
import dotenv from "dotenv";
import mongoose from 'mongoose'
import User from '../models/usersModel.js'
import cookieParser from 'cookie-parser'

dotenv.config()



describe("Pruebas sobre Api Users", () => {

  beforeAll(async () => {
    await mongoose.connect(process.env.MONGO_URL);
  });

  afterAll(async () => {
      await mongoose.disconnect();
  });

  describe("GET /api/v1/users", () => {
    let response;
    beforeEach(async () => {
      response = await request(app).get("/api/v1/users").send();
    });

    it("La ruta funciona", async () => {
      expect(response.status).toBe(200);
      expect(response.headers["content-type"]).toContain("json");
    });

    it("La petición nos devuelve un array de trips", async () => {
      expect(response.body).toBeInstanceOf(Object);
    });

  });

  describe('POST /api/v1/users', () => {
    const newTrip = { name: 'test trip', email: 'trip@mail.com', password: 'Prova123' };
    const wrongTrip = { nombre: 'test trip' };

    /*afterAll(async () => {
        await User.deleteMany({ name: 'test trip' });
    });*/
    
    let cookie = '';
    beforeAll(async() => {
      const response = await request(app).post('/api/v1/auth/login').send({
        email: 'provaemail@mail.com',
        password: 'Prova123'
      });
      cookie = response.headers['set-cookie'][0].split('=')[1].split(';')[0]
    })

    it('La ruta funciona', async () => {
      const response = await request(app)
        .post('/api/v1/users')
        .set('token', cookie)
        .send(newTrip);


      expect(response.status).toBe(201);
      expect(response.headers['content-type']).toContain('json');
    }, 30000);

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


