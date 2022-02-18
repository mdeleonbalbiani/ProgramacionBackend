import express from "express";
import Perimetro from "./Perimetro";
import Superficie from "./Superficie";

const app = express();

app.get("/perimetro/cuadrado", (req, res) => {
    const { lado } = req.query;
    let resultado = Perimetro.cuadrado(Number(lado));
    
    res.json({
        calculo: "perimetro",
        figura: "cuadrado",
        resultado,
    });
});


const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Servidor express Typescript/Webpack en puerto ${PORT}`);
});