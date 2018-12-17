import $ from 'jquery';
import {getCode} from './submit-code';


$(document).ready(function () {
    $('#codeSubmissionButton').click(() => {
        let codeToParse = $('#codePlaceholder').val();
        let args=$('#argumentsPlaceholder').val();
        let arrangedCode=getCode(codeToParse,args);
        //document.getElementById('arr').innerHTML=(arrangedCode.split('<').join('&lt')).split('>').join('&gt');
        document.getElementById('final').innerHTML=arrangedCode;
    });
});



