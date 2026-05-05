export interface Conta {
    titular: string,
    cpf: string,
    tipoConta: string,
    valorDeposito: number
    limiteConta?: number
    taxaRendimento?: number
}