export  default class Customizator{
    constructor() {
        this.btnBlock = document.createElement('div');
        this.colorPicker = document.createElement('input');
        this.btnBlock.addEventListener('click', (e) => this.onScaleChange(e));
    }
    onScaleChange(e){
        let scale;
        const body = document.querySelector('body ');
        if(e.target.value){
            scale = +e.target.value.replace(/x/g, "");
        }
        function recurse(element){
            element.childNodes.forEach(node =>{
                if(node.nodeName === '$text' && node.nodeValue.replace(/\s+/g, "").length > 0){
                    let value = window.getComputedStyle(node.parentNode, null).fontSize;
                    console.log(value)
                }else {
                    recurse(node);
                }
            })
        }
        recurse(body);
    }

    render() {


        let scaleInputS = document.createElement('input'),
            scaleInputB = document.createElement('input'),
            panel = document.createElement('div');

        panel.append(this.btnBlock, this.colorPicker);

        scaleInputS.classList.add('scale_btn');
        scaleInputB.classList.add('scale_btn');
        this.btnBlock.classList.add('scale');
        this.colorPicker.classList.add('color');

        scaleInputS.setAttribute('type', 'button');
        scaleInputB.setAttribute('type', 'button');
        scaleInputS.setAttribute('value', '1x');
        scaleInputB.setAttribute('value', '1.5x');
        this.colorPicker.setAttribute('type', 'color');
        this.colorPicker.setAttribute('value', '#ffffff');


        this.btnBlock.append(scaleInputS, scaleInputB);

        panel.classList.add('panel');

        document.querySelector('body').append(panel);

    }
}