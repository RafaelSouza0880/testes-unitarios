import { describe, it, expect} from "vitest"
import { calcularMensalidade } from "./mensalidade";

describe("calculo de mensalidade", () => {
    it("deve aplicar 10% de desconto", () => {
        //Arrange(Preparar)
        const valor = 100;
        const desconto = 10;

        //Act(Agir)
        const resultado = calcularMensalidade(valor, desconto)

        //Assert(Verificar)
        expect(resultado).toBe(90)
    })
})

