const canvas = document.getElementById('tabuleiro');
const ctx = canvas.getContext('2d');

const tamanho = 50; // Tamanho de cada quadrado
const linhas = 8;
const colunas = 8;

// Desenhar o tabuleiro
for (let linha = 0; linha < linhas; linha++) {
    for (let coluna = 0; coluna < colunas; coluna++) {
        ctx.fillStyle = (linha + coluna) % 2 === 0 ? '#f0d9b5' : '#b58863';
        ctx.fillRect(coluna * tamanho, linha * tamanho, tamanho, tamanho);
    }
}

// Desenhar borda
ctx.lineWidth = 4;
ctx.strokeStyle = 'black';
ctx.strokeRect(0, 0, tamanho * colunas, tamanho * linhas);

// Mapa das peças
const pecas = [
    ['♜', '♞', '♝', '♛', '♚', '♝', '♞', '♜'], // Pretas peças principais
    ['♟', '♟', '♟', '♟', '♟', '♟', '♟', '♟'], // Peões pretos
    ['', '', '', '', '', '', '', ''],          // Vazio
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['♙', '♙', '♙', '♙', '♙', '♙', '♙', '♙'], // Peões brancos
    ['♖', '♘', '♗', '♕', '♔', '♗', '♘', '♖']  // Brancas peças principais
];

// Desenhar peças
ctx.font = '35px Arial';
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';

for (let linha = 0; linha < linhas; linha++) {
    for (let coluna = 0; coluna < colunas; coluna++) {
        const peca = pecas[linha][coluna];
        if (peca !== '') {
            ctx.fillStyle = (peca.charCodeAt(0) < 9817) ? 'black' : 'white'; // Cor da peça
            ctx.fillText(peca, coluna * tamanho + tamanho / 2, linha * tamanho + tamanho / 2);
        }
    }
}