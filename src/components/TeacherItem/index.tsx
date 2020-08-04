import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem(){
    return(
        <article className="teacher-item">
            <header>
            <img src="https://scontent.fcgh34-1.fna.fbcdn.net/v/t31.0-8/s960x960/19667798_1474018879344079_8082077948375185766_o.jpg?_nc_cat=111&_nc_sid=7aed08&_nc_eui2=AeGLF-0IHRxeAV3-qRyKCb-4SUug-IH-is9JS6D4gf6KzxarCxnAjrudcslQLvfT5AALynb1AOHqWJLIp-FNhrik&_nc_ohc=IeqCcZDbUa4AX8UaGWc&_nc_ht=scontent.fcgh34-1.fna&_nc_tp=7&oh=0e16b86f782dcf6a259fa54e85d84e6b&oe=5F4F953B" alt="Caio Haruo"/>
            <div>
                <strong>Caio Haruo</strong>
                <span>Química</span>
            </div>
            </header>

            <p>
            Entusiasta das melhores tecnologias de química avançada.
            <br/><br/>
            Apaixonado por explodir coisas em laboratório e por  mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="WhatsApp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;