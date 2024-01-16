/**
 * @description      :
 * @author           : mario
 * @group            :
 * @created          : 12/01/2023 - 18:23:08
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 12/01/2023
 * - Author          : mario
 * - Modification    :
 **/

import { Response, NextFunction } from "express";
import { DataException } from "../../../config/Exceptions";
import { CustomRequest, User } from "../../../config/Types";

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

// import axios from 'axios';
// import { jsPDF } from 'jspdf';

import fs from 'fs';
import path from 'path';
import puppeteer from 'puppeteer';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

export default {
	async generatePDF(req: CustomRequest, res: Response, next: NextFunction) {
		const bodyData: Object = req.body;
		const userInfo: User = req.User;

		try {
			if (!bodyData) throw new DataException('Invalid or Null request Body', 'TR_JSON_ERROR', 400);

			// let guestTemp: Object = {
			// 	objectData: JSON.stringify(bodyData),
			// 	username: userInfo.userName,
			// 	isDeletable: false
			// };

			// console.log('guestTemp:', guestTemp);

			// return res.status(201).json({
			// 	test: 'test'
			// });

			// const { nomeDaConta, numeroDaConta, urlImagemFachada, urlLogo } = bodyData;

			// const docDefinition = {
			// 	content: [
			// 		`Nome da Conta: ${nomeDaConta}`,
			// 		`Número da Conta: ${numeroDaConta}`
			// 	]
			// };

			// return res.status(201).json({
			// 	docDefinition: { ...docDefinition }
			// });


			let {
				urlLogo,
				NomeShopping,
				ImagemFachada,
				ImagemPlantaPropriedade,
				ImagemPlantaPropriedade2,
				Marca,
				Luc,
				Area,
				Localizacao,
				PrazoContratual,
				Vigencia,
				CTO,
				AluguelPercentual,
				IndiceReajuste,
				FPP,
				CRD,
				RES,
				FormaPagamentoRES,
				MidiaInaugural,
				FormaPagamentoMidiaInaugural,
				Observacoes,
				NomeConsultor,
				EmailConsultor,
				MobileConsultor,
				TelefoneConsultor
			}: {
				urlLogo: string,
				NomeShopping: string,
				ImagemFachada: string,
				ImagemPlantaPropriedade: string,
				ImagemPlantaPropriedade2: string,
				Marca: string,
				Luc: string,
				Area: string,
				Localizacao: string,
				PrazoContratual: string,
				Vigencia: string,
				CTO: string,
				AluguelPercentual: string,
				IndiceReajuste: string,
				FPP: string,
				CRD: string,
				RES: string,
				FormaPagamentoRES: string,
				MidiaInaugural: string,
				FormaPagamentoMidiaInaugural: string,
				Observacoes: string,
				NomeConsultor: string,
				EmailConsultor: string,
				MobileConsultor: string,
				TelefoneConsultor: string
			} = req.body;

			getHTMLForTest('pdfTemp').then(data => {
				let htmlTemp = data;

				Object.keys(req.body).forEach(propertyKey => {
					htmlTemp = htmlTemp.replaceAll(`[${propertyKey}]`, req.body[propertyKey]);
				});

				// let htmlTemp = html;
				// htmlTemp = htmlTemp.replaceAll('[urlLogo]', urlLogo);
				// htmlTemp = htmlTemp.replaceAll('[NomeShopping]', NomeShopping);
				// htmlTemp = htmlTemp.replaceAll('[ImagemFachada]', ImagemFachada);
				// htmlTemp = htmlTemp.replaceAll('[ImagemPlantaPropriedade]', ImagemPlantaPropriedade);
				// htmlTemp = htmlTemp.replaceAll('[ImagemPlantaPropriedade2]', ImagemPlantaPropriedade2);
				// htmlTemp = htmlTemp.replaceAll('[Marca]', Marca);
				// htmlTemp = htmlTemp.replaceAll('[Luc]', Luc);
				// htmlTemp = htmlTemp.replaceAll('[Area]', Area);
				// htmlTemp = htmlTemp.replaceAll('[Localizacao]', Localizacao);
				// htmlTemp = htmlTemp.replaceAll('[PrazoContratual]', PrazoContratual);
				// htmlTemp = htmlTemp.replaceAll('[Vigencia]', Vigencia);
				// htmlTemp = htmlTemp.replaceAll('[CTO]', CTO);
				// htmlTemp = htmlTemp.replaceAll('[AluguelPercentual]', AluguelPercentual);
				// htmlTemp = htmlTemp.replaceAll('[IndiceReajuste]', IndiceReajuste);
				// htmlTemp = htmlTemp.replaceAll('[FPP]', FPP);
				// htmlTemp = htmlTemp.replaceAll('[CRD]', CRD);
				// htmlTemp = htmlTemp.replaceAll('[RES]', RES);
				// htmlTemp = htmlTemp.replaceAll('[FormaPagamentoRES]', FormaPagamentoRES);
				// htmlTemp = htmlTemp.replaceAll('[MidiaInaugural]', MidiaInaugural);
				// htmlTemp = htmlTemp.replaceAll('[FormaPagamentoMidiaInaugural]', FormaPagamentoMidiaInaugural);
				// htmlTemp = htmlTemp.replaceAll('[Observacoes]', Observacoes);
				// htmlTemp = htmlTemp.replaceAll('[NomeConsultor]', NomeConsultor);
				// htmlTemp = htmlTemp.replaceAll('[EmailConsultor]', EmailConsultor);
				// MobileConsultor
				// TelefoneConsultor
				// htmlTemp = htmlTemp.replaceAll('[nomeDaConta]', nomeDaConta);
				// htmlTemp = htmlTemp.replaceAll('[numeroDaConta]', numeroDaConta);
				// htmlTemp = htmlTemp.replaceAll('[urlImagemFachada]', urlImagemFachada);

				generatePDF(htmlTemp)
					.then(pdf => {
						res.setHeader('Content-Type', 'application/pdf');
						res.send(pdf);
					});
			}).catch(err => {
				console.log(err);
			});




			// console.log('1)', htmlTemp);

			// // Renderiza o HTML em um elemento temporário
			// const tempElement = document.createElement('html');
			// tempElement.outerHTML = htmlTemp;
			// console.log('2)', tempElement);
			// document.body.appendChild(tempElement);
			// console.log('3)', document);

			// // Converte o HTML para um canvas usando html2canvas
			// const canvas = await html2canvas(tempElement);

			// // Remove o elemento temporário
			// document.body.removeChild(tempElement);

			// // Cria um novo documento PDF com orientação paisagem
			// const pdf = new jsPDF('landscape');

			// // Adiciona a imagem do canvas ao PDF
			// const imgData = canvas.toDataURL('image/png');
			// pdf.addImage(imgData, 'PNG', 0, 0, pdf.internal.pageSize.getWidth(), pdf.internal.pageSize.getHeight());

			// // Obtém a string de dados do PDF
			// const pdfData = pdf.output('datauristring');

			// // Define o cabeçalho da resposta e envia o PDF
			// res.setHeader('Content-Type', 'application/pdf');
			// res.send(pdfData);







			// const doc = new jsPDF();
			// console.log('doc', doc);

			// doc.text(`Nome da Conta: ${nomeDaConta}`, 10, 10);
			// doc.text(`Número da Conta: ${numeroDaConta}`, 10, 20);
			// // Adicione o código para inserir as imagens aqui

			// const pdf = doc.output('datauristring');

			// console.log('pdf', pdf);

			// res.setHeader('Content-Type', 'application/pdf');
			// res.send(pdf);
		} catch (error: Object | any) {
			console.log(error.name)
			let statusCode: number = 500;

			if (error.name === 'CastError') statusCode = 400;
			error.statusCode && (statusCode = error.statusCode);

			return res.status(statusCode).json({
				statusCode,
				errorMessage: "An error occurred generating PDF",
				error
			});
		}
	}
};







// Método usado apenas para testes
function getHTMLForTest(fileName: string): Promise<string> {
	let filePath = path.join(__dirname, `${fileName}.html`);

	return new Promise((resolve, reject) => {
		fs.readFile(filePath, 'utf8', function (err: NodeJS.ErrnoException | null, data: string | Buffer) {
			if (err) {
				console.error(err);
				resolve('');
			} else {
				// console.log(data);
				resolve(data.toString());
			}
		});
	});
}










async function generatePDF(html: string) {
	// Inicia o navegador Puppeteer
	const browser = await puppeteer.launch();
	const page = await browser.newPage();

	// Define o conteúdo da página para o HTML fornecido
	await page.setContent(html);

	// Gera o PDF
	const pdf = await page.pdf({ format: 'A4', orientation: 'landscape' });

	// Fecha o navegador Puppeteer
	await browser.close();

	return pdf;
}












// import html2canvas from 'html2canvas';

// async function generatePDF(html: string, res: Response) {
// 	// Renderiza o HTML em um elemento temporário
// 	const tempElement = document.createElement('div');
// 	tempElement.innerHTML = html;
// 	document.body.appendChild(tempElement);

// 	// Converte o HTML para um canvas usando html2canvas
// 	const canvas = await html2canvas(tempElement);

// 	// Remove o elemento temporário
// 	document.body.removeChild(tempElement);

// 	// Cria um novo documento PDF com orientação paisagem
// 	const pdf = new jsPDF('landscape');

// 	// Adiciona a imagem do canvas ao PDF
// 	const imgData = canvas.toDataURL('image/png');
// 	pdf.addImage(imgData, 'PNG', 0, 0, pdf.internal.pageSize.getWidth(), pdf.internal.pageSize.getHeight());

// 	// Obtém a string de dados do PDF
// 	const pdfData = pdf.output('datauristring');

// 	// Define o cabeçalho da resposta e envia o PDF
// 	res.setHeader('Content-Type', 'application/pdf');
// 	res.send(pdfData);
// }











// import html2canvas from 'html2canvas';

// async function generatePDF(html: string) {
//     // Renderiza o HTML em um elemento temporário
//     const tempElement = document.createElement('div');
//     tempElement.innerHTML = html;
//     document.body.appendChild(tempElement);

//     // Converte o HTML para um canvas usando html2canvas
//     const canvas = await html2canvas(tempElement);

//     // Remove o elemento temporário
//     document.body.removeChild(tempElement);

//     // Cria um novo documento PDF com orientação paisagem
//     const pdf = new jsPDF('landscape');

//     // Adiciona a imagem do canvas ao PDF
//     const imgData = canvas.toDataURL('image/png');
//     pdf.addImage(imgData, 'PNG', 0, 0, pdf.internal.pageSize.getWidth(), pdf.internal.pageSize.getHeight());

//     // Salva o PDF
//     pdf.save('output.pdf');
// }

// // Exemplo de uso
// generatePDF('<h1>Olá, mundo!</h1>');













// import express from 'express';
// import bodyParser from 'body-parser';


// const app = express();
// app.use(bodyParser.json());

// app.post('/gerar-pdf', (req, res) => {
//     const { nomeDaConta, numeroDaConta, urlImagemFachada, urlLogo } = req.body;

//     const docDefinition = {
//         content: [
//             `Nome da Conta: ${nomeDaConta}`,
//             `Número da Conta: ${numeroDaConta}`,
//             {
//                 image: urlLogo,
//                 width: 100,
//                 alignment: 'center'
//             },
//             {
//                 image: urlImagemFachada,
//                 width: 500,
//                 alignment: 'center'
//             }
//         ]
//     };

//     const pdfDoc = pdfMake.createPdf(docDefinition);
//     pdfDoc.getBuffer((buffer) => {
//         res.type('pdf');
//         res.send(buffer);
//     });
// });

// app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
