import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import {Wizard, Warrior} from './job.js';


$().ready(function(){

  let player = null;

  $("#submitBtn").click(function(){
    let job = $("#job").val();
    if (job == "wizard"){
      player = new Wizard($("#name").val())
    }else if (job == "warrior"){
      player = new Warrior($("#name").val())
    }
    
    for (let key in player) {
      if(typeof player[key] !== "function"){
        $("#statsList").append(
          "<li>" + key + ": " + player[key] + "</li>"
        )
      }
    }
  });
})