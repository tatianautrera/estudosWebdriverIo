class ContactPage{
    open(){
        return browser.url('/contact');
    }

    get FieldName(){
        return $('.contact-name input');
    }

    get FieldEmail(){
        return $('.contact-email input');
    }

    get FieldPhone(){
        return $('.contact-phone input');
    }

    get btnSubmit(){
        return $('button[type=submit]');
    }

    get txtMessageSuccess(){
        return $('.everest-forms-notice--success');
    }

    async submitForm(name, email, phone){
         //SetValue = apaga o valor e depois preenche
        //addValue - apenas escreeve o texto

        await this.FieldName.setValue(name)
        await this.FieldEmail.setValue(email)
        await this.FieldPhone.setValue(phone)
        await this.btnSubmit.click()
    }
}
export default new ContactPage()