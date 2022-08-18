

const cards1=[
    {
       
        image:'https://www.dipmoda.com/UserFiles/Product/list/Yesil-yeni-sezon-cepli-salvar-pantolon-1-.jpg',
        urunad:'Salaş elbise',
        fiyat:'150',
        catagry:'kadın'

    },
    {
       
      image:'https://productimages.hepsiburada.net/l/44/600-800/10798890549298.jpg',
      urunad:'Kısa etek',
      fiyat:'650',
      catagry:'kadın'

    }
    ,
  
    {
       
       image:'https://i0.wp.com/seyhanevintage.com/wp-content/uploads/vintage-giyim-kadin-67-1-scaled.jpg?resize=510%2C612&ssl=1',
       urunad:'Kadın kazak',
       fiyat:'100',
       catagry:'kadın'

    }
    ,
    {
       
       image:'https://vakko.akinoncdn.com/products/2020/02/18/506678/614d152e-70fe-46b8-ba14-d004482ca609_size470x940_quality100.jpg',
       urunad:'Kadın kazak',
       fiyat:'10',
       catagry:'erkek'

    }
    ,

    {
       
       image:'https://i.pinimg.com/736x/23/f4/de/23f4de3b38b1f0dc63426f410c22e0eb.jpg',
       urunad:'Kadın kazak',
       fiyat:'20',
       catagry:'erkek'

    }
    ,

    {
       
       image:'https://i.pinimg.com/736x/23/f4/de/23f4de3b38b1f0dc63426f410c22e0eb.jpg',
       urunad:'Kadın kazak',
       fiyat:'20',
       catagry:'erkek'

    }
    ,

    {
       
       image:'https://i.pinimg.com/736x/23/f4/de/23f4de3b38b1f0dc63426f410c22e0eb.jpg',
       urunad:'Kadın kazak',
       fiyat:'20',
       catagry:'erkek'

    }
    ,

    {
       
       image:'https://i.pinimg.com/736x/23/f4/de/23f4de3b38b1f0dc63426f410c22e0eb.jpg',
       urunad:'Kadın kazak',
       fiyat:'20',
       catagry:'erkek'

    }
    ,
    {
       
       image:'https://cdn.beymen.com/mnresize/404/562/productimages/45ztbxtv.mjh_IMG_01_2110083586402.jpg',
       urunad:'Kadın kazak',
       fiyat:'175',
       catagry:'kadın'

    }
    ,
    {
       
       image:'https://cdn.sorsware.com/jimmykey/ContentImages/Product/2022kis/22K08GINA/bol-kesim-arkasi-uzun-100-pamuk-basic-gomlek_22k08gina_acik-sari-206-sari_1_614x805.jpg',
       urunad:'Kadın kazak',
       fiyat:'75',
       catagry:'kadın'

    }

]

const newCata=[
 
    {
        catagoy:'kadın'
    },

   {
        catagoy:'erkek'
    },

]

    

   newcard(newCata[0].catagoy)
 






  



newcardd()



   function newcardd(){


    const banner=document.querySelector('#card-contener2')

    for(i=0 ;i<cards1.length;i++){

        if(cards1[i].catagry==='erkek'){
           
            const html = `
            <div class="card-content">
           
                <div class="card-img-contner">
           
                <img  class="card-img" src="${cards1[i].image}" alt="">
            </div>
           
                <div class="card-titile">
                    <h2 class="urun-ad">${cards1[i].urunad}</h2>
                    <div class="rating-bar">***** </div>
                    <div class="card-fiyat"> Fiyat <span class='card-urun-fiyat' >${cards1[i].fiyat} </span></div>
                </div>
           
                
                <button class="btn-ekle">Sepete ekle</button>
           
           
           </div>`
           banner.innerHTML +=html
        }
       
        
      
    }

}


 


    function newcard(k){


        const banner=document.querySelector('.card-contener')

        for(i=0 ;i<cards1.length;i++){

            if(cards1[i].catagry===k){
               
                const html = `
                <div class="card-content">
               
                    <div class="card-img-contner">
               
                    <img  class="card-img" src="${cards1[i].image}" alt="">
                </div>
               
                    <div class="card-titile">
                        <h2 class="urun-ad">${cards1[i].urunad}</h2>
                        <div class="rating-bar">***** </div>
                        <div class="card-fiyat"> Fiyat <span class='card-urun-fiyat' >${cards1[i].fiyat} </span></div>
                    </div>
               
                    
                    <button class="btn-ekle">Sepete ekle</button>
               
               
               </div>`
               banner.innerHTML +=html
            }
           
            
          
        }

    }
    class Shopping{
        constructor(cardimg,urunBaslik,fiyat){
            this.cardimg=cardimg
            this.urunBaslik=urunBaslik
            this.fiyat=fiyat

           
        }


    }
    const sepetNew=document.querySelector('.list-item');
   
    class UI{
        addCard(shopping){
                
                console.log(sepetNew.length)
                
            sepetNew.innerHTML +=
            `
            <div class="sepet-content-1">
        <div class="sepet-content-img">
        <img class="sepet-img" src="${shopping.cardimg}" alt="">
    </div>
        <div class="urunad-fiyat-content">
            <h2 class="sepet-urunad">${shopping.urunBaslik}</h2>
            <h3 class="urunfiyats">${shopping.fiyat}</h2>
        </div>
        <div class="toplamm">  </div>
        <div class="urun-adet">
        <div class="eksi">-</div>
        <div class="number">1</div>
        <div class="artı">+</div>
    </div>
    </div>
            
       
            `


           
        }
    }

    const btnEkle= document.getElementsByClassName('btn-ekle')
    const cardContent=document.getElementsByClassName('card-content')

    for(let i=0;i<cardContent.length;i++){
        
       btnEkle[i].addEventListener('click',function(){


         let cardimg =  cardContent[i]. getElementsByClassName("card-img")[0].src
         let urunBaslik= cardContent[i]. getElementsByClassName('urun-ad')[0].textContent
         let fiyat=    cardContent[i]. getElementsByClassName('card-urun-fiyat')[0].textContent



      let shopping=new Shopping(cardimg,urunBaslik,fiyat)
        let ui=new UI()
      ui.addCard(shopping)


       cartCount(fiyat)
       
       })
       

    }
    

   



    
    
       
    function urunSayısı(){
               

    
    
    }



   function cartCount( fiyat){
  
             let cartListItem =document.querySelectorAll('.sepet-content-1')
            let itemCount = document.querySelector('.sepet-sayi');

                  console.log(cartListItem.length)
                  itemCount.textContent=cartListItem.length

        
                  let urunDegistir=1

                  const num=document.querySelectorAll('.number')
                  const arti=document.querySelectorAll('.artı')
                  const eksi=document.querySelectorAll('.eksi')
                  const sepetToplam=document.querySelectorAll('.sepet-toplam')
                  const urunfiyats=document.querySelectorAll('.urunfiyats')
      
                  const toplam=document.querySelectorAll('.toplamm')
                        
                  for(let i=0;i<cartListItem.length;i++){
                         
                   
                         arti[i].addEventListener('click',e=>
                    {
   
                         if(urunDegistir=>1){

                               urunDegistir++
             


                                num[i].textContent=urunDegistir
                            
                                
                            
                                toplam[i].textContent=num[i].textContent*fiyat
                                
        
                            }

     
  

    })

    eksi[i].addEventListener('click',e=>{
         if(urunDegistir<=1){
             urunDegistir=1
         }
         else if(urunDegistir>1){
             urunDegistir--
             toplam[i].textContent=toplam[i].textContent-fiyat
          
         }
         num[i].textContent=urunDegistir
         
    })
}}


    
    

      




        


