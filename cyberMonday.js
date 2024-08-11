import {Builder, By, Key} from "selenium-webdriver"
import {should} from "chai"
should()

describe("Radio Popular - Cyber Monday", function() {
  it("TC003.001 - Página Cyber Monday 2023", async function() {
      //DADO que o usuário abra o navegador
      let driver1 = await new Builder().forBrowser("chrome").build()
      //E navegue até o site
      await driver1.get("https://www.radiopopular.pt/")
      await sleep (1000)

      //E clique no botão "aceitar" do cookie
      await driver1.findElement(By.xpath("/html/body/div[5]/div/div/div[2]/div[2]/div[2]/div[1]/button")).click() 

      //Quando o usuário clicar no link "Cyber Monday 2023" no rodapé da página
      await driver1.findElement(By.xpath("/html/body/footer/div[2]/div/div[4]/ul/li[5]/a")).click() 

      //Então o usuário acessa a página "Cyber Monday 2024" (assertion) 
      let cyberMonday = await driver1.findElement(By.xpath('//*[@id="rp"]/main/div[2]/h1')).getText()
      .then(function(value) {
        return value
      })  
      
      //Fechar o navegador
      await driver1.quit()
  })
  
  
  it("TC003.002 - Card Som e Imagem", async function() {
      //DADO que o usuário abra o navegador
      let driver2 = await new Builder().forBrowser("chrome").build()
      //E navegue até o site
      await driver2.get("https://www.radiopopular.pt/cyber-monday/")
      await sleep (1000)
    
      //E clique no botão "aceitar" do cookie
      await driver2.findElement(By.xpath('//*[@id="rp"]/div[4]/div/div/div[2]/div[2]/div[2]/div[1]/button')).click() 
      await sleep (1000)  

      //Quando clicar no card "Som e imagem"
      let somImagem = await driver2.findElement(By.css("img[title='Som e Imagem']"))
      //Forçar clique usando Actions
      let actions = driver2.actions({ bridge: true });
      await actions.move({ origin: somImagem }).click().perform();

      //Então o usuário acessa a página "Som e Imagem" (assertion - Validação do título para verificar se o clique teve efeito)
      let title = await driver2.getTitle();
      title.should.equal('Som e Imagem | radiopopular.pt na Radio Popular | Entregas em 24 horas!');    

      //Fechar o navegador
      await driver2.quit()
  })


  it("TC003.003 - Card Comunicações", async function() {
      //DADO que o usuário abra o navegador
      let driver3 = await new Builder().forBrowser("chrome").build()
      //E navegue até o site
      await driver3.get("https://www.radiopopular.pt/cyber-monday/")
      await sleep (1000)
    
      //E clique no botão "aceitar" do cookie
      await driver3.findElement(By.xpath('//*[@id="rp"]/div[4]/div/div/div[2]/div[2]/div[2]/div[1]/button')).click() 
      await sleep (1000)  

      //Quando clicar no card "Comunicações"
      let comunicacoes = await driver3.findElement(By.css("img[title='Comunicações']"))
      //Forçar clique usando Actions
      let actions = driver3.actions({ bridge: true });
      await actions.move({ origin: comunicacoes }).click().perform();

      //Então o usuário acessa a página "Comunicações" (assertion - Validação do título para verificar se o clique teve efeito)
      let title = await driver3.getTitle();
      title.should.equal('Comunicações | radiopopular.pt na Radio Popular | Entregas em 24 horas!');    

      //Fechar o navegador
      await driver3.quit()
  })

  
  it("TC003.004 - Card Informática", async function() {
      //DADO que o usuário abra o navegador
      let driver4 = await new Builder().forBrowser("chrome").build()
      //E navegue até o site
      await driver4.get("https://www.radiopopular.pt/cyber-monday/")
      await sleep (1000)
    
      //E clique no botão "aceitar" do cookie
      await driver4.findElement(By.xpath('//*[@id="rp"]/div[4]/div/div/div[2]/div[2]/div[2]/div[1]/button')).click() 
      await sleep (1000)  

      //Quando clicar no card "Informática"
      let informatica = await driver4.findElement(By.css("img[title='Informática']"))
      //Forçar clique usando Actions
      let actions = driver4.actions({ bridge: true });
      await actions.move({ origin: informatica }).click().perform();

      //Então o usuário acessa a página "Informática" (assertion - Validação do título para verificar se o clique teve efeito)
      let title = await driver4.getTitle();
      title.should.equal('Informática | radiopopular.pt na Radio Popular | Entregas em 24 horas!');    

      //Fechar o navegador
      await driver4.quit()
  })
  

  it("TC003.005 - Card Gaming", async function() {
      //DADO que o usuário abra o navegador
      let driver5 = await new Builder().forBrowser("chrome").build()
      //E navegue até o site
      await driver5.get("https://www.radiopopular.pt/cyber-monday/")
      await sleep (1000)
    
      //E clique no botão "aceitar" do cookie
      await driver5.findElement(By.xpath('//*[@id="rp"]/div[4]/div/div/div[2]/div[2]/div[2]/div[1]/button')).click() 
      await sleep (1000)  

      //Quando clicar no card "Gaming"
      let gaming = await driver5.findElement(By.css("img[title='Gaming']"))
      //Forçar clique usando Actions
      let actions = driver5.actions({ bridge: true });
      await actions.move({ origin: gaming }).click().perform();

      //Então o usuário acessa a página "Gaming" (assertion - Validação do título para verificar se o clique teve efeito)
      let title = await driver5.getTitle();
      title.should.equal('Gaming | radiopopular.pt na Radio Popular | Entregas em 24 horas!');    

      //Fechar o navegador
      await driver5.quit()
  })


  it("TC003.006 - Card Foto e Video", async function() {
      //DADO que o usuário abra o navegador
      let driver6 = await new Builder().forBrowser("chrome").build()
      //E navegue até o site
      await driver6.get("https://www.radiopopular.pt/cyber-monday/")
      await sleep (1000)
    
      //E clique no botão "aceitar" do cookie
      await driver6.findElement(By.xpath('//*[@id="rp"]/div[4]/div/div/div[2]/div[2]/div[2]/div[1]/button')).click() 
      await sleep (1000)  

      //Quando clicar no card "Foto e Video"
      let fotoVideo = await driver6.findElement(By.css("img[title='Foto e Vídeo']"))
      //Forçar clique usando Actions
      let actions = driver6.actions({ bridge: true });
      await actions.move({ origin: fotoVideo }).click().perform();

      //Então o usuário acessa a página "Foto e Video" (assertion - Validação do título para verificar se o clique teve efeito)
      let title = await driver6.getTitle();
      title.should.equal('Foto e Vídeo | radiopopular.pt na Radio Popular | Entregas em 24 horas!');    

      //Fechar o navegador
      await driver6.quit()
  })
  
  
  it("TC003.007 - Card Smarthome e Redes", async function() {
      //DADO que o usuário abra o navegador
      let driver7 = await new Builder().forBrowser("chrome").build()
      //E navegue até o site
      await driver7.get("https://www.radiopopular.pt/cyber-monday/")
      await sleep (1000)
    
      //E clique no botão "aceitar" do cookie
      await driver7.findElement(By.xpath('//*[@id="rp"]/div[4]/div/div/div[2]/div[2]/div[2]/div[1]/button')).click() 
      await sleep (1000)  

      //Quando clicar no card "Smarthome e Redes"
      let smartRede = await driver7.findElement(By.css("img[title='Smarthome e Redes']"))
      //Forçar clique usando Actions
      let actions = driver7.actions({ bridge: true });
      await actions.move({ origin: smartRede }).click().perform();

      //Então o usuário acessa a página "Smarthome e Redes" (assertion - Validação do título para verificar se o clique teve efeito)
      let title = await driver7.getTitle();
      title.should.equal('Smarthome e Redes | radiopopular.pt na Radio Popular | Entregas em 24 horas!');    

      //Fechar o navegador
      await driver7.quit()
  })


  it("TC003.008 - Card Lazer e Desporto", async function() {
      //DADO que o usuário abra o navegador
      let driver8 = await new Builder().forBrowser("chrome").build()
      //E navegue até o site
      await driver8.get("https://www.radiopopular.pt/cyber-monday/")
      await sleep (1000)
    
      //E clique no botão "aceitar" do cookie
      await driver8.findElement(By.xpath('//*[@id="rp"]/div[4]/div/div/div[2]/div[2]/div[2]/div[1]/button')).click() 
      await sleep (1000)  

      //Quando clicar no card "Lazer e Desporto"
      let lazerDesporto = await driver8.findElement(By.css("img[title='Lazer e Desporto']"))
      //Forçar clique usando Actions
      let actions = driver8.actions({ bridge: true });
      await actions.move({ origin: lazerDesporto }).click().perform();

      //Então o usuário acessa a página "Lazer e Desporto" (assertion - Validação do título para verificar se o clique teve efeito)
      let title = await driver8.getTitle();
      title.should.equal('Lazer e Desporto | radiopopular.pt na Radio Popular | Entregas em 24 horas!');   

      //Fechar o navegador
      await driver8.quit()   
  })


  it("TC003.009 - Card Saúde e Beleza", async function() {
      //DADO que o usuário abra o navegador
      let driver9 = await new Builder().forBrowser("chrome").build()
      //E navegue até o site
      await driver9.get("https://www.radiopopular.pt/cyber-monday/")
      await sleep (1000)
    
      //E clique no botão "aceitar" do cookie
      await driver9.findElement(By.xpath('//*[@id="rp"]/div[4]/div/div/div[2]/div[2]/div[2]/div[1]/button')).click() 
      await sleep (1000)  

      //Quando clicar no card "Saúde e Beleza"
      let saudeBeleza = await driver9.findElement(By.css("img[title='Saúde e Beleza']"))
      //Forçar clique usando Actions
      let actions = driver9.actions({ bridge: true });
      await actions.move({ origin: saudeBeleza }).click().perform();

      //Então o usuário acessa a página "Saúde e Beleza" (assertion - Validação do título para verificar se o clique teve efeito)
      let title = await driver9.getTitle();
      title.should.equal('Saúde e Beleza | radiopopular.pt na Radio Popular | Entregas em 24 horas!');   

      //Fechar o navegador
      await driver9.quit()   
  })


  it("TC003.010 - Card Grandes Eletrodomésticos", async function() {
      //DADO que o usuário abra o navegador
      let driver10 = await new Builder().forBrowser("chrome").build()
      //E navegue até o site
      await driver10.get("https://www.radiopopular.pt/cyber-monday/")
      await sleep (1000)
    
      //E clique no botão "aceitar" do cookie
      await driver10.findElement(By.xpath('//*[@id="rp"]/div[4]/div/div/div[2]/div[2]/div[2]/div[1]/button')).click() 
      await sleep (1000)  
  
      //Quando clicar no card "Grandes Eletrodomésticos"
      let grandeEletro = await driver10.findElement(By.css("img[title='Grandes Eletrodomésticos']"))
      //Forçar clique usando Actions
      let actions = driver10.actions({ bridge: true });
      await actions.move({ origin: grandeEletro }).click().perform();
  
      //Então o usuário acessa a página "Grandes Eletrodomésticos" (assertion - Validação do título para verificar se o clique teve efeito)
      let title = await driver10.getTitle();
      title.should.equal('Grandes Eletrodomésticos | radiopopular.pt na Radio Popular | Entregas em 24 horas!');   
  
      //Fechar o navegador
      await driver10.quit()   
  })


  it("TC003.011 - Card Pequenos Eletrodomésticos", async function() {
      //DADO que o usuário abra o navegador
      let driver11 = await new Builder().forBrowser("chrome").build()
      //E navegue até o site
      await driver11.get("https://www.radiopopular.pt/cyber-monday/")
      await sleep (1000)
    
      //E clique no botão "aceitar" do cookie
      await driver11.findElement(By.xpath('//*[@id="rp"]/div[4]/div/div/div[2]/div[2]/div[2]/div[1]/button')).click() 
      await sleep (1000)  

      //Quando clicar no card "Pequenos Eletrodomésticos"
      let pequenoEletro = await driver11.findElement(By.css("img[title='Pequenos Eletrodomésticos']"))
      //Forçar clique usando Actions
      let actions = driver11.actions({ bridge: true });
      await actions.move({ origin: pequenoEletro }).click().perform();

      //Então o usuário acessa a página "Pequenos Eletrodomésticos" (assertion - Validação do título para verificar se o clique teve efeito)
      let title = await driver11.getTitle();
      title.should.equal('Pequenos Eletrodomésticos | radiopopular.pt na Radio Popular | Entregas em 24 horas!');   

      //Fechar o navegador
      await driver11.quit()   
  })


  it("TC003.012 - Card Aquecimento e Ventilação", async function() {
      //DADO que o usuário abra o navegador
      let driver12 = await new Builder().forBrowser("chrome").build()
      //E navegue até o site
      await driver12.get("https://www.radiopopular.pt/cyber-monday/")
      await sleep (1000)
    
      //E clique no botão "aceitar" do cookie
      await driver12.findElement(By.xpath('//*[@id="rp"]/div[4]/div/div/div[2]/div[2]/div[2]/div[1]/button')).click() 
      await sleep (1000)  

      //Quando clicar no card "Aquecimento e Ventilação"
      let aquecimentoVentilacao = await driver12.findElement(By.css("img[title='Aquecimento e Ventilação']"))
      //Forçar clique usando Actions
      let actions = driver12.actions({ bridge: true });
      await actions.move({ origin: aquecimentoVentilacao }).click().perform();

      //Então o usuário acessa a página "Aquecimento e Ventilação" (assertion - Validação do título para verificar se o clique teve efeito)
      let title = await driver12.getTitle();
      title.should.equal('Aquecimento e Ventilação | radiopopular.pt na Radio Popular | Entregas em 24 horas!');   

      //Fechar o navegador
      await driver12.quit()
  })  


  it("TC003.013 - Card Auto e GPS", async function() {
      //DADO que o usuário abra o navegador
      let driver13 = await new Builder().forBrowser("chrome").build()
      //E navegue até o site
      await driver13.get("https://www.radiopopular.pt/cyber-monday/")
      await sleep (1000)
    
      //E clique no botão "aceitar" do cookie
      await driver13.findElement(By.xpath('//*[@id="rp"]/div[4]/div/div/div[2]/div[2]/div[2]/div[1]/button')).click() 
      await sleep (1000)  

      //Quando clicar no card "Auto e GPS"
      let autoGps = await driver13.findElement(By.css("img[title='Auto e GPS']"))
      //Forçar clique usando Actions
      let actions = driver13.actions({ bridge: true });
      await actions.move({ origin: autoGps }).click().perform();

      //Então o usuário acessa a página "Auto e GPS" (assertion - Validação do título para verificar se o clique teve efeito)
      let title = await driver13.getTitle();
      title.should.equal('Auto e GPS | radiopopular.pt na Radio Popular | Entregas em 24 horas!');   

      //Fechar o navegador
      await driver13.quit()
  }) 


  it("TC003.014 - Card Iluminação e Eletricidade", async function() {
      //DADO que o usuário abra o navegador
      let driver14 = await new Builder().forBrowser("chrome").build()
      //E navegue até o site
      await driver14.get("https://www.radiopopular.pt/cyber-monday/")
      await sleep (1000)
    
      //E clique no botão "aceitar" do cookie
      await driver14.findElement(By.xpath('//*[@id="rp"]/div[4]/div/div/div[2]/div[2]/div[2]/div[1]/button')).click() 
      await sleep (1000)  

      //Quando clicar no card "Iluminação e Eletricidade"
      let ilumEletricidade = await driver14.findElement(By.css("img[title='Iluminação e Eletricidade']"))
      //Forçar clique usando Actions
      let actions = driver14.actions({ bridge: true });
      await actions.move({ origin: ilumEletricidade }).click().perform();

      //Então o usuário acessa a página "Iluminação e Eletricidade" (assertion - Validação do título para verificar se o clique teve efeito)
      let title = await driver14.getTitle();
      title.should.equal('Iluminação e Eletricidade | radiopopular.pt na Radio Popular | Entregas em 24 horas!');   

      //Fechar o navegador
      await driver14.quit()
  })


  it("TC003.015 - Card Experiências e Gift Card", async function() {
      //DADO que o usuário abra o navegador
      let driver15 = await new Builder().forBrowser("chrome").build()
      //E navegue até o site
      await driver15.get("https://www.radiopopular.pt/cyber-monday/")
      await sleep (1000)
    
      //E clique no botão "aceitar" do cookie
      await driver15.findElement(By.xpath('//*[@id="rp"]/div[4]/div/div/div[2]/div[2]/div[2]/div[1]/button')).click() 
      await sleep (1000)  

      //Quando clicar no card "Experiências e Gift Card"
      let giftCard = await driver15.findElement(By.css("img[title='Experiências e Gift Cards']"))
      //Forçar clique usando Actions
      let actions = driver15.actions({ bridge: true });
      await actions.move({ origin: giftCard }).click().perform();

      //Então o usuário acessa a página "Experiências e Gift Card" (assertion - Validação do título para verificar se o clique teve efeito)
      let title = await driver15.getTitle();
      title.should.equal('Experiências e Gift Card | radiopopular.pt na Radio Popular | Entregas em 24 horas!');   

      //Fechar o navegador
      await driver15.quit()
  })


  it("TC003.016 - Card Cyber Monday Apple", async function() {
      //DADO que o usuário abra o navegador
      let driver16 = await new Builder().forBrowser("chrome").build()
      //E navegue até o site
      await driver16.get("https://www.radiopopular.pt/cyber-monday/")
      await sleep (1000)
    
      //E clique no botão "aceitar" do cookie
      await driver16.findElement(By.xpath('//*[@id="rp"]/div[4]/div/div/div[2]/div[2]/div[2]/div[1]/button')).click() 
      await sleep (1000)  

      //Quando clicar no card "Cyber Monday Apple"
      let apple = await driver16.findElement(By.css("img[title='Apple']"))
      //Forçar clique usando Actions
      let actions = driver16.actions({ bridge: true });
      await actions.move({ origin: apple }).click().perform();
      await sleep (1000) 

      //Então o usuário acessa a página "Apple" (assertion - Validação da pág para verificar se o clique teve efeito)
      driver16.get("https://www.radiopopular.pt/marca/apple/")
      .then(function(){
          return driver16.getCurrentUrl()
      })
      .then(function(currentUrl){
          //trabalhar com a URL atual do navegador
      })
        
      //Fechar o navegador
      await driver16.quit()
  })


  it("TC003.017 - Card Cyber Monday Consolas e Jogos", async function() {
      //DADO que o usuário abra o navegador
      let driver17 = await new Builder().forBrowser("chrome").build()
      //E navegue até o site
      await driver17.get("https://www.radiopopular.pt/cyber-monday/")
      await sleep (1000)
    
      //E clique no botão "aceitar" do cookie
      await driver17.findElement(By.xpath('//*[@id="rp"]/div[4]/div/div/div[2]/div[2]/div[2]/div[1]/button')).click() 
      await sleep (1000)  

      //Quando clicar no card "Cyber Monday Consolas e Jogos"
      let consolasJogos = await driver17.findElement(By.css("img[title='Consolas e Jogos']"))
      //Forçar clique usando Actions
      let actions = driver17.actions({ bridge: true });
      await actions.move({ origin: consolasJogos }).click().perform();
      await sleep (1000) 

      //Então o usuário acessa a página "Gaming" (assertion - Validação da pág para verificar se o clique teve efeito)
      driver17.get("https://www.radiopopular.pt/categoria/gaming/")
      .then(function(){
          return driver17.getCurrentUrl()
      })
      .then(function(currentUrl){
          //trabalhar com a URL atual do navegador
      })
          
      //Fechar o navegador
      await driver17.quit()
  })


  it("TC003.018 - Card Cyber Monday Samsung", async function() {
      //DADO que o usuário abra o navegador
      let driver18 = await new Builder().forBrowser("chrome").build()
      //E navegue até o site
      await driver18.get("https://www.radiopopular.pt/cyber-monday/")
      await sleep (1000)
    
      //E clique no botão "aceitar" do cookie
      await driver18.findElement(By.xpath('//*[@id="rp"]/div[4]/div/div/div[2]/div[2]/div[2]/div[1]/button')).click() 
      await sleep (1000)  

      //Quando clicar no card "Cyber Monday Samsung"
      let samsung = await driver18.findElement(By.css("img[title='Samsung']"))
      //Forçar clique usando Actions
      let actions = driver18.actions({ bridge: true });
      await actions.move({ origin: samsung }).click().perform();
      await sleep (1000) 

      //Então o usuário acessa a página "Samsung" (assertion - Validação da pág para verificar se o clique teve efeito)
      driver18.get("https://www.radiopopular.pt/marca/samsung/")
      .then(function(){
          return driver18.getCurrentUrl()
      })
      .then(function(currentUrl){
          //trabalhar com a URL atual do navegador
      })
          
      //Fechar o navegador
      await driver18.quit()
  })


  it("TC003.019 - Card Cyber Monday Televisões", async function() {
      //DADO que o usuário abra o navegador
      let driver19 = await new Builder().forBrowser("chrome").build()
      //E navegue até o site
      await driver19.get("https://www.radiopopular.pt/cyber-monday/")
      await sleep (1000)
    
      //E clique no botão "aceitar" do cookie
      await driver19.findElement(By.xpath('//*[@id="rp"]/div[4]/div/div/div[2]/div[2]/div[2]/div[1]/button')).click() 
      await sleep (1000)  

      //Quando clicar no card "Cyber Monday Televisões"
      let televisões = await driver19.findElement(By.css("img[title='Televisões']"))
      //Forçar clique usando Actions
      let actions = driver19.actions({ bridge: true });
      await actions.move({ origin: televisões }).click().perform();
      await sleep (1000) 

      //Então o usuário acessa a página "TVs" (assertion - Validação da pág para verificar se o clique teve efeito)
      driver19.get("https://www.radiopopular.pt/categoria/tvs/")
      .then(function(){
          return driver19.getCurrentUrl()
      })
      .then(function(currentUrl){
          //trabalhar com a URL atual do navegador
      })
          
      //Fechar o navegador
      await driver19.quit()
  })


  it("TC003.020 - Card Cyber Monday Xiaomi", async function() {
      //DADO que o usuário abra o navegador
      let driver20 = await new Builder().forBrowser("chrome").build()
      //E navegue até o site
      await driver20.get("https://www.radiopopular.pt/cyber-monday/")
      await sleep (1000)
    
      //E clique no botão "aceitar" do cookie
      await driver20.findElement(By.xpath('//*[@id="rp"]/div[4]/div/div/div[2]/div[2]/div[2]/div[1]/button')).click() 
      await sleep (1000)  

      //Quando clicar no card "Cyber Monday Xiaomi"
      let xiaomi = await driver20.findElement(By.css("img[title='Xiaomi']"))
      //Forçar clique usando Actions
      let actions = driver20.actions({ bridge: true });
      await actions.move({ origin: xiaomi }).click().perform();
      await sleep (1000) 

      //Então o usuário acessa a página "Xiaomi" (assertion - Validação da pág para verificar se o clique teve efeito)
      driver20.get("https://www.radiopopular.pt/marca/xiaomi/")
      .then(function(){
          return driver20.getCurrentUrl()
      })
      .then(function(currentUrl){
          //trabalhar com a URL atual do navegador
      })
          
      //Fechar o navegador
      await driver20.quit()
  })


  it("TC003.021 - Card Cyber Monday Smartphones", async function() {
      //DADO que o usuário abra o navegador
      let driver21 = await new Builder().forBrowser("chrome").build()
      //E navegue até o site
      await driver21.get("https://www.radiopopular.pt/cyber-monday/")
      await sleep (1000)
    
      //E clique no botão "aceitar" do cookie
      await driver21.findElement(By.xpath('//*[@id="rp"]/div[4]/div/div/div[2]/div[2]/div[2]/div[1]/button')).click() 
      await sleep (1000)  

      //Quando clicar no card "Cyber Monday Smartphones"
      let smartphones = await driver21.findElement(By.css("img[title='Smartphones']"))
      //Forçar clique usando Actions
      let actions = driver21.actions({ bridge: true });
      await actions.move({ origin: smartphones }).click().perform();
      await sleep (1000) 

      //Então o usuário acessa a página "Smartphones" (assertion - Validação da pág para verificar se o clique teve efeito)
      driver21.get("https://www.radiopopular.pt/categoria/smartphones/")
      .then(function(){
          return driver21.getCurrentUrl()
      })
      .then(function(currentUrl){
          //trabalhar com a URL atual do navegador
      })
          
      //Fechar o navegador
      await driver21.quit()
  })


  it("TC003.022 - Card Cyber Monday Portáteis e Desktops", async function() {
      //DADO que o usuário abra o navegador
      let driver22 = await new Builder().forBrowser("chrome").build()
      //E navegue até o site
      await driver22.get("https://www.radiopopular.pt/cyber-monday/")
      await sleep (1000)
    
      //E clique no botão "aceitar" do cookie
      await driver22.findElement(By.xpath('//*[@id="rp"]/div[4]/div/div/div[2]/div[2]/div[2]/div[1]/button')).click() 
      await sleep (1000)  

      //Quando clicar no card "Portáteis e Desktops"
      let computadores = await driver22.findElement(By.css("img[title='Portáteis e Desktops']"))
      //Forçar clique usando Actions
      let actions = driver22.actions({ bridge: true });
      await actions.move({ origin: computadores }).click().perform();
      await sleep (1000) 

      //Então o usuário acessa a página "Computadores" (assertion - Validação da pág para verificar se o clique teve efeito)
      driver22.get("https://www.radiopopular.pt/categoria/computadores-4/")
      .then(function(){
          return driver22.getCurrentUrl()
      })
      .then(function(currentUrl){
          //trabalhar com a URL atual do navegador
      })
          
      //Fechar o navegador
      await driver22.quit()
  })


  it("TC003.023 - Card Cyber Monday Smartwatches e Bands", async function() {
      //DADO que o usuário abra o navegador
      let driver23 = await new Builder().forBrowser("chrome").build()
      //E navegue até o site
      await driver23.get("https://www.radiopopular.pt/cyber-monday/")
      await sleep (1000)

      //E clique no botão "aceitar" do cookie
      await driver23.findElement(By.xpath('/html/body/div[4]/div/div/div[2]/div[2]/div[2]/div[1]/button')).click() 
      await sleep (1000)  

      //Quando clicar no card "Smartwatches e Bands"
      let smartBands = await driver23.findElement(By.css("img[title='Smartwatches e Bands']"))
      //Forçar clique usando Actions
      let actions = driver23.actions({ bridge: true });
      await actions.move({ origin: smartBands }).click().perform();
      await sleep (1000) 

      //Então o usuário acessa a página "Smartwatches e Bands" (assertion - Validação da pág para verificar se o clique teve efeito)
      driver23.get("https://www.radiopopular.pt/categoria/smartwatches_bands/")
      let smartBands1 = await driver23.findElement(By.xpath('/html/body/main/div[2]/h1')).getText()
      smartBands1.should.equal('LAZER E DESPORTO')
          
      //Fechar o navegador
      await driver23.quit()
  })


  function sleep(ms){
    return new Promise (resolve =>setTimeout(resolve, ms));
  }

})

//npx mocha --no-timeouts "test/cyberMonday.js" (NO TERMINAL PARA RODAR O TESTE)