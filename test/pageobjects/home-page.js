import navComponent from "./components/nav-comp";
class HomePage{
    open(){
        return browser.url("/")
    }

    get btnGetStarted(){
        return $('#get-started');
    }

    get menuAbout(){
        return $('#menu-item-491');
    }

    get imageLogo(){
        return $('img[alt="Practice E-Commerce Site"]');
    }

    get txtHeading(){
        return $('.elementor-widget-container h1');
    }

    get navComponent(){
        return navComponent;
    }
}
export default new HomePage();