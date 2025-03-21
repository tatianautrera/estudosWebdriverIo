class NavComponent{

    get linksNavMenuWith2Selectors(){
        return $('#zak-primary-menu').$$('li[id*=menu]')
    }

    get linksNavMenuWith1Selectors(){
        return $$('#zak-primary-menu li[id*=menu]')
    }

    get menu(){
        return $('#zak-primary-menu');
    }

}
export default new NavComponent()