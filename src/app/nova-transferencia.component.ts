import { Component, Output } from "@angular/core";
import { EventEmitter } from "stream";

@Component({
    selector: 'app-nova-transferencia',
    templateUrl:'./nova-transferencia.component.html',
    styleUrls:['./nova-transferencia.component.scss']
})

export class NovaTransferenciaComponent{
    @Output() aoTranferir = new EventEmitter<any>();

     valor: number;
     destino: number;
     

    transferir(){
        console.log('Solicitada nova transferencia');

        const valorEmitir = { valor: this.valor, destino: this.destino };
        this.aoTranferir.emit(valorEmitir);

        this.limparCampos();

    }

    limparCampos(){
        this.valor = 0;
        this.destino = 0;
    }
 }
