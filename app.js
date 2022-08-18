const sepetin=document.querySelector('#sepetin')
const sepetins=document.querySelector('#sepetins')
const singing=document.querySelector('.singing')
const login=document.querySelector('.loging')
const body=document.querySelector('body')
const contener=document.querySelector('.contener')



sepetin.addEventListener('click',e=>{
    sepetins.classList.toggle('sepetgo')
})


singing.addEventListener('click',e=>{
    
    let t=false;
    login.classList.add('loging-togle')
  
    sepetins.classList.remove('sepetgo')

   
    body.style.overflow="hidden"
 
    
 
})


  
   
      

    
    

























const cikis=document.querySelector('.cikis')
cikis.addEventListener('click',e=>{
    
    
    login.classList.remove('loging-togle')
  
    

   
    body.style.overflow="auto"
 

 
})










            ///silder
            var models = [
                {
                   
                    image : 'https://st1.myideasoft.com/idea/fh/13/myassets/products/760/a54da553-8373-4b23-886b-2981375b57a7_min.jpeg?revision=1655203705',
                    titile:'Takılar da indirim'
                  
                },
                {
                    image : 'https://www.indigotaki.com/askin-kanatlari-isimli-gumus-kolye-gumus-isimli-kolye-indigo-taki-110289-20-K.jpg',
                    titile:'aksesuarlarda 1 alan 1 bedava'
                  
                }
                ,
                {
                    image : 'https://cdn.sorsware.com/oxxo/ContentImages/Product/22k/22KOX-MOPPATGOM2/oversize-gomlek--modal-_olive-darb-yesil_1_detay.jpg',
                    titile:'İlk bahar kadın kombini'
                  
                },
                {
                    image : 'https://shop.blu.com.tr/Uploads/EditorUploads/kadin_dik.jpg',
                    titile:'İnalımaz indirmler bu Çarşambay kadar'
                  
                }
                ,
                {
                    image : 'https://www.jakamen.com.tr/Uploads/Slider/-63.jpg?t=20220315092200',
                    titile:'Erkek kombinleri '
                  
                },
                {
                    image : 'https://vakko.akinoncdn.com/products/2022/03/09/1298782/6cf84369-9632-455d-9a5f-a556ce7528cc_size470x940_quality100.jpg',
                    titile:'%50 varann indirmileri Kaçırma'
                  
                }

            ];
            
            var index = 0;
            var slaytCount = models.length;
            var interval;
            

    


            var settings={
                duration : '3000',
                random : false
            };
            
            init(settings);
            
            document.querySelector('.left-btn').addEventListener('click',function(){
                index--;
                showSlide(index);
        
               
            });
            
            document.querySelector('.right-btn').addEventListener('click',function(){
                index++;
                showSlide(index);
                
               
            });
            
            document.querySelectorAll('.arrow').forEach(function(item){
                item.addEventListener('mouseenter',function(){
                    clearInterval(interval);
                })
            });

            
            document.querySelectorAll('.arrow').forEach(function(item){
                item.addEventListener('mouseleave',function(){
                    init(settings);
                })
            })
            
            
            function init(settings){
            
                var prev;

                interval=setInterval(function(){
                    
                 if(settings.random){
                     
                     do{
                     index = 0;
                     }while(index == prev)
                     prev = index;
                          }else{
                  
                        if(slaytCount == index+1){
                            index = -1;
                        }
                        showSlide(index);
                       
                        index++;

                     
                    }
                    showSlide(index);
            
                },settings.duration)
  
            }
            
            
            
            function showSlide(i){
            
                index = i;
            
                if (i<0) {
                    index = slaytCount - 1;
                }
                if(i >= slaytCount){
                    index =0;
                }
                document.querySelector('.silder-image').setAttribute('src',models[index].image);
                document.querySelector('.silder-titile').textContent=models[index].titile;  
            }

        

            let changee=document.querySelector('.radio-control')
            
            for(i=0;i<models.length;i++){           
                var divv=document.createElement('div')
                changee.appendChild(divv)             
                divv.id=i   
             
            }
    
             let change=document.querySelectorAll('.radio-control')

         for(let icon of change){
        icon.addEventListener('click',e=>{
            if(e.target.id==='0'){
                index=0
            }
            else if(e.target.id==='1'){
            index=1         
            }
            else if(e.target.id==='2'){
            index=2             
            }
            else if(e.target.id==='3'){
                index=3                  
                }
            else if(e.target.id==='4'){
                 index=4                  
                 }
            else if(e.target.id==='5'){
                 index=5           
                 }
             else if(e.target.id==='6'){
                  index=6          
                  }
                          
        })
        
        
        }

    
       
/*
        -silder da resime göre raido btnler aktiflik olayı yapılacak
        -banner a card tasarımı yapılacak (yapıldı)
        -kayıt fromu düzenlenecek
        -sepet kısımı düzenlenecek tamamlanacak hepsi((yaıldı))
        -footer alanı yapılacak



*/ 



        
      



        
        

          

            
            
            
            