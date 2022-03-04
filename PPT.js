        let computadora = Math.floor(Math.random() * 3) //con esto la maquina elige entre las 3
        let resultado = document.getElementById("resultado") 
        let CPU = document.getElementById("CPUelige") // variable con el resultado de computadora
        let piedra = 0
        let papel = 1
        let tijera = 2 
        let player // el valor se define dentro de cada funcion de abajo
        let papelito = document.getElementById("papelito")
        function papeli(){
           player = 1
           if (player==1&&computadora==0||player==2&computadora==1||player==0&&computadora==2)
           {
               resultado.innerHTML = "Ganaste"
           }
           else if(computadora==1&&player==0||computadora==2&&player==1||computadora==0&&player==2)
           {
               
               resultado.innerHTML = "Perdiste"
           }
           else{
               
               resultado.innerHTML = "Empate"
           }function EleccionCPU (){
            switch(true){
                case computadora === 0 : return "La compu eligió PIEDRA" 
                break;
                case computadora === 1: return "La compu eligió PAPEL"
                break;
                case computadora === 2: return "La compu eligió TIJERAA"
                break;
            }
        
    }
    CPU.innerHTML = EleccionCPU()
        }
        let tijerita = document.getElementById("tijerita")
        function tijeri(){
            player= 2
            if (player==1&&computadora==0||player==2&computadora==1||player==0&&computadora==2)
            {
                resultado.innerHTML = "Ganaste"
            }
            else if(computadora==1&&player==0||computadora==2&&player==1||computadora==0&&player==2)
            {
                
                resultado.innerHTML = "Perdiste"
            }
            else{
                
                resultado.innerHTML = "Empate"
            }function EleccionCPU (){
                switch(true){
                    case computadora === 0 : return "La compu eligió PIEDRA" 
                    break;
                    case computadora === 1: return "La compu eligió PAPEL"
                    break;
                    case computadora === 2: return "La compu eligió TIJERAA"
                    break;
                }
            
        }
        CPU.innerHTML = EleccionCPU()
        }
         let piedrita = document.getElementById("piedrita")
             function piedri(){
           player = 0
           if (player==1&&computadora==0||player==2&computadora==1||player==0&&computadora==2)
            {
                resultado.innerHTML = "Ganaste"
            }
            else if(computadora==1&&player==0||computadora==2&&player==1||computadora==0&&player==2)
            {
                
                resultado.innerHTML = "Perdiste"
            }
            else{
                
                resultado.innerHTML = "Empate"
            }function EleccionCPU (){
                switch(true){
                    case computadora === 0 : return "La compu eligió PIEDRA" 
                    break;
                    case computadora === 1: return "La compu eligió PAPEL"
                    break;
                    case computadora === 2: return "La compu eligió TIJERAA"
                    break;
                }
            
        }
        CPU.innerHTML = EleccionCPU()
        }
           
