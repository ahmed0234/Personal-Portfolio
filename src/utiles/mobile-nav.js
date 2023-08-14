const mobile__nav=()=>{

    const headerbtn = document.querySelector('.header__bars');
    
    const mobile_nav = document.querySelector('.mobile__nav');

    const mobile_links=document.querySelectorAll('.mobile__links');

    //State
    let ismobilenavopen= false;
    
    
    headerbtn.addEventListener('click', ()=> {
            ismobilenavopen=!ismobilenavopen;
            if (ismobilenavopen) {
                mobile_nav.style.display='flex';
                document.body.style.overflowY='hidden';
            }
            else{
                mobile_nav.style.display='none';
                document.body.style.overflowY='auto';
            }


            
    });

    mobile_links.forEach(link=>{
                link.addEventListener('click', ()=> {
                    ismobilenavopen=false;
                    mobile_nav.style.display='none';
                    document.body.style.overflowY='auto';
                })


    })

};    


export default mobile__nav;