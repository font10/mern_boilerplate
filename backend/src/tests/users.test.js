import app from "../app";
import request from "supertest";
import dotenv from "dotenv";
import mongoose from 'mongoose'
import Palas from "../models/palasModel";

dotenv.config()

describe("Pruebas sobre Api Users", () => {
  
  let palaId = '';
  let token = '';

  beforeAll(async () => {
    await mongoose.connect(process.env.MONGO_URL);
  });

  afterAll(async () => {
      await mongoose.disconnect();
  });

  describe("POST /api/v1/auth/register", () => {
    const newUser = {
      email: "test@mail.com",
      password: "Tests123",
      name: "test",
    };

    it("Should register successfully", async () => {
      const response = await request(app)
        .post("/api/v1/auth/register")
        .set("Content-Type", "application/json")
        .send(newUser);

      expect(response.status).toBe(201);
      expect(response.body.newUser.name).toBe(newUser.name);
      expect(response.body.newUser.email).toBe(newUser.email);
      expect(response.body.newUser.password).not.toBe(newUser.password)
    });

    it("Should say the user exists", async () => {
      const response = await request(app)
        .post("/api/v1/auth/register")
        .set("Content-Type", "application/json")
        .send(newUser);

      expect(response.status).toBe(400);
      expect(response.body.message).toBe("User already exists");
    });
  })

  describe("POST /api/v1/auth/login", () => {
    const user = {
      email: "test@mail.com",
      password: "Tests123",
    };

    const userNotExists = {
      email: "testprova@mail.com",
      password: "Tests123"
    }

    it("Should say the user not exists", async () => {
      const response = await request(app)
        .post("/api/v1/auth/login")
        .set("Content-Type", "application/json")
        .send(userNotExists);

      expect(response.status).toBe(404);
      expect(response.body.message).toBe("User not found. Signup please");
    });

    it("Should be login successfully", async () => {
      const response = await request(app)
        .post("/api/v1/auth/login")
        .set("Content-Type", "application/json")
        .send(user);
        
      expect(response.status).toBe(200);
      expect(response.body).toBeInstanceOf(Object);
      expect(response.body.token).not.toEqual(null)
      token = response.body.token;
    });

    
  })

  describe("GET /api/v1/palas", () => {
    let response;
    beforeEach(async () => {
      response = await request(app).get("/api/v1/palas").send();
    });

    it("The route works", async () => {
      expect(response.status).toBe(200);
      expect(response.headers["content-type"]).toContain("json");
    });

    it("La petición nos devuelve un object", async () => {
      expect(response.body).toBeInstanceOf(Object);
    });

  });

  describe('POST /api/v1/palas', () => {
    const newPala = { 
      marca: "Head",
      modelo: "Delta Pro",
      forma: "Diamante",
      tacto: "Duro"
     };
    const wrongTrip = { nombre: 'test trip' };

    it('Should insert a new pala', async() => {
        const res = await request(app)
        .post('/api/v1/palas')
        .set('Content-Type', 'application/json')
        .set('Authorization', 'Bearer ' + token)
        .send(newPala)
        
        expect(res.statusCode).toBe(201);
        expect(res.body.data.marca).toBe(newPala.marca)
        expect(res.body.data.modelo).toBe(newPala.modelo)
        expect(res.body.data.forma).toBe(newPala.forma)
        expect(res.body.data.tacto).toBe(newPala.tacto)
        palaId = res.body.data._id

    });

    it('Error while creating new pala', async () => {
        const response = await request(app)
          .post('/api/v1/palas')
          .set('Content-Type', 'application/json')
          .set('Authorization', 'Bearer ' + token)
          .send(wrongTrip);

        expect(response.status).toBe(400);
        expect(response.body.error).not.toEqual(null);
    });

  });

  describe('PATCH /api/v1/palas', () => {
    const newPala = { 
      marca: "Head",
      modelo: "Motion Pro",
      forma: "Lágrima",
      tacto: "Duro"
     };
    const wrongTrip = { nombre: 'test trip' };

    it('Should update the pala', async() => {
        const res = await request(app)
        .patch(`/api/v1/palas/` + palaId)
        .set('Content-Type', 'application/json')
        .set('Authorization', 'Bearer ' + token)
        .send(newPala)
        
        console.log(res.body)
        expect(res.statusCode).toBe(200);
        expect(res.body.data).toBeInstanceOf(Object);
        expect(res.body.data._id).toBe(palaId)
    });

    it('Should say error while updating', async () => {
      const response = await request(app)
        .patch(`/api/v1/palas/` + palaId)
        .set('Content-Type', 'application/json')
        .set('Authorization', 'Bearer ' + token)
        .send(wrongTrip);

      expect(response.status).toBe(400);
      expect(response.body.error).not.toEqual(null);
    });

  });

  describe('DELETE /api/v1/palas', () => {
    it('Should show 404 status if id not passed', async() => {      
      const response = await request(app)
        .delete(`/api/v1/palas/`)
        .set('Authorization', 'Bearer ' + token)
        .set('Content-Type', 'application/json')
        .send()
        
        expect(response.status).toBe(404);
    });

    it('Should check if id exists', async() => {      
      const response = await request(app)
        .get(`/api/v1/palas/` + palaId)
        .set('Content-Type', 'application/json')
        .send()
          
        expect(response.status).toBe(200);
        expect(response.body.data._id).toEqual(palaId)
    });

    it('Should delete the pala', async() => {     
      const res = await request(app)
        .delete(`/api/v1/palas/` + palaId)
        .set('Content-Type', 'application/json')
        .set('Authorization', 'Bearer ' + token)
        .send()
        
        expect(res.statusCode).toBe(200);
    });

  });

});


