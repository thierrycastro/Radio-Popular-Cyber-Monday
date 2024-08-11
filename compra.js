import {Builder, By, Key} from "selenium-webdriver"
import {should} from "chai"
should()

async function Compra() {
  //TC003.023 - Finalizar uma compra
  
  //DADO que o usuário abra o navegador
  let driver = await new Builder().forBrowser("chrome").build()
  //E navegue até o site
  await driver.get("https://www.radiopopular.pt/cyber-monday/")
  await sleep (1000)

  //E clique no botão "aceitar" do cookie
  await driver.findElement(By.xpath('//*[@id="rp"]/div[4]/div/div/div[2]/div[2]/div[2]/div[1]/button')).click() 
  await sleep (1000)  

  //Quando clicar no card "Smartwatches"
  let Smartwatches = await driver.findElement(By.css("img[title='Smartwatch Cyber Monday']"))
  //Forçar clique usando Actions
  let actions = driver.actions({ bridge: true });
  await actions.move({ origin: Smartwatches }).click().perform();
  await new Promise(resolve => setTimeout(resolve, 2000))  

  //E acessa a página "Smartwatches" (assertion)
  let Smart = await driver.findElement(By.xpath("//h1[normalize-space()='Smartwatches']")).getText()
  Smart.should.equal('SMARTWATCHES')
 
  //E clicar em um card escolhendo um produto para a compra
  let produto = await driver.findElement(By.css("img[title='1322361 - APPLE WATCH ULTRA 2 ALP BL L']"))
  //Forçar clique usando Actions
  await new Promise(resolve => setTimeout(resolve, 2000))
  let actions1 = driver.actions({ bridge: true }); 
  await actions1.move({ origin: produto }).click().perform();

  //E abrir a página demonstrativa do produto (assertion)
  let produto1 = await driver.findElement(By.xpath("//h1[normalize-space()='APPLE WATCH ULTRA 2 ALP BL L']")).getText()
  produto1.should.equal('APPLE WATCH ULTRA 2 ALP BL L')
  
  //E clicar no botão "Comprar"
  await driver.findElement(By.xpath("//div[@class='button buy fl uppercase center-text desktop-only visible']")).click() 
  await sleep (1000)  

  //E abrir a página "REVER CARRINHO DE COMPRAS" demonstrando o produto escolhido e o valor do mesmo
  let carrinho = await driver.findElement(By.xpath("//h1[normalize-space()='Rever carrinho de compras']")).getText()
  carrinho.should.equal('REVER CARRINHO DE COMPRAS')

  //E clicar na opção "Entrega em casa"
  await driver.findElement(By.xpath('//*[@id="domicilio-option"]/label/span[1]')).click() 
  await sleep (1000)  

  //E clicar na caixa de seleção 
  await driver.findElement(By.xpath('//*[@id="zonas_sel_E"]')).click() 
  await sleep (1000)

  await driver.findElement(By.xpath('//*[@id="domicilio-select"]')).click() 
  await sleep (1000)
  
  //E clicar na opção "Continente"
  await driver.findElement(By.xpath('//*[@id="zonas_sel_E"]/option[2]')).click() 
  await sleep (1000)

  //E clicar no botão "Seguir para encomenda"
  await driver.findElement(By.xpath('/html/body/main/div/div[4]/div[8]/div/div[1]')).click() 
  await sleep (1000)

  //E abrir a página "ENTRAR OU CRIAR UMA CONTA" (assertion)
  let entrar = await driver.findElement(By.xpath('//*[@id="logintit"]')).getText()
  entrar.should.equal('ENTRAR OU CRIAR UMA CONTA')

  //E preencher o campo "Endereço de email"
  await driver.findElement(By.xpath("//div[@id='emaillogin']//input[@id='email']")).sendKeys("worktests345@gmail.com", Key.RETURN)
  let emailText = await driver.findElement(By.xpath("//div[@id='emaillogin']//input[@id='email']")).getText()
  .then(function(value) {
    return value
  })  

  //E preencher o campo "Palavra-passe"
  await driver.findElement(By.xpath("//input[@id='password']")).sendKeys("Testestrabalho345", Key.RETURN)
  let passwordText = await driver.findElement(By.xpath("//input[@id='password']")).getText()
  .then(function(value) {
    return value
  })  

  //E clicar no botão "Entrar"
  await driver.findElement(By.xpath('//*[@id="submitlogin"]')).click() 
  await sleep (1000)

  //E abrir a página "Opções de Entrega" (assertion)  

  //E clicar no botão "Continuar"
  await driver.findElement(By.name("bt-seguir")).click() 
  await sleep (1000)

  //E abrir a página "RESUMO DA ENCOMENDA" e não preencher nada dessa tela
  let resumo = await driver.findElement(By.xpath('/html/body/main/div/div[2]/h1')).getText()
  resumo.should.equal('RESUMO DA ENCOMENDA')

  //E descer a página clicar no botão "Continuar"
  await driver.findElement(By.xpath('//*[@id="bt-seguir"]')).click() 
  await sleep (1000)

  //Então o usuário irá acessar a página "FINALIZAÇÃO DA ENCOMENDA" 
  let final = await driver.findElement(By.xpath('/html/body/main/div/div[3]/h1')).getText()
  final.should.equal('FINALIZAÇÃO DA ENCOMENDA')

      
  //Fechar o navegador
  await driver.quit()


  function sleep(ms){
    return new Promise (resolve =>setTimeout(resolve, ms));
  }

}

Compra()

//CLICAR NO RUN PARA RODAR O TESTE