
export function BurgerMenu(burger: HTMLElement) {
   if(!burger)return
   
   const 
        header = burger.closest('header'),
        menu = header?.querySelector('.menu'),
        body = burger.closest('body')
  
    if(!burger.classList.contains('active')) {         
        burger.classList.add('active')
        menu?.classList.add('active')
        body?.classList.add('active')
    }        
    else {
        burger.classList.remove('active')
        menu?.classList.remove('active')
        body?.classList.remove('active')
    }
}